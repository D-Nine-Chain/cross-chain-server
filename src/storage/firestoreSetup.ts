// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { getSecret } from "../secrets";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

let db: Firestore | null = null;
export async function getDb() {
   if (db) {
      return db
   } else {
      return prepFirebaseConfig().then((firebaseConfig) => {
         const app = initializeApp(firebaseConfig);
         db = getFirestore(app);
         return db;
      })
   }
}

export async function setupDb() {
   console.log("prepping db")
   return prepFirebaseConfig().then((firebaseConfig) => {
      const app = initializeApp(firebaseConfig);
      db = getFirestore(app);
      console.log("db ready")
   })
}

async function prepFirebaseConfig() {
   try {
      const firebaseConfig = {
         apiKey: await getSecret('FIREBASE_API_KEY'),
         authDomain: await getSecret('FIREBASE_AUTH_DOMAIN'),
         projectId: await getSecret('FIREBASE_PROJECT_ID'),
         storageBucket: await getSecret('FIREBASE_STORAGE_BUCKET'),
         messagingSenderId: await getSecret('FIREBASE_MESSAGING_SENDER_ID'),
         appId: await getSecret('FIREBASE_APP_ID')
      }
      return firebaseConfig;
   }
   catch (e) {
      console.log("error getting firebase secrets", e)
      throw e;
   }

}