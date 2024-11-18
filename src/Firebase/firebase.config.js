// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCD6ipBApQUKPdNDw_l5THpSnke0zs6vvY",
    authDomain: "a09-eco-adventure-auth.firebaseapp.com",
    projectId: "a09-eco-adventure-auth",
    storageBucket: "a09-eco-adventure-auth.firebasestorage.app",
    messagingSenderId: "541698401377",
    appId: "1:541698401377:web:413d5d4bf10facaf3af620"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;