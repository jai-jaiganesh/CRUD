
import firebase from "firebase/compat/app"
// require('dotenv').config()
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// const firebaseConfig={
//     apiKey: process.env.REACT_APIKEY,
//   authDomain: process.env.REACT_AUTHDOMAIN,
//   projectId: process.env.REACT_PROJECTID,
//   storageBucket: process.env.REACT_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_MESSAGINGSENDERID,
//   appId: process.env.REACT_APPID
// };
const firebaseConfig = {
  apiKey: "AIzaSyBrXze6kOOn7oA_jOjm3cHPyBpFhndwRvE",
  authDomain: "redux-crud-6d7a4.firebaseapp.com",
  projectId: "redux-crud-6d7a4",
  storageBucket: "redux-crud-6d7a4.appspot.com",
  messagingSenderId: "113750455493",
  appId: "1:113750455493:web:107a060048426d1b5b6cac"
};
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
// connectAuthEmulator(auth,"http://localhost:9099");
// export default app

// const loginEmailPassword=async()=>{
//   const loginEmail=txtEmail.value;
//   const loginPassword=txtPassword.value;

//   const userCredential=await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
//  console.log(userCredential.user);
// }
// btnLogin.addEventListener("click",loginEmailPassword);
