chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["modal.js"]
  });
  chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    files: ['enhance.css']
  });
});
