import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import type { Firestore } from 'firebase-admin/firestore';

let adminDB: Firestore | undefined;

// Check if any Firebase Admin app is already initialized
if (admin.apps.length === 0) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n').replace(/"/g, ''),
      })
    });
    console.log('Firebase Admin initialized successfully');
  } catch (error: any) {
    console.error('Firebase Admin initialization error:', error);
  }
}

// Get the firestore instance with the 'contacts' database
try {
  adminDB = getFirestore(admin.app(), 'contacts');
  console.log('Connected to Firestore database: contacts');
} catch (error) {
  console.error('Error connecting to Firestore database contacts:', error);
  // Fallback to default database
  adminDB = getFirestore(admin.app());
  console.log('Connected to default Firestore database');
}

export { adminDB }; 