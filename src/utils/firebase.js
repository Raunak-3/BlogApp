// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-5ce39.firebaseapp.com",
  projectId: "blog-5ce39",
  storageBucket: "blog-5ce39.appspot.com",
  messagingSenderId: "791506540333",
  appId: "1:791506540333:web:6c372f43e78a300443e5a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);