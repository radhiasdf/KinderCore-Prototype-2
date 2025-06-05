let usage = {};  // current day
let history = {};  // all days
let lastDomain = null;
let lastTime = Date.now();

const day = new Date().toLocaleDateString("en-US", { weekday: "long" }).toLowerCase();
const allowed = limits?.[day]?.[domain] ? limits[day][domain] * 60 : null;

function getDomain(url) {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return null;
  }
}

function saveUsage() {
  const today = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
  chrome.storage.local.get(["history"], ({ history: storedHistory = {} }) => {
    storedHistory[today] = usage;
    chrome.storage.local.set({ usage, history: storedHistory });
  });
}

function checkActiveTab() {
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
        chrome.tabs.remove(tabs[0].id);
      }
    });

    saveUsage();
  });
}

setInterval(checkActiveTab, 1000);