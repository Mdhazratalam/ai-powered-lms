

 import {getAuth, GoogleAuthProvider} from "firebase/auth"

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "lmslogin-e4f53.firebaseapp.com",
  projectId: "lmslogin-e4f53",
  storageBucket: "lmslogin-e4f53.firebasestorage.app",
  messagingSenderId: "400090029502",
  appId: "1:400090029502:web:262d5b0d029d76bc1f2def"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}