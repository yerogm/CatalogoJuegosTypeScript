// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1zQls4OtQuoPlpa8Z0Vh8QMINUA3x5aA",
  authDomain: "catalogojuegos-firebase.firebaseapp.com",
  projectId: "catalogojuegos-firebase",
  storageBucket: "catalogojuegos-firebase.appspot.com",
  messagingSenderId: "247468931442",
  appId: "1:247468931442:web:08928de5f9b9adb01ec5eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)