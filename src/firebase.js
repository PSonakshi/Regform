
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfjMH0uZt7tES4G2K4YZ29ML-0sPbJAPs",
  authDomain: "loginform-65462.firebaseapp.com",
  projectId: "loginform-65462",
  storageBucket: "loginform-65462.appspot.com",
  messagingSenderId: "959725891816",
  appId: "1:959725891816:web:4a0deff915eba8bf6e195d"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;