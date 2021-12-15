import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, createUserProfileDocument } from "./Firebase";

export const signupWithEmailPass = async (inputValue) => {
  const { email, pass, name } = inputValue;
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, pass);
    createUserProfileDocument(user, { displayName: name });
  } catch (err) {
    throw err.message;
    return err.message;
  }
};
