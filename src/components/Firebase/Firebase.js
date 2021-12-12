import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoJkKpyoGisGFLovz6nDPcYjb9bKQC56w",
  authDomain: "re-shop-83d42.firebaseapp.com",
  projectId: "re-shop-83d42",
  storageBucket: "re-shop-83d42.appspot.com",
  messagingSenderId: "957667179352",
  appId: "1:957667179352:web:b672311fa21caaced9c32d",
  measurementId: "G-9B3NHHCS4G",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
