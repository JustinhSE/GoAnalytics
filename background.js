// background.js
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log('Mouse position received:', message);

    // Store the mouse position in the local storage
    chrome.storage.local.get(['mousePositions'], function(result) {
        const mousePositions = result.mousePositions || [];
        mousePositions.push(message);
        chrome.storage.local.set({ mousePositions: mousePositions });
    });
});
