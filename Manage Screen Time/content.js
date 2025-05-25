let overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.bottom = "10px";
overlay.style.right = "10px";
overlay.style.background = "#4f46e5";
overlay.style.color = "white";
overlay.style.padding = "6px 10px";
overlay.style.borderRadius = "8px";
overlay.style.fontSize = "14px";
overlay.style.zIndex = "9999";
overlay.style.fontFamily = "sans-serif";
overlay.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
overlay.style.display = "none";
overlay.style.pointerEvents = 'none'
document.body.appendChild(overlay);

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "TIMER_UPDATE") {
    if (msg.remaining === null) {
      overlay.style.display = "none";
    } else {
      overlay.style.display = "block";
      let min = Math.floor(msg.remaining / 60);
      let sec = msg.remaining % 60;
      timerEl.textContent = `Time left: ${min}:${sec.toString().padStart(2, '0')}`;
    }
  }
});