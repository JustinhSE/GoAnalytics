// content.js

// Function to dynamically load the heatmap.js script if using CDN
// Uncomment if using the CDN approach
// function loadScript(src, callback) {
//   const script = document.createElement('script');
//   script.src = src;
//   script.onload = callback;
//   document.head.appendChild(script);
// }

// Initialize the heatmap instance after heatmap.js is loaded
// Uncomment the loadScript line if using the CDN approach
// loadScript('https://cdnjs.cloudflare.com/ajax/libs/heatmap.js/2.0.5/heatmap.min.js', () => {
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
    // });
    