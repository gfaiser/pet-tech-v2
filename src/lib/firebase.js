// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEckBAuWX_vr03GHMc5jNEHv4i1l5KmWo",
    authDomain: "pet-tech-v2.firebaseapp.com",
    projectId: "pet-tech-v2",
    storageBucket: "pet-tech-v2.appspot.com",
    messagingSenderId: "283862356028",
    appId: "1:283862356028:web:ef5fb8941fe8ed80717339"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }