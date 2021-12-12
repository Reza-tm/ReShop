import React from "react";
import SinginInput from "./SinginInput";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoMdKey } from "react-icons/io";
import { signInWithGoogle } from "../../Firebase/GoogleSignin";
import { signinWithGithub } from "../../Firebase/GithubSignin";
const SigninForm = () => {
  return (
    <div className="rounded-2xl z-10 relative text-center md:text-left space-y-5 overflow-hidden flex flex-col justify-center">
      <h2 className="font-nunito text-white text-2xl font-bold">Create Your account</h2>
      <p className="font-nunito text-white/50">Created for practice</p>
      <SinginInput placeholder="Username" icon={<IoPersonCircleSharp size={25} color="white" />} />
      <SinginInput placeholder="password" icon={<IoMdKey size={25} color="white" />} />
      <button className="w-80 h-12 mx-auto md:mx-0 rounded-md text-white font-semibold active:bg-blue-900 bg-blue-700 hover:bg-blue-800 transition-colors duration-300">
        Create my account
      </button>
      <div className="flex w-80 justify-between mx-auto md:mx-0">
        <button
          onClick={() => signInWithGoogle()}
          className="w-[48%] h-12 mx-auto md:mx-0 rounded-md text-white font-semibold bg-slate-700 active:bg-red-900 hover:bg-red-800 transition-colors duration-300"
        >
          Gmail
        </button>
        <button
          onClick={() => signinWithGithub()}
          className="w-[48%] h-12 mx-auto md:mx-0 rounded-md text-white font-semibold bg-slate-700 active:bg-gray-900 hover:bg-gray-800 transition-colors duration-300"
        >
          Github
        </button>
      </div>
      <p className="text-center mx-auto md:mx-0 text-white/50 w-80 text-sm">
        Already have an account ? <span className="text-blue-700">Sign in</span>
      </p>
    </div>
  );
};

export default SigninForm;
