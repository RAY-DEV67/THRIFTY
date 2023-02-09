// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import {getFirestore} from "firebase/firestore"

// NEW CONFIG ////////////////////////////

import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/storage"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp = firebase.initializeApp( {
  apiKey: "AIzaSyBNKp2xR9r2ZXh7lN0OlH9BPotEGjt9-UY",
  authDomain: "thrifty2.firebaseapp.com",
  projectId: "thrifty2",
  storageBucket: "thrifty2.appspot.com",
  messagingSenderId: "800082572468",
  appId: "1:800082572468:web:50ca6f711bf433c56b53e1",
  measurementId: "G-XRKZ1N72RB",
});

// Initialize Firebase
const app = firebaseApp;

const db = firebaseApp.firestore()

// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// export const db = getFirestore(app)
export const storage = firebase.storage()
export default db
