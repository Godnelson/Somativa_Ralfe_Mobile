import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDaPCJcHHrXVAgUTuHLaYXkHg4gOGru-Ek",
  authDomain: "somativa-ralfe.firebaseapp.com",
  projectId: "somativa-ralfe",
  storageBucket: "somativa-ralfe.appspot.com",
  messagingSenderId: "503294239959",
  appId: "1:503294239959:web:a841c86b4c91ba6524fc92"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);