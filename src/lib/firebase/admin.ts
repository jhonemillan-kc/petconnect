const admin = require('firebase-admin');
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
  } catch (error: any) {
    console.error('Firebase Admin initialization error:', error);
  }
}

// Always get the firestore instance from the (possibly already initialized) app
adminDB = admin.firestore();

export { adminDB }; 