// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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