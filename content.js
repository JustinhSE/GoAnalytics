// content.js

// Initialize the heatmap instance
const heatmapContainer = document.createElement('div');
heatmapContainer.id = 'heatmapContainer';
heatmapContainer.setAttribute('style', `
    position: absolute;
    top: 0;
    left; 0;
    width: 100%;
    height: 100%;
    background-color: lightblue;
    `);
document.body.appendChild(heatmapContainer);
/*const data = {
    "container" : heatmapContainer
}
chrome.storage.local.set(data, function() {
    console.log("data saved!!!")
})*/

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
    var x = document.getElementById("test");
});
