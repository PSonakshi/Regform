// import { useState } from 'react'
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
// import {app} from "./firebase"
// import './App.css'
// import Registration from './components/registration'
// import Success from './components/Success'
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Registration/>,
//   },
//   {
//     path: "success",
//     element: <Success/>,
//   },
// ]);

// function App() {
//   const signupUser=()=>{
//   createUserWithEmailAndPassword(
//   auth,
//   "sonakshi@gmail.com",
//   "Sona@22"
// ).then((value)=>console.Console.log(value));
//   };

//   // const putData=() => {
//   //   set(ref(db,"user/sonakshi"))
//   // }
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   )
// }
 
// export default App

import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from "./firebase"
import './App.css'
import Registration from './components/registration'
import Success from './components/Success'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const auth = getAuth(app); 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration />,
  },
  {
    path: "success",
    element: <Success />,
  },
]);

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signupUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;