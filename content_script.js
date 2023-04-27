function applyDarkMode() {
  document.body.style.backgroundColor = "#121212";
  document.body.style.color = "#ffffff";
}

function applyLightMode() {
  document.body.style.backgroundColor = "";
  document.body.style.color = "";
}

let isDarkMode = false;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggleDarkMode") {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
      applyDarkMode();
    } else {
      applyLightMode();
    }
  }
});
