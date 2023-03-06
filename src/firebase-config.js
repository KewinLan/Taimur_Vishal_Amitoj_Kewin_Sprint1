import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBS3BkeG3U3IEQJMt-BLo-x7ztf4PqtKLU",
  authDomain: "o-slot---appointment-booker.firebaseapp.com",
  projectId: "o-slot---appointment-booker",
  storageBucket: "o-slot---appointment-booker.appspot.com",
  messagingSenderId: "690046588334",
  appId: "1:690046588334:web:41bee9584464fe5111e43f",
  measurementId: "G-Z73CPPJNKZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();