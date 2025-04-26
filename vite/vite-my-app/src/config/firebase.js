import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBkU6ByZgaQOf6ZI6SdiKIaBEaQxxJpeS0",
    authDomain: "smtp-batch8.firebaseapp.com",
    projectId: "smtp-batch8",
    storageBucket: "smtp-batch8.firebasestorage.app",
    messagingSenderId: "716276499213",
    appId: "1:716276499213:web:fec10841e1ddf25f452644"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);