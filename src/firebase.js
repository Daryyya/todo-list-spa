// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// import { getStorage } from 'firebase/storage' file
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwYJHX6kgemx7CtoHconrXJ4NN5ndunEs",
  authDomain: "todo-list-spa-7cace.firebaseapp.com",
  projectId: "todo-list-spa-7cace",
  storageBucket: "todo-list-spa-7cace.appspot.com",
  messagingSenderId: "152866258373",
  appId: "1:152866258373:web:77ab30d1a3728e93089fac"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(firebase);
// export const firestorage = getStorage(firebase); file