document.getElementById("zoomIn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.getZoom(tabs[0].id, (zoomFactor) => {
      chrome.tabs.setZoom(tabs[0].id, zoomFactor + 0.1);
    });
  });
});

document.getElementById("zoomOut").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.getZoom(tabs[0].id, (zoomFactor) => {
      chrome.tabs.setZoom(tabs[0].id, zoomFactor - 0.1);
    });
  });
});

document.getElementById("resetZoom").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.setZoom(tabs[0].id, 1);
  });
});

// Other event listeners
// Toggle dark mode listener
document.getElementById("toggleDarkMode").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: toggleDarkModeInContentScript,
    });
  });
});

function toggleDarkModeInContentScript() {
  const textElementsSelector =
    "p, h1, h2, h3, h4, h5, h6, a, li, span, strong, em, label, pre, code, blockquote";

  const applyDarkMode = () => {
    document.body.style.backgroundColor = "#121212";
    Array.from(document.querySelectorAll(textElementsSelector)).forEach(
      (el) => {
        el.style.color = "#ffffff";
      }
    );
  };

  const applyLightMode = () => {
    document.body.style.backgroundColor = "";
    Array.from(document.querySelectorAll(textElementsSelector)).forEach(
      (el) => {
        el.style.color = "";
      }
    );
  };

  const isDarkMode = document.body.classList.toggle("dark-mode");
  if (isDarkMode) {
    applyDarkMode();
  } else {
    applyLightMode();
  }
}

// {
//   "manifest_version": 3,
//   "name": "Tab and Window Manager",
//   "version": "1.0.0",
//   "description": "A user-friendly tab and window manager for Chrome",
//   "permissions": ["tabs", "storage"],
//   "action": {
//     "default_popup": "popup.html",
//     "default_icon": {
//       "16": "icons/icon16.png",
//       "48": "icons/icon48.png",
//       "128": "icons/icon128.png"
//     }
//   },
//   "icons": {
//     "16": "icons/icon16.png",
//     "48": "icons/icon48.png",
//     "128": "icons/icon128.png"
//   }
// }
