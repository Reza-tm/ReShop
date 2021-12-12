import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

export const signinWithEmailPass = (emailPass) => {
  const { email, pass } = emailPass;
  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      console.log("ok", userCredential);
    })
    .catch((error) => {
      console.log("no", error);
    });
};
