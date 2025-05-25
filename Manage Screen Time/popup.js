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

// Initial loads
loadLimits();
loadUsage();
setInterval(loadUsage, 1000);
