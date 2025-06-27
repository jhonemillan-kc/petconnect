// Import the functions you need from the SDKs you need
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";

// Initialize Firebase
let app: FirebaseApp;
let db: Firestore;

if (getApps().length === 0) {
  try {
console.log('entra')
  } catch (error) {
    console.error("Firebase client initialization error:", error);

  }
} else {
  app = getApps()[0];
  console.log("Firebase client app already initialized.");
  db = getFirestore(app);
}


export { app as firebaseApp, db as firestoreClientDB };
