chrome.runtime.onInstalled.addListener((details) => {
  chrome.storage.local.set({
    shows: [],
  });
  chrome.contextMenus.create({
    title: "Test Context Menu",
    id: "contextMenu1",
    contexts: ["page", "selection"],
  });
  chrome.contextMenus.onClicked.addListener((event) => {
    fetch("http://api.tvmaze.com/search/shows?q=marvel")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        chrome.storage.local.set({
          shows: data,
        });
      });
  });
});

console.log("background script running");

chrome.runtime.onMessageExternal.addListener(
  (request, sender, sendResponse) => {
    console.log("onMessageExternal");
    console.log(request);
  }
);
