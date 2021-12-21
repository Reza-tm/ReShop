import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./Firebase";

export const signinWithGithub = () => {
  const provider = new GithubAuthProvider();
  signInWithPopup(auth, provider);
};
