let usage = {};  // current day
let history = {};  // all days
let lastDomain = null;
let lastTime = Date.now();
let isIdle = false;

chrome.idle.onStateChanged.addListener((newState) => {
  const goingIdle = newState === "locked" || newState === "idle";

  if (goingIdle && !isIdle) {
    // Flush time spent so far
    const now = Date.now();
    if (lastDomain) {
      usage[lastDomain] = (usage[lastDomain] || 0) + (now - lastTime) / 1000;
    }
    lastDomain = null; // Stop counting
  }

  isIdle = goingIdle;

  if (!isIdle) {
    lastTime = Date.now(); // Restart timing
  }
});


const day = new Date().toLocaleDateString("en-US", { weekday: "long" }).toLowerCase();
//const allowed = limits?.[day]?.[domain] ? limits[day][domain] * 60 : null;

function getDomain(url) {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return null;
  }
}

function saveUsage() {
  const today = new Date().toLocaleDateString("en-CA"); // "YYYY-MM-DD" in local time
  
  chrome.storage.local.get(["usage", "history"], ({ usage: storedUsage = {}, history: storedHistory = {} }) => {
    // Update the history with today's usage
    storedHistory[today] = storedUsage;  // Save the current usage to history for today
    
    // Save both usage and history back, merging previous usage data
    chrome.storage.local.set({
      usage: { ...storedUsage, ...usage },  // Merge the old and new usage objects
      history: storedHistory
    });
  });
}

function checkActiveTab() {
  if (isIdle) return;

  isChromeVisible((isVisible) => {
    if (!isVisible) return; // Don't count if Chrome is minimized or hidden

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs[0]) return;
      const domain = getDomain(tabs[0].url);
      const now = Date.now();

      if (lastDomain) {
        usage[lastDomain] = (usage[lastDomain] || 0) + (now - lastTime) / 1000;
      }

      lastDomain = domain;
      lastTime = now;

      chrome.storage.local.get(["limits"], ({ limits }) => {
        const allowed = limits && limits[domain] ? limits[domain] * 60 : null;
        const used = usage[domain] || 0;

        chrome.runtime.sendMessage({
          type: "TIMER_UPDATE",
          remaining: allowed ? Math.max(0, Math.floor(allowed - used)) : null
        });

        if (allowed && used >= allowed) {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ["content/showOverlay.js"]
          });
        } else {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ["content/hideOverlay.js"]
          });
        }
      });

      saveUsage();
    });
  });
}


function checkDateRollover() {
  const today = new Date().toLocaleDateString("en-CA");

  chrome.storage.local.get(["lastDate", "history"], ({ lastDate, history = {} }) => {
    if (lastDate !== today) {
      // Archive yesterday's in-memory usage
      if (lastDate) {
        history[lastDate] = { ...usage };  // ✅ Save the in-memory usage, not old storedUsage
      }

      usage = {};  // Reset usage

      chrome.storage.local.set({
        usage: {},
        history,
        lastDate: today,
      });

      console.log("Date rollover triggered:", lastDate, "→", today);
    }
  });
}


function isChromeVisible(callback) {
  chrome.windows.getCurrent({ populate: true }, (window) => {
    // Check if the window is minimized or fully hidden
    const isVisible = !window.state || window.state === 'normal'; // 'normal' means not minimized
    callback(isVisible);
  });
}

chrome.windows.onFocusChanged.addListener((windowId) => {
  const now = Date.now();

  if (windowId === chrome.windows.WINDOW_ID_NONE) {
    // Chrome window lost focus, flush current domain
    if (lastDomain) {
      usage[lastDomain] = (usage[lastDomain] || 0) + (now - lastTime) / 1000;
      lastDomain = null;
    }
    return;
  }

  // Chrome window is focused again
  lastTime = now;
  checkActiveTab();
});

setInterval(() => {
  if (isIdle) return;  // prevent all processing
  checkDateRollover();
  checkActiveTab();
}, 30000);

// to keep the extension active
chrome.alarms.create("checkTab", { periodInMinutes: 1 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "checkTab") {
    checkDateRollover();
    checkActiveTab();
  }
});


function initializeIdleState() {
  chrome.idle.queryState(60, (state) => {
    isIdle = state === "locked" || state === "idle";
    if (isIdle) {
      lastDomain = null;
      lastTime = Date.now();
    }
  });
}

chrome.runtime.onStartup.addListener(() => {
  console.log("Extension started on browser launch");
  chrome.alarms.create("checkTab", { periodInMinutes: 1 });
  initializeIdleState();
});

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
  chrome.alarms.create("checkTab", { periodInMinutes: 1 });
  initializeIdleState();
});