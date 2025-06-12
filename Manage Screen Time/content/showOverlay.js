(() => {
    if (!document.getElementById("screen-limit-overlay")) {
      document.querySelectorAll("video, audio").forEach(media => media.pause());
  
      let id = window.setTimeout(() => {}, 0);
      while (id--) {
        window.clearTimeout(id);
        window.clearInterval(id);
      }
  
      if (window.timerId) {
        clearInterval(window.timerId);
        window.timerId = null;
      }
  
      const overlay = document.createElement("div");
      overlay.id = "screen-limit-overlay";
      overlay.style = `
        position: fixed;
        z-index: 999999;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: all;
      `;
  
      const box = document.createElement("div");
      box.style = `
        background: #4f46e5;
        padding: 2rem 3rem;
        border-radius: 1rem;
        color: white;
        font-family: sans-serif;
        text-align: center;
        box-shadow: 0 0 20px rgba(0,0,0,0.5);
        max-width: 80%;
      `;
      box.innerHTML = `
        <div style="font-size: 2rem; font-weight: bold;">⏰ Screen time limit reached</div>
        <div style="margin-top: 1rem; font-size: 1.2rem;">Video paused. Please take a break.</div>
      `;
  
      overlay.appendChild(box);
      document.body.appendChild(overlay);
      document.body.style.overflow = "hidden";
    }
  })();
  