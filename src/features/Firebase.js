/** @format */

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvZrvpvAMWSsoMxcLgWq45DbzCF4bze5w",
  authDomain: "linkedin-clone-3b49d.firebaseapp.com",
  projectId: "linkedin-clone-3b49d",
  storageBucket: "linkedin-clone-3b49d.appspot.com",
  messagingSenderId: "715314927796",
  appId: "1:715314927796:web:b964d92321ddea1c6ddfe1",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
