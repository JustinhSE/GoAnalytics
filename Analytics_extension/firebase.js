import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyABoHieDK0eaaVrwAPpbpnIUw1fcrEQpPA",
    authDomain: "goanalytics-20-20-vision.firebaseapp.com",
    projectId: "goanalytics-20-20-vision",
    storageBucket: "goanalytics-20-20-vision.appspot.com",
    messagingSenderId: "308906954285",
    appId: "1:308906954285:web:1ca706a6fe2ee249de32a4",
    measurementId: "G-BTHCNN9D6V"
};


firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();