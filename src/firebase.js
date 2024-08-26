


// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAFqV5-K0CPgbA7YKjLCvX1XXAvquhfuPM",
//   authDomain: "regfrom-e7f3b.firebaseapp.com",
//   projectId: "regfrom-e7f3b",
//   storageBucket: "regfrom-e7f3b.appspot.com",
//   messagingSenderId: "386129769212",
//   appId: "1:386129769212:web:07a2bcac62f09978689d79",
//   databaseURL: "https://regfrom-e7f3b-default-rtdb.firebaseio.com/"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { app, auth, createUserWithEmailAndPassword };



// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAFqV5-K0CPgbA7YKjLCvX1XXAvquhfuPM",
//   authDomain: "regfrom-e7f3b.firebaseapp.com",
//   databaseURL: "https://regfrom-e7f3b-default-rtdb.firebaseio.com",
//   projectId: "regfrom-e7f3b",
//   storageBucket: "regfrom-e7f3b.appspot.com",
//   messagingSenderId: "386129769212",
//   appId: "1:386129769212:web:07a2bcac62f09978689d79"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfjMH0uZt7tES4G2K4YZ29ML-0sPbJAPs",
  authDomain: "loginform-65462.firebaseapp.com",
  projectId: "loginform-65462",
  storageBucket: "loginform-65462.appspot.com",
  messagingSenderId: "959725891816",
  appId: "1:959725891816:web:4a0deff915eba8bf6e195d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;