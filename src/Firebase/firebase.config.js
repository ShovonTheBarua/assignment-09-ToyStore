// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFy4AJEf6PyvYhj1eqZl5WzyYUjeXB7jk",
  authDomain: "toy-store-8c05c.firebaseapp.com",
  projectId: "toy-store-8c05c",
  storageBucket: "toy-store-8c05c.firebasestorage.app",
  messagingSenderId: "474158864050",
  appId: "1:474158864050:web:ffc7f23e1be42a9351dbab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);