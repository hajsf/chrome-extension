document.body.style.backgroundColor = 'orange';
console.log('Hello')

// 1. Send the background a message requesting the user's data
chrome.runtime.sendMessage('get-user-data', (response) => {
  // 3. Got an asynchronous response with the data from the background
  console.log('received user data', response);
 // initializeUI(response);
});

/*
chrome.runtime.sendMessage({
    type: 'notification',
    options: {
      title: 'Just wanted to notify you',
      message: 'How great it is!',
      iconUrl: '../m.png',
      type: 'basic'
    }
  });
  */