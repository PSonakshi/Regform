// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

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

// export { app, auth }; 
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFqV5-K0CPgbA7YKjLCvX1XXAvquhfuPM",
  authDomain: "regfrom-e7f3b.firebaseapp.com",
  projectId: "regfrom-e7f3b",
  storageBucket: "regfrom-e7f3b.appspot.com",
  messagingSenderId: "386129769212",
  appId: "1:386129769212:web:07a2bcac62f09978689d79",
  databaseURL: "https://regfrom-e7f3b-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth, createUserWithEmailAndPassword };