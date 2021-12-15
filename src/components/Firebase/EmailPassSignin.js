import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

export const signinWithEmailPass = ({ email, pass }) => {
  signInWithEmailAndPassword(auth, email, pass).catch((err) => console.log(err.message));
};
