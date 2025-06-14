import {
    addCoins,
    getStoredCoins,
    updateGlobalCoinDisplay,
    animateCoinIcon,
    animateCoinCount
  } from './coin.js';
  
  let age = 4;
  
  // ------------------ User Setup ------------------
  
  function changeAge(delta) {
    age = Math.max(0, Math.min(120, age + delta));
    document.getElementById("ageDisplay").innerText = age;
  }
  
  function finishSetup() {
    localStorage.setItem("childAge", age);
    document.getElementById("setupModal").classList.add("hidden");
  }
  
  // ------------------ Controls Popup ------------------
  
  function openControls() {
    document.getElementById("progressPopup").classList.remove("hidden");
  }
  
  function closePopup() {
    document.getElementById("progressPopup").classList.add("hidden");
  }
  
  // ------------------ Game Start ------------------
  
  function showLoadingAndRedirect(button, url, emoji = "⏳ Loading...") {
    if (button.disabled) return;
    button.disabled = true;
    button.innerText = emoji;
  
    const currentCoins = parseInt(localStorage.getItem("totalCoins") || "0");
    localStorage.setItem("coinsBeforeGame", currentCoins);
  
    setTimeout(() => {
      window.location.href = url;
    }, 50);
  }
  
  function startGame(event, url, emoji) {
    const btn = event.target;
    showLoadingAndRedirect(btn, url, emoji);
  }
  
  // ------------------ Page Load ------------------
  
  document.addEventListener("DOMContentLoaded", () => {
    const ageSet = localStorage.getItem("childAge");
    if (ageSet !== null) {
      document.getElementById("setupModal").classList.add("hidden");
    }
  
    // Attach event listeners
  
    const ageDownBtn = document.querySelector("button.btn[onclick*='changeAge(-1)']");
    const ageUpBtn = document.querySelector("button.btn[onclick*='changeAge(1)']");
    const startBtn = document.querySelector("button.btn[onclick*='finishSetup()']");
    const controlsBtn = document.querySelector("button.btn[onclick*='openControls()']");
    const popupCloseBtn = document.querySelector("button.btn[onclick*='closePopup()']");
  
    const mathBtn = document.querySelector("button.btn[onclick*='startArithmeticGame()']");
    const spellBtn = document.querySelector("button.btn[onclick*='startSpellingGame()']");
    const arabicBtn = document.querySelector("button.btn[onclick*='startArabicSpellingGame()']");
  
    if (ageDownBtn) ageDownBtn.addEventListener("click", () => changeAge(-1));
    if (ageUpBtn) ageUpBtn.addEventListener("click", () => changeAge(1));
    if (startBtn) startBtn.addEventListener("click", finishSetup);
    if (controlsBtn) controlsBtn.addEventListener("click", openControls);
    if (popupCloseBtn) popupCloseBtn.addEventListener("click", closePopup);
  
    if (mathBtn) mathBtn.addEventListener("click", e => startGame(e, "Math Game GPT/math-game.html", "🔢 Loading..."));
    if (spellBtn) spellBtn.addEventListener("click", e => startGame(e, "Spelling Bee/spelling-bee-game.html", "🐝 Loading..."));
    if (arabicBtn) arabicBtn.addEventListener("click", e => startGame(e, "Spelling Bee/spelling-bee-arabic.html", "🕌 Loading..."));
  
    // Arithmetic Scores
    const bestMath = JSON.parse(localStorage.getItem("mathTowerScores") || '{}');
    if (Object.keys(bestMath).length > 0) {
      const entries = Object.entries(bestMath);
      const parts = entries.map(([difficulty, data]) =>
        `${difficulty[0].toUpperCase() + difficulty.slice(1)}: ${data.blocks}`
      );
      document.getElementById("bestArithmetic").innerHTML = `⭐Your Best:<br> ${parts.join('<br>')}`;
    }
  
    // Spelling Scores
    const bestSpelling = localStorage.getItem("bestSpelling");
    if (bestSpelling) {
      document.getElementById("bestSpelling").innerText = `⭐Your Best: ${bestSpelling}`;
    }
  
    const bestSpellingArabic = localStorage.getItem("bestSpellingArabic");
    if (bestSpellingArabic) {
      document.getElementById("bestSpellingArabic").innerText = `⭐Your Best: ${bestSpellingArabic}`;
    }
  
    // Coin Animation
    const before = getStoredCoins();
    const after = parseInt(localStorage.getItem("totalCoins") || "0");
  
    if (after > before) {
      setTimeout(() => {
        animateCoinIcon();
        // animateCoinCount(after - before);
      }, 800);
    }
  
    localStorage.removeItem("coinsBeforeGame");
  });
  