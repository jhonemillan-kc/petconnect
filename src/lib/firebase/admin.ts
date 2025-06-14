const admin = require('firebase-admin');
import type { Firestore } from 'firebase-admin/firestore';

let adminDB: Firestore | undefined;

if (!admin.apps.length) {
  try {
    // Debug: Check if environment variables are loaded
    console.log('Project ID:', process.env.FIREBASE_PROJECT_ID);
    console.log('Client Email:', process.env.FIREBASE_CLIENT_EMAIL);
    console.log('Private Key exists:', !!process.env.FIREBASE_PRIVATE_KEY);

    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n').replace(/"/g, ''),
      })
    });

    adminDB = admin.firestore();

  } catch (error: any) {
    console.error(error);
  }
} else {
  adminDB = admin.firestore();
}

export { adminDB };
