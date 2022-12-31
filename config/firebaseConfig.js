// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATITJQalBjeje3tVizXofWurxZ4ala3lY",
  authDomain: "social-959c8.firebaseapp.com",
  projectId: "social-959c8",
  storageBucket: "social-959c8.appspot.com",
  messagingSenderId: "516501417250",
  appId: "1:516501417250:web:72cee882f9ad1a13a7497b",
  measurementId: "G-VZ1R2H3WC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;