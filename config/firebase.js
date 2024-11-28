// Navigation/firebase.js
// Import Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCSJa7NvtYCXwIRv-tbD8fIFVTunZbiirQ",
    authDomain: "gawein-8e616.firebaseapp.com",
    projectId: "gawein-8e616",
    storageBucket: "gawein-8e616.firebasestorage.app",
    messagingSenderId: "872805407387",
    appId: "1:872805407387:web:dcf8776885a591011dc43e",
    measurementId: "G-4FNKM0R4GM"
  };

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };