// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "estate-dealing.firebaseapp.com",
    projectId: "estate-dealing",
    storageBucket: "estate-dealing.appspot.com",
    messagingSenderId: "82577331747",
    appId: "1:82577331747:web:1cf5b52dcd2ee983f48396"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
