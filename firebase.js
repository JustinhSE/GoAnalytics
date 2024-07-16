// Import the necessary Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, setDoc, arrayUnion } from "firebase/firestore"; // Import Firestore functions

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

// Get the currently signed-in user (you'll need to implement this part)

// get USERID  note:transfer from 'background.js' 

// Define a function to add mouse trace data to the Firestore document
async function addMouseTraceData(xCoordinates, yCoordinates) {
  try {
    // Reference to the "usersMouseTrace" collection
    const usersMouseTraceRef = doc(db, "usersMouseTrace", userId);

    // Update the document with the x and y coordinates
    await setDoc(usersMouseTraceRef, {
      x_coordinates: arrayUnion(...xCoordinates),
      y_coordinates: arrayUnion(...yCoordinates)
    }, { merge: true }); // Merge the data if the document already exists

    console.log(`Mouse trace data for user ${userId} added to Firestore.`);
  } catch (error) {
    console.error("Error adding mouse trace data:", error);
  }
}

// Example usage
const xCoords = [10, 20, 30]; // Example x coordinates
const yCoords = [5, 15, 25]; // Example y coordinates

addMouseTraceData(xCoords, yCoords);
