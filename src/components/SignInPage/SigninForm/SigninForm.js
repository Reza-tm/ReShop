import React, { useState } from "react";
import SinginInput from "./SinginInput";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoMdKey } from "react-icons/io";
import { signInWithGoogle } from "../../Firebase/GoogleSignin";
import { signinWithGithub } from "../../Firebase/GithubSignin";
import { signinWithEmailPass } from "../../Firebase/EmailPassSignin";
import { useFormik } from "formik";
import * as Yup from "yup";

const SigninForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      pass: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Please enter a valid email").required("Required"),
      pass: Yup.string().min(6, "Must be 6 characters or more").required("Required"),
    }),
    onSubmit: (values) => {
      signinWithEmailPass(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="rounded-2xl pb-20 z-10 relative text-center md:text-left space-y-5 overflow-hidden flex flex-col justify-center"
    >
      <h2 className="font-nunito text-white text-2xl font-bold">Create Your account</h2>
      <p className="font-nunito text-white/50">Created for practice</p>
      <SinginInput
        id="email"
        value={formik.values.email}
        placeholder="Email"
        {...formik.getFieldProps("email")}
        icon={<IoPersonCircleSharp size={25} color="white" />}
        error={formik.errors.email}
        touch={formik.touched.email}
      />
      <SinginInput
        value={formik.values.pass}
        placeholder="Password"
        icon={<IoMdKey size={25} color="white" />}
        {...formik.getFieldProps("pass")}
        id="pass"
        error={formik.errors.pass}
        touch={formik.touched.pass}
      />
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
    </form>
  );
};

export default SigninForm;
