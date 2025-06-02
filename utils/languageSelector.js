export function initLanguageSelector(selectId) {
    console.log("✅ languageSelector.js loaded");
  
    const select = document.getElementById(selectId);
    if (!select) return;
  
    select.addEventListener("change", () => {
      const langCode = select.value;
      if (!langCode) return;
  
      // Set the cookie for Google Translate
      setCookie('googtrans', `/auto/${langCode}`, 1);
  
      // Reload the page to apply translation
      location.reload();
    });
  
    // Helper to set cookie properly
    function setCookie(name, value, days) {
      const d = new Date();
      d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + d.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }
  }
  