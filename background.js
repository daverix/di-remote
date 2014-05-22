chrome.runtime.onMessage.addListener(function(message) {
  console.log('change icon', message);
  
  if(message === "play") {
    chrome.browserAction.setIcon({path: "play19.png"});
  } else if(message === "stop") {
    chrome.browserAction.setIcon({path: "stop19.png"});
  }
});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({url: 'http://www.di.fm/*'}, function(tabs) {
      if(tabs.length > 0) {
          console.log('Toggle play in ' + tab.url);
          chrome.tabs.executeScript(tabs[0].id, {
            code: 'document.getElementById("ctl-play").click()'
          });
      }
  });
});

