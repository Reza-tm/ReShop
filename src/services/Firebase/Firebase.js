import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { doc, getFirestore, getDoc, setDoc } from "firebase/firestore";

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
export const auth = getAuth(app);

export const db = getFirestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const user = doc(db, "users", userAuth.uid);
  const userDoc = await getDoc(user);
  if (!userDoc.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      setDoc(user, { displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.log(err);
    }
  }
  return user;
};
