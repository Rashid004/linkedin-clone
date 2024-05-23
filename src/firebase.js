/** @format */

// import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/compat/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAmYi7rnMBoDopILDUJNamMAAmWpctnl6g",
  authDomain: "linkedin-clone-3465b.firebaseapp.com",
  projectId: "linkedin-clone-3465b",
  storageBucket: "linkedin-clone-3465b.appspot.com",
  messagingSenderId: "652480532061",
  appId: "1:652480532061:web:0b0315581a8b8768adc7b4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const authLogin = firebaseApp.auth();
const storage = firebaseApp.storage();

const provider = new GoogleAuthProvider();

export { authLogin, provider, storage };

export default db;
