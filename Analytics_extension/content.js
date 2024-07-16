document.addEventListener('mousemove', function (event) {
    const mousePosition = {
        x: event.clientX,
        y: event.clientY,
        time: new Date().toISOString()
    };
    // Display the mouse position visually on the page
    displayMousePosition(mousePosition);

    // Log the position to verify
    console.log('Sending position:', mousePosition);
    // Send the mouse position data to the background script
    chrome.runtime.sendMessage({ type: 'mousePosition', data: mousePosition });
});

function displayMousePosition(position) {
    // Create a small dot element
    const dot = document.createElement('div');
    dot.className = 'mouse-dot'; // Apply the CSS class
    dot.style.top = `${position.y - 5}px`; // Center the dot
    dot.style.left = `${position.x - 5}px`; // Center the dot

    // Append the dot to the body
    document.body.appendChild(dot);

    // Remove the dot after a short delay
    setTimeout(() => {
        dot.remove();
    }, 1000); // Adjust the duration as needed
}