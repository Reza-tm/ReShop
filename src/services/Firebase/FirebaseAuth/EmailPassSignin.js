import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

export const signinWithEmailPass = async (email, pass) => {
  try {
    await signInWithEmailAndPassword(auth, email, pass);
  } catch (error) {
    throw error.code == "auth/user-not-found" || "auth/wrong-password" ? "Your email or password isnt correct" : "";
  }
};
