import React from "react";
import SinginInput from "./SinginInput";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoMdKey } from "react-icons/io";

const SigninForm = () => {
  return (
    <div className="h-96 w-[430px] rounded-2xl z-10 relative overflow-hidden flex flex-col justify-center">
      <h2 className="font-nunito text-white text-2xl font-bold">Create Your account</h2>
      <p className="font-nunito text-white/50 py-5">Created for practice</p>
      <SinginInput placeholder="Username" icon={<IoPersonCircleSharp size={25} color="white" />} />
      <br />
      <SinginInput placeholder="password" icon={<IoMdKey size={25} color="white" />} />
      <br />
      <button className="w-80 h-12 rounded-md text-white font-semibold bg-blue-700 hover:bg-blue-800 transition-colors duration-300">
        Create my account
      </button>
      <p className="text-center text-white/50 w-80 text-sm py-5">
        Already have an account ? <span className="text-blue-700">Sign in</span>
      </p>
    </div>
  );
};

export default SigninForm;
