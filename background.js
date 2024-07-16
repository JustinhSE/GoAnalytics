// background.js
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log('Mouse position received:', message);

    // Store the mouse position in the local storage
    chrome.storage.local.get(['mousePositions'], function(result) {
        const mousePositions = result.mousePositions || [];
        mousePositions.push(message);
        chrome.storage.local.set({ mousePositions: mousePositions });
    });
});

let userId = '';

// background.js (get login info)
chrome.identity.getProfileUserInfo(function(userInfo) {
    userId = userInfo.id;
    console.log(JSON.stringify(userInfo));
  });
  

// Get the user ID (already authenticated) and the stored mouse positions
chrome.storage.local.get(['mousePositions'], function(result) {
    const xCoordinates = result.mousePositions.map(pos => pos.x);
    const yCoordinates = result.mousePositions.map(pos => pos.y);

    // Reference to the "usersMouseTrace" collection
    const usersMouseTraceRef = doc(db, 'usersMouseTrace', userId);

    // Update the document with the x and y coordinates
    setDoc(usersMouseTraceRef, {
        x_coordinates: arrayUnion(...xCoordinates),
        y_coordinates: arrayUnion(...yCoordinates)
    }, { merge: true })
        .then(() => {
            console.log(`Mouse trace data for user ${userId} added to Firestore.`);
        })
        .catch(error => {
            console.error('Error adding mouse trace data:', error);
        });
});

// Remember to replace placeholders (e.g., 'your_user_id') with actual values.
// Adapt the code according to your specific requirements and integrate it with your existing authentication flow.

