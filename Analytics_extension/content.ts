document.addEventListener('mousemove', function(event) {
    const mousePosition = {
        x: event.clientX,
        y: event.clientY,
        time: new Date().toISOString()
    };

    // Log the position to verify
    console.log('Sending position:', mousePosition);

    // Send the mouse position data to the background script
    chrome.runtime.sendMessage({ type: 'mousePosition', data: mousePosition });
});
