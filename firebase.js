import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore functions
require("dotenv").config();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app); // Initialize Firestore

// Get the currently signed-in user (you'll need to implement this part)

// // get USERID  note:transfer from 'background.js' 

// // Define a function to add mouse trace data to the Firestore document
// async function addMouseTraceData(xCoordinates, yCoordinates) {
//   try {
//     // Reference to the "usersMouseTrace" collection
//     const usersMouseTraceRef = doc(db, "usersMouseTrace", userId);

//     // Update the document with the x and y coordinates
//     await setDoc(usersMouseTraceRef, {
//       x_coordinates: arrayUnion(...xCoordinates),
//       y_coordinates: arrayUnion(...yCoordinates),
//       website_url: window.location.href
//     }, { merge: true }); // Merge the data if the document already exists

//     console.log(`Mouse trace data for user ${userId} added to Firestore.`);
//   } catch (error) {
//     console.error("Error adding mouse trace data:", error);
//   }
// }