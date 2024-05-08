/** @format */

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAmYi7rnMBoDopILDUJNamMAAmWpctnl6g",
  authDomain: "linkedin-clone-3465b.firebaseapp.com",
  projectId: "linkedin-clone-3465b",
  storageBucket: "linkedin-clone-3465b.appspot.com",
  messagingSenderId: "652480532061",
  appId: "1:652480532061:web:0b0315581a8b8768adc7b4",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();

const storage = getStorage(firebaseApp);

export { auth, provider, storage };

export default db;
