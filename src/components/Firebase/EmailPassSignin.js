import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

export const signinWithEmailPass = (email, pass) => {
  console.log(email, pass);
  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      console.log("ok", userCredential);
    })
    .catch((error) => {
      console.log("no", error);
    });
};
