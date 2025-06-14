// coin.js

// Get coins from localStorage
function getStoredCoins() {
    return parseInt(localStorage.getItem("totalCoins")) || 0;
  }
  
  // Update global coin counter in top-left
  function updateGlobalCoinDisplay() {
    const coinDisplay = document.getElementById("totalCoins");
    if (coinDisplay) {
      coinDisplay.textContent = getStoredCoins();
    }
  }
  
  // Bounce the top-left icon
  export function animateCoinIcon() {
    const counter = document.getElementById("globalCoinCounter");
    if (!counter) return;
  
    counter.classList.add("bounce");
    setTimeout(() => {
      counter.classList.remove("bounce");
    }, 400);
  }
  
  // Public function to add coins
  export function addCoins(num) {
    const total = getStoredCoins() + num;
    localStorage.setItem("totalCoins", total);
    updateGlobalCoinDisplay();
    animateCoinIcon();
  }
  
  // Function to animate coin reward popup (like level reward)
  export function animateCoinCount(numCoins) {
    const container = document.getElementById("coinAnimationArea");
    const counter = document.getElementById("coinCounter");
    container.innerHTML = '';
    counter.className = "coin-counter";
    counter.textContent = '';
  
    let coinValue = 1;
    let speed = 80;
  
    function showNextCoin() {
      if (coinValue > numCoins) {
        addCoins(numCoins);  // Update global count
        return;
      }
  
      counter.textContent = `+${coinValue}`;
      const coin = document.createElement("span");
      coin.textContent = "🪙";
      coin.className = "coin-bounce";
      container.appendChild(coin);
      container.scrollTop = container.scrollHeight;
      coinValue++;
      if (speed > 0) speed--;
      setTimeout(showNextCoin, speed);
    }
  
    setTimeout(showNextCoin, 1500);
  }
  
  // On every page load, update coin display
  window.addEventListener("DOMContentLoaded", updateGlobalCoinDisplay);
  
  // Optionally export for ES Modules
  window.addCoins = addCoins;
  window.animateCoinCount = animateCoinCount;
  