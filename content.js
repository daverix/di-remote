MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var playElement = document.getElementById("ctl-play");
var observer = new MutationObserver(function(mutations, observer) {
    var stopElementsFound = playElement.getElementsByClassName('icon-stop').length;
    if(stopElementsFound == 1) {
        chrome.runtime.sendMessage("stop");
    }
    else {
        chrome.runtime.sendMessage("play");
    }
});
observer.observe(playElement, { subtree: true, attributes: true });

