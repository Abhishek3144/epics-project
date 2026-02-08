import { initializeApp } from "firebase/app";
// CHANGE 1: Import getFirestore for the database
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3pst5aDK8gbbXQxH0N8Z87MHd9DI8do0",
  authDomain: "farmers-knowledge-hub.firebaseapp.com",
  projectId: "farmers-knowledge-hub",
  storageBucket: "farmers-knowledge-hub.appspot.com",
  messagingSenderId: "281428608626",
  appId: "1:281428608626:web:ac5d221a3062448b45a4eb",
  measurementId: "G-Z0FSY0BVXM"
};


const app = initializeApp(firebaseConfig);

// CHANGE 2: Export the Firestore database instance
export const db = getFirestore(app);
console.log("Firestore DB: ", db);