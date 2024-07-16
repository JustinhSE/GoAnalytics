var _a;
(_a = document.getElementById('showPositions')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    chrome.storage.local.get(['mousePositions'], function (result) {
        const positionsDiv = document.getElementById('positions');
        positionsDiv.innerHTML = '';
        const mousePositions = result.mousePositions || [];
        mousePositions.forEach(position => {
            const p = document.createElement('p');
            p.textContent = `X: ${position.x}, Y: ${position.y}, Time: ${position.time}`;
            positionsDiv === null || positionsDiv === void 0 ? void 0 : positionsDiv.appendChild(p);
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
