// content.js

// Initialize the heatmap instance
const heatmapInstance = h337.create({
    container: document.body,
    maxOpacity: .6,
    radius: 50,
    blur: .90,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
});

// Function to track mouse movements and add data to the heatmap
document.addEventListener('mousemove', function(event) {
    const mousePosition = {
        x: event.clientX,
        y: event.clientY,
        value: 1 // Each movement adds a value of 1
    };

    // Add data to the heatmap
    heatmapInstance.addData(mousePosition);
});
