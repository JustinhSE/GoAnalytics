import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: apikey,
    authDomain:authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId:appId,
    measurementId:measurementId
};


// firebase.initializeApp(firebaseConfig);
const firebase = require('./firebase')
export const db = firebase.firestore();