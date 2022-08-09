let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
  });

  chrome.contextMenus.create({
    "id": "sampleContextMenu",
    "title": "Sample Context Menu",
    "contexts": ["selection"],
  });
  
// Example of a simple user data object
const user = {
  username: 'demo-user'
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // 2. A page requested user data, respond with a copy of `user`
  if (message === 'get-user-data') {
    showStayHydratedNotification()
    sendResponse(user);
  }
});
  

  function showStayHydratedNotification() {
    chrome.notifications.create('NOTFICATION_ID', {
      type: 'basic',
      iconUrl: '../m.png',
      title: 'notification title',
      message: 'notification message',
      priority: 2,
      buttons: [
        {
            title: 'Yes'
        },
        {
            title: 'No'
        }
    ]
  })
}

// or
/*
function injectedFunction() {
  document.body.style.backgroundColor = 'orange';
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: injectedFunction
  });
});
*/