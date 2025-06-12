let currentDomain = null;

////////////////////////////////// SHOW CHART ////////////////////////////

// full.js (linked from full.html)

let chart, currentDayData = {};

function loadWeeklyChart() {
  chrome.storage.local.get(["history"], ({ history = {} }) => {
    const labels = [];
    const data = [];
    const today = new Date();
    const dates = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(today);
      d.setDate(d.getDate() - (6 - i));
      return d.toISOString().slice(0, 10);
    });

    for (const date of dates) {
      labels.push(new Date(date).toLocaleDateString(undefined, { weekday: 'short' }));
      const daily = history[date] || {};
      currentDayData[date] = daily;
      let total = 0;
      for (const domain in daily) {
        total += daily[domain];
      }
      data.push(Math.round(total / 60)); // still store in minutes for tooltip
    }

    const ctx = document.getElementById('weeklyChart').getContext('2d');
    chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Total Screen Time',
          data,
          backgroundColor: '#4f46e5'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 60, // each step = 1 hour (since data is in minutes)
              callback: function (value) {
                return `${value / 60}h`;
              }
            }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                const value = context.raw;
                const hrs = Math.floor(value / 60);
                const mins = value % 60;
                return hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m`;
              }
            }
          }
        },
        onClick: (evt, elements) => {
          if (elements.length > 0) {
            const i = elements[0].index;
            const clickedDate = dates[i];
            showDayBreakdown(clickedDate);
          }
        }
      }
    });

    const todayStr = today.toISOString().slice(0, 10);
    showDayBreakdown(todayStr);
  });
}


////////////////////////////////// SHOW DAY BREAKDOWN //////////////////////////

function showDayBreakdown(date) {
  const breakdownContainer = document.getElementById('dayBreakdown');

  // TODAY, YESTERDAY, etc names
  const today = new Date();
  const givenDate = new Date(date);
  const diffDays = Math.floor((today - givenDate) / (1000 * 60 * 60 * 24));

  let dateDisplay;
  if (diffDays === 0) {
    dateDisplay = "Today";
  } else if (diffDays === 1) {
    dateDisplay = "Yesterday";
  } else {
    dateDisplay = givenDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric' });
  }

  breakdownContainer.innerHTML = `<h3 style="margin-bottom: 10px;">${dateDisplay}</h3>`;

  const data = currentDayData[date] || {};
  const entries = Object.entries(data).sort((a, b) => b[1] - a[1]);

  // GENERATING THE VISITED WEBSITES LIST

  if (entries.length === 0) {
    breakdownContainer.innerHTML += `<p style="color: #666;">No screen time recorded for this day.</p>`;
    return;
  }

  const list = document.createElement('ul');
  list.style.listStyle = 'none';
  list.style.padding = '0';
  list.style.margin = '0';

  for (const [domain, secs] of entries) {
    const hours = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
  
    const item = document.createElement('li');
    item.style.display = 'flex';
    item.style.alignItems = 'center';
    item.style.justifyContent = 'space-between';
    item.style.padding = '0px 0px 0px 8px';
    item.style.borderBottom = '1px solid #eee';
  
    // Left side: favicon + domain + time
    const left = document.createElement('div');
    left.style.display = 'flex';
    left.style.alignItems = 'center';
    left.style.gap = '6px';
  
    const icon = document.createElement('img');
    icon.src = `https://www.google.com/s2/favicons?sz=32&domain=${domain}`;
    icon.width = 16;
    icon.height = 16;
  
    const text = document.createElement('span');
    let timeString = '';
    if (hours > 0) timeString += `${hours}h `;
    if (mins >= 1) timeString += `${mins}m`;
    else if (mins < 1 && hours < 1) timeString += `<1m `;
  
    text.innerHTML = `<strong>${domain}</strong>: ${timeString}`;
    text.style.fontSize = '14px';
  
    left.appendChild(icon);
    left.appendChild(text);

    // Right side: hourglass button
    const btn = document.createElement('button');
    btn.innerHTML = '⏳';
    btn.title = 'Set screen time limit';
    btn.style.background = 'transparent';
    btn.style.border = 'none';
    btn.style.cursor = 'pointer';
    btn.style.fontSize = '18px';
    btn.style.height = '40px';
    btn.style.width = '40px';

    btn.addEventListener('mouseenter', () => {
      btn.style.backgroundColor = 'rgb(223, 220, 255)'; // Grey-blue color on hover
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.backgroundColor = 'transparent'; // Revert to transparent on mouse leave
    });

    btn.onclick = () => {
      document.getElementById('domainInput').value = domain;
      promtPin();
    };

    item.appendChild(left);
    item.appendChild(btn);
    list.appendChild(item);
  }

  breakdownContainer.appendChild(list);
}


