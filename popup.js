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

document.getElementById('toggle').addEventListener('change', function() {
    if (document.getElementById('toggle').checked) {
        console.log("CHECKED");
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {"name": "heatmap", "value": "show"});
        });
    } else {
        console.log("UNCHECKED");
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {"name": "heatmap", "value": "hide"});
        });
    }
});
