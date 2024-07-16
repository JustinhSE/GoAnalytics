// Import the necessary Firebase SDKs
import { doc, setDoc, arrayUnion } from "firebase/firestore";
import { db } from './firebase.js'; // Import db from firebase.js

// background.js
chrome.identity.getProfileUserInfo(function(userInfo) {
    const userId = userInfo.id;

    chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
        console.log('Mouse position received:', message);
        //from before db
            // Store the mouse position in the local storage
        chrome.storage.local.get(['mousePositions'], function(result) {
            const mousePositions = result.mousePositions || [];
            mousePositions.push(message);
            chrome.storage.local.set({ mousePositions: mousePositions });
        });
        // Get a reference to the Firestore document
        const docRef = doc(db, 'usersMouseTrace', userId);

        // Add the mouse position to the Firestore document
        setDoc(docRef, {
            x: arrayUnion(message.x),
            y: arrayUnion(message.y),
            website_url: sender.url // Fetch the URL
        }, { merge: true });
    });
});

/*

documentID = WvtGgRWObOHLiEA3jgY2 
.filter( documentID => doc.id )
doc.id.coordinates.x_coordinates: arrayUnion(message.x), 

*/ 