////////////////////////// SETTING PIN/PASSWORD FOR LIMITS //////////////////

document.getElementById("set-limit-btn").addEventListener("click", () => {
  // Prompt for pin when user tries to set limits
  promtPin();
});

function promtPin() {
  chrome.storage.local.get("pin", ({ pin }) => {
    if (!pin) {
      show(setupPinScreen);
      document.getElementById('setupPinInput').focus();
    } else {
      show(enterPinScreen);
      document.getElementById('enterPinInput').focus();
    }
  });
}

const setupPinScreen = document.getElementById("setupPinScreen");
const enterPinScreen = document.getElementById("enterPinScreen");
const setLimitScreen = document.getElementById("set-limit-ui");

const setupPinInput = document.getElementById("setupPinInput");
const savePinBtn = document.getElementById("savePinBtn");

const enterPinInput = document.getElementById("enterPinInput");
const verifyPinBtn = document.getElementById("verifyPinBtn");

setupPinScreen.style.display = "none";
enterPinScreen.style.display = "none";
setLimitScreen.style.display = "none";

const overlayBackdrop = document.getElementById("overlayBackdrop");

function show(section) {
  setupPinScreen.style.display = "none";
  enterPinScreen.style.display = "none";
  setLimitScreen.style.display = "none";
  overlayBackdrop.style.display = "block";
  section.style.display = "block";
}

function hideOverlay() {
  setupPinScreen.style.display = "none";
  enterPinScreen.style.display = "none";
  setLimitScreen.style.display = "none";
  overlayBackdrop.style.display = "none";
}

// Optional: hide overlay if user clicks outside
overlayBackdrop.onclick = hideOverlay;
document.querySelector('#set-limit-ui .close-btn').onclick = hideOverlay;



///////////////// SUBMIT NEW PIN ///////////////
document.getElementById("setupPinForm").addEventListener("submit", (e) => { // use submit instead of click so no multiple buttons are submitted at the same time
  e.preventDefault();
  const pin = setupPinInput.value;
  if (pin.length >= 4) {
    chrome.storage.local.set({ pin }, () => {
      show(setLimitScreen);
      setupPinInput.value = "";
    });
  } else {
    alert("Password must be 4 characters minimum.");
  }
});

///////////////// CHECK PIN TO ENTER SET LIMIT UI ///////////////
document.getElementById("enterPinForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const enteredPin = enterPinInput.value;
  chrome.storage.local.get("pin", ({ pin }) => {
    if (enteredPin === pin) {
      show(setLimitScreen);
      enterPinInput.value = "";

      // Wait for the DOM to finish rendering and then focus the input
      setTimeout(() => {
        document.getElementById('limitInput').focus();
      }, 0);

    } else {
      alert("Incorrect password.");
    }
  });
});


///////////////////////// SET LIMITS //////////////////////////

function setLimits() {
  // This is where you handle setting the limits
  console.log("Setting limits...");
}

// Utility
function getDomain(url) {
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\./, '');
  } catch {
    return null;
  }
}

