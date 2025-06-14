// Import the functions you need from the SDKs you need
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// TODO: Replace with your actual Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZYduI9Do0rms-mnoCYaflHyb3hc193Ss",
  authDomain: "petconnect-a447d.firebaseapp.com",
  projectId: "petconnect-a447d",
  storageBucket: "petconnect-a447d.firebasestorage.app",
  messagingSenderId: "103322502321",
  appId: "1:103322502321:web:8ddbc0af2ccdb86a160e90",
  measurementId: "G-SJZ07KMLK3"
};

// Initialize Firebase
let app: FirebaseApp;
let db: Firestore;

if (getApps().length === 0) {
  try {
    app = initializeApp(firebaseConfig);
    console.log("Firebase client app initialized.");
    db = getFirestore(app);
  } catch (error) {
    console.error("Firebase client initialization error:", error);
    // Handle the error appropriately in a real app
    // For now, app and db might be undefined
  }
} else {
  app = getApps()[0];
  console.log("Firebase client app already initialized.");
  db = getFirestore(app);
}


export { app as firebaseApp, db as firestoreClientDB };
