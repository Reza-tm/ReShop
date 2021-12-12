import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoJkKpyoGisGFLovz6nDPcYjb9bKQC56w",
  authDomain: "re-shop-83d42.firebaseapp.com",
  projectId: "re-shop-83d42",
  storageBucket: "re-shop-83d42.appspot.com",
  messagingSenderId: "957667179352",
  appId: "1:957667179352:web:b672311fa21caaced9c32d",
  measurementId: "G-9B3NHHCS4G",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};
