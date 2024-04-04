// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {collection, getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq_9kYTgGJ5lOOpS2p1sRwpE_YLdUxE9w",
  authDomain: "vidora-eb85d.firebaseapp.com",
  projectId: "vidora-eb85d",
  storageBucket: "vidora-eb85d.appspot.com",
  messagingSenderId: "1052013291368",
  appId: "1:1052013291368:web:11c8c6e9273e3a783098dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider();