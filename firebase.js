
// Initialize Firestore

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