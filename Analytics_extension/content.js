import firebase from 'firebase/compat/app';
// Required for side-effects
import 'firebase/firestore';

const db = firebase.firestore();

document.addEventListener('mousemove', function (event) {
    const mousePosition = {
        x: event.clientX,
        y: event.clientY,
        url: window.location.href
        
    };
    // Display the mouse position visually on the page (you need to implement this function)
    displayMousePosition(mousePosition);

    // Log the position to verify
    console.log('Sending position:', mousePosition);

    // Send the mouse position data to the background script
    chrome.runtime.sendMessage({ type: 'mousePosition', data: mousePosition });

    db.collection('usersMouseTrace').add({
        ...mousePosition,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then((docRef) => {
        console.log('Document written with ID:', docRef.id);
    })
    .catch((error) => {
        console.error('Error adding document:', error);
    });
});
