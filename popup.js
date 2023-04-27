// Other event listeners

document.getElementById("toggleDarkMode").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.executeScript(tabs[0].id, { file: "toggle_dark_mode.js" });
  });
});

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
