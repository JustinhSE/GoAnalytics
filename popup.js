document.getElementById('showPositions').addEventListener('click', function() {
    chrome.storage.local.get(['mousePositions'], function(result) {
        const positionsDiv = document.getElementById('positions');
        positionsDiv.innerHTML = '';

        const mousePositions = result.mousePositions || [];
        mousePositions.forEach(position => {
            const p = document.createElement('p');
            p.textContent = `X: ${position.x}, Y: ${position.y}, Time: ${position.time}`;
            positionsDiv.appendChild(p);
        });
    });
});
