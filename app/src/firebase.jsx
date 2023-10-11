// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkOvhPdHJTxQ27VlDFUDYfmfiiCttl1bw",
  authDomain: "chickenchat-f3af3.firebaseapp.com",
  projectId: "chickenchat-f3af3",
  storageBucket: "chickenchat-f3af3.appspot.com",
  messagingSenderId: "771560030810",
  appId: "1:771560030810:web:b7c3343a16cf4b566d8e63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)