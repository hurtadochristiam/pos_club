// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:  "AIzaSyDm5EFDXNKB7NhLci9lMvg7t1T6Y9mwidI",
  authDomain: "sistemaposclub.firebaseapp.com",
  projectId: "sistemaposclub",
  storageBucket: "sistemaposclub.appspot.com",
  messagingSenderId: "446405160419",
  appId: "1:446405160419:web:0b6185f0bfc13d96d144d6",
  measurementId: "G-2740B1V39W"
};

console.log(firebaseConfig)

// Initialize Firebase
export const appFire = initializeApp(firebaseConfig)
export const auth = getAuth(appFire)
export const storage = getStorage(appFire)
export const db = getFirestore(appFire)

// const analytics = getAnalytics(appFire);