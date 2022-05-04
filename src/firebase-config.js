import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfZBFI01-3ejYk7T4UKxR8NG0UUxg7_0Q",
    authDomain: "healthbridge-2f146.firebaseapp.com",
    projectId: "healthbridge-2f146",
    storageBucket: "healthbridge-2f146.appspot.com",
    messagingSenderId: "833535046017",
    appId: "1:833535046017:web:8084972ebc6d4a32ab7880",
    measurementId: "G-QBD4XSMJS6"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();