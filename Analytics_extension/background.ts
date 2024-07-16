chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === 'mousePosition') {
        console.log('Received position:', message.data);

        // Retrieve the current stored mouse positions
        chrome.storage.local.get(['mousePositions'], function(result) {
            const mousePositions = result.mousePositions || [];
            mousePositions.push(message.data);

            // Store the updated mouse positions
            chrome.storage.local.set({ mousePositions: mousePositions }, function() {
                console.log('Mouse positions updated:', mousePositions);
            });
        });
    }
});
