import { initializeApp } from "./firebase/app";
import { getAnalytics } from "./firebase/analytics";
import { getFirestore } from "./firebase/firestore"; // Import Firestore functions
require("dotenv").config();

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABoHieDK0eaaVrwAPpbpnIUw1fcrEQpPA",
    authDomain: "goanalytics-20-20-vision.firebaseapp.com",
    projectId: "goanalytics-20-20-vision",
    storageBucket: "goanalytics-20-20-vision.appspot.com",
    messagingSenderId: "308906954285",
    appId: "1:308906954285:web:1ca706a6fe2ee249de32a4",
    measurementId: "G-BTHCNN9D6V"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// background.js
chrome.identity.getProfileUserInfo(function (userInfo) {
    const userId = userInfo.id;

    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        console.log('Mouse position received:', message);
        //from before db
        // Store the mouse position in the local storage
        chrome.storage.local.get(['mousePositions'], function (result) {
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