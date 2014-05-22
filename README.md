di-remote
=========

A chrome extension for start and stop music playing in a http://di.fm tab.

There are two scripts, a background script that updates the browser action icon with different icons and also initiates click in the tab. The other script runs inside the page itself and listens on changes to the html element that represents the play button and sends the changes back to the background script.