// ////////////////// LOAD LIMITS LIST /////////////////////////////////
function loadLimits() {
  chrome.storage.local.get(["limits", "usage"], ({ limits = {}, usage = {} }) => {
    const lists = document.querySelectorAll(".limitList");

    lists.forEach((list) => {
      list.innerHTML = "";  // Clear previous content

      for (const domain in limits) {
        const li = document.createElement("li");
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.gap = "8px";

        const used = usage[domain] || 0;
        const allowed = limits[domain] * 60;

        if (used >= allowed) {
          li.style.backgroundColor = "#fecaca"; // red-200
        }

        const left = document.createElement('div');
        left.style.display = 'flex';
        left.style.alignItems = 'center';

        const favicon = document.createElement("img");
        favicon.src = `https://www.google.com/s2/favicons?sz=32&domain=${domain}`;

        const text = document.createElement("span");
        const totalMinutes = limits[domain];
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        text.innerHTML = `<strong>${domain}</strong>: ${hours}h ${minutes}m`;

        left.appendChild(favicon);
        left.appendChild(text);
        li.appendChild(left);

        if (list.id === "remove-items") {
          const removeBtn = document.createElement("button");
          removeBtn.style.width = "30px";
          removeBtn.textContent = "×";
          removeBtn.style.marginLeft = "10px";
          removeBtn.onclick = () => {
            delete limits[domain];
            chrome.storage.local.set({ limits }, loadLimits);
          };
          li.appendChild(removeBtn);
        }

        list.appendChild(li);
      }
    });
  });
}


// Set form submit for adding limits
document.getElementById("addForm").onsubmit = (e) => {
  e.preventDefault();

  const domain = document.getElementById("domainInput").value.trim().toLowerCase();
  const hourInput = document.getElementById("hourInput").value;
  const minuteInput = document.getElementById("minuteInput").value;

  const hours = parseInt(hourInput || "0", 10);
  const minutes = parseInt(minuteInput || "0", 10);

  const totalMinutes = hours * 60 + minutes;
  if (!domain || totalMinutes <= 0) return;

  chrome.storage.local.get(["limits"], ({ limits = {} }) => {
    limits[domain] = totalMinutes;
    chrome.storage.local.set({ limits }, () => {
      document.getElementById("domainInput").value = "";
      document.getElementById("hourInput").value = "";
      document.getElementById("minuteInput").value = "";
      loadLimits();
    });
  });
};

/////////////////////////// DAY SELECT BUTTON ///////////////////////////

document.addEventListener('DOMContentLoaded', function () {
  const days = document.querySelectorAll('.day');
  const label = document.getElementById('selectionLabel');
  const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  days.forEach((day, index) => {
    day.addEventListener('click', () => {
      day.classList.toggle('selected');
      updateLabel();
    });
  });

  function updateLabel() {
    const selected = Array.from(days)
      .map((el, i) => el.classList.contains('selected') ? dayNames[i] : null)
      .filter(Boolean);

    if (selected.length === 0) {
      label.textContent = "No days selected";
    } else if (selected.length === 7) {
      label.textContent = "Everyday";
    } else {
      label.textContent = selected.join(', ');
    }
  }
});


const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
function loadDailyLimitsUI() {
  const container = document.getElementById("dailyLimits");
  chrome.storage.local.get(["limits"], ({ limits = {} }) => {
    container.innerHTML = "";
    for (const day of days) {
      const dayLimits = limits[day] || {};
      const section = document.createElement("div");
      section.innerHTML = `<h3 style="margin-top:10px">${day.toUpperCase()}</h3>`;

      const list = document.createElement("ul");
      list.style.paddingLeft = "16px";
      for (const domain in dayLimits) {
        const li = document.createElement("li");
        li.textContent = `${domain}: ${dayLimits[domain]} min`;
        list.appendChild(li);
      }
      section.appendChild(list);

      const form = document.createElement("form");
      form.innerHTML = `
        <input placeholder="example.com" required />
        <input type="number" min="1" placeholder="minutes" required />
        <button>Add</button>
      `;
      form.onsubmit = (e) => {
        e.preventDefault();
        const domain = form.children[0].value.trim().toLowerCase();
        const minutes = parseInt(form.children[1].value);
        if (!domain || !minutes) return;

        if (!limits[day]) limits[day] = {};
        limits[day][domain] = minutes;
        chrome.storage.local.set({ limits }, loadDailyLimitsUI);
      };
      section.appendChild(form);
      container.appendChild(section);
    }
  });
}


// Initial loads
document.addEventListener("DOMContentLoaded", () => {
  loadWeeklyChart();
  loadLimits();
});


setInterval(() => {
  loadWeeklyChart();
}, 30000);
