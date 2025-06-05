let currentDomain = null;

// Utility
function getDomain(url) {
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\./, '');
  } catch {
    return null;
  }
}

// Load limits list
function loadLimits() {
  chrome.storage.local.get(["limits", "usage"], ({ limits = {}, usage = {} }) => {
    const list = document.getElementById("limitList");
    list.innerHTML = "";

    for (const domain in limits) {
      const li = document.createElement("li");
      const used = usage[domain] || 0;
      const allowed = limits[domain] * 60;

      li.textContent = `${domain}: ${limits[domain]} mins`;
      if (used >= allowed) {
        li.style.backgroundColor = "#fecaca"; // red-200
      }

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "×";
      removeBtn.onclick = () => {
        delete limits[domain];
        chrome.storage.local.set({ limits }, loadLimits);
      };
      li.appendChild(removeBtn);
      list.appendChild(li);
    }
  });
}

// Load usage list and update active tab every second
function loadUsage() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeDomain = getDomain(tabs[0]?.url || "");
    currentDomain = activeDomain;

    chrome.storage.local.get(["usage"], ({ usage = {} }) => {
      const usageList = document.getElementById("usageList");
      usageList.innerHTML = "";

      const sorted = Object.entries(usage).sort(([a], [b]) => {
        if (a === activeDomain) return -1;
        if (b === activeDomain) return 1;
        return usage[b] - usage[a];
      });

      for (const [domain, seconds] of sorted) {
        const li = document.createElement("li");
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        li.textContent = `${domain}: ${mins}m ${secs}s`;
        if (domain === activeDomain) {
          li.style.fontWeight = "bold";
        }
        usageList.appendChild(li);
      }
    });
  });
}

// Set form submit for adding limits
document.getElementById("addForm").onsubmit = (e) => {
  e.preventDefault();
  const domain = document.getElementById("domainInput").value.trim().toLowerCase();
  const limit = parseInt(document.getElementById("limitInput").value);
  if (!domain || !limit) return;

  chrome.storage.local.get(["limits"], ({ limits = {} }) => {
    limits[domain] = limit;
    chrome.storage.local.set({ limits }, () => {
      document.getElementById("domainInput").value = "";
      document.getElementById("limitInput").value = "";
      loadLimits();
    });
  });
};

////////////////////////////////// CHART.JS ////////////////////////////

// full.js (linked from full.html)

// Load Chart.js
document.addEventListener("DOMContentLoaded", () => {
  const chartScript = document.createElement("script");
  chartScript.src = "https://cdn.jsdelivr.net/npm/chart.js";
  chartScript.onload = () => {
    loadWeeklyChart();
    //setupChartClickHandler(); // if defined
  };
  document.head.appendChild(chartScript);
});

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
      data.push(Math.round(total / 60)); // in minutes
    }

    const ctx = document.getElementById('weeklyChart').getContext('2d');
    chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Total Screen Time (minutes)',
          data,
          backgroundColor: '#4f46e5'
        }]
      },
      options: {
        onClick: (evt, elements) => {
          if (elements.length > 0) {
            const i = elements[0].index;
            const clickedDate = dates[i];
            showDayBreakdown(clickedDate);
          }
        }
      }
    });
  });
}

function showDayBreakdown(date) {
  const breakdownContainer = document.getElementById('dayBreakdown');
  breakdownContainer.innerHTML = `<h3>${date}</h3>`;

  const data = currentDayData[date] || {};
  const entries = Object.entries(data).sort((a, b) => b[1] - a[1]);
  for (const [domain, secs] of entries) {
    const mins = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    const icon = document.createElement('img');
    icon.src = `https://www.google.com/s2/favicons?domain=${domain}`;
    icon.style.width = '16px';
    icon.style.marginRight = '8px';
    icon.style.verticalAlign = 'middle';

    const li = document.createElement('div');
    li.innerHTML = `${icon.outerHTML}<strong>${domain}</strong>: ${mins}m ${s}s`;
    breakdownContainer.appendChild(li);
  }
}



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

loadDailyLimitsUI();


// Initial loads
loadLimits();
loadUsage();
setInterval(loadUsage, 1000);
