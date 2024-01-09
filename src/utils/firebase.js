// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blog-a612c.firebaseapp.com",
  projectId: "blog-a612c",
  storageBucket: "blog-a612c.appspot.com",
  messagingSenderId: "943795720439",
  appId: "1:943795720439:web:0d58bc1013f2b186a783f2",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
