// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getStorage } from "firebase/storage"; // Import Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4hT5ySHTj6ewim5fSrB5E6sgF-8tAJWg",
  authDomain: "my-personal-website-17644.firebaseapp.com",
  projectId: "my-personal-website-17644",
  storageBucket: "my-personal-website-17644.appspot.com",
  messagingSenderId: "394042152294",
  appId: "1:394042152294:web:939861d3c815d407cd24a7",
  measurementId: "G-QB8W1WV5Q8",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app); // Initialize Storage
const db = getFirestore(app); // Initialize Firestore

export { analytics, storage, db };
