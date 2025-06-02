// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp38TCkT98ZO3nESFLiNAyuSrAhp6LLXc",
  authDomain: "crud-ee24c.firebaseapp.com",
  projectId: "crud-ee24c",
  storageBucket: "crud-ee24c.firebasestorage.app",
  messagingSenderId: "892352719919",
  appId: "1:892352719919:web:e7c15cd8a07ce64381eada",
  measurementId: "G-W09B6V81T8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const fireDb = getFirestore(app)