// content.js
const points = [];
let trackingMouse = true

// Initialize the heatmap instance
const heatmapInstance = h337.create({
    container: document.body,
    radius: 90,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
});
document.getElementsByClassName("heatmap-canvas")[0].style.display = 'none';

// Event listener for mouse movement
document.addEventListener('mousemove', function (event) {
    const mousePosition = {
        x: event.clientX,
        y: event.clientY,
        time: new Date().toISOString()
    };
    // Display the mouse position visually on the page
    displayMousePosition(mousePosition);

    // Add to heatmap
    //addMousePosition(mousePosition);
    if (trackingMouse) {
        points.push({
            x: event.clientX,
            y: event.clientY,
            value: 1
        })
    }

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

function fillHeatmap() {
    heatmapInstance.setData({
        max: 100,
        min: 0,
        data: points
    });
    trackingMouse = false;
    document.getElementsByClassName("heatmap-canvas")[0].style.display = 'block';
    //console.log(points);
}

function clearHeatmap() {
    heatmapInstance.setData({
        max: 100,
        min: 0,
        data: []
    });
    trackingMouse = true;
    document.getElementsByClassName("heatmap-canvas")[0].style.display = 'none';
}

// Event listener for heatmap toggle
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.name === "heatmap") {
            if (request.value === "show") {
                fillHeatmap();
            } else {
                clearHeatmap();
            }
        }
    }
);