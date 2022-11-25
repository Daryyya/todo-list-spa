import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAggd7PyFE6lZj4EFuG8XeXYzWUG0bebE0",
    authDomain: "todo-list-spa.firebaseapp.com",
    projectId: "todo-list-spa",
    storageBucket: "todo-list-spa.appspot.com",
    messagingSenderId: "949230957038",
    appId: "1:949230957038:web:c022fd3f3a203a69fd1eff",
    measurementId: "G-BK01D6EZQK"
  };

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(firebase);
export const firestorage = getStorage(firebase);