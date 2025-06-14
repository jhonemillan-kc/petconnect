const admin = require('firebase-admin');
import type { Firestore } from 'firebase-admin/firestore';
import * as fs from 'fs';
const serviceAccount = JSON.parse(fs.readFileSync('./firebase-keys.json', 'utf8'));

let adminDB: Firestore | undefined;

if (!admin.apps.length) {
  try {

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });

    adminDB = admin.firestore();

  } catch (error: any) {
    console.error(error);
  }
} else {
  adminDB = admin.firestore();
}

export { adminDB };
