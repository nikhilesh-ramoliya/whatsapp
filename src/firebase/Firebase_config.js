// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf-CFPoQ4Uvcm8PpT31x4RP7dZ9MDPVHk",
  authDomain: "whatsapp-clone-7db65.firebaseapp.com",
  projectId: "whatsapp-clone-7db65",
  storageBucket: "whatsapp-clone-7db65.appspot.com",
  messagingSenderId: "999081204245",
  appId: "1:999081204245:web:d2a0fa962716fe4b378c1c",
  measurementId: "G-CY69LCMJ0F"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);