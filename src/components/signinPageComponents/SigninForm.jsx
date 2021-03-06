import React from "react";
import SinginInput from "./SinginInput";
import { IoMail } from "react-icons/io5";
import { IoMdKey } from "react-icons/io";
import { signInWithGoogle } from "../../services/Firebase/FirebaseAuth/GoogleSignin";
import { signinWithGithub } from "../../services/Firebase/FirebaseAuth/GithubSignin";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { signinWithEmailPass } from "../../services/Firebase/FirebaseAuth/EmailPassSignin";
import toast, { Toaster } from "react-hot-toast";

const SigninForm = ({ setter }) => {
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
      signinWithEmailPass(values.email, values.pass)
        .then((res) => toast.success("welcome to Re shop"))
        .catch((err) => toast.error(err));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="rounded-2xl duration-300 z-10 relative text-center md:text-left space-y-5 flex flex-col justify-center"
    >
      <Toaster position="top-center" />
      <h2 className="font-nunito text-white text-2xl font-bold">Sign in and enjoy app</h2>
      <p className="font-nunito text-white/50">Welcome Back !</p>
      <SinginInput
        id="email"
        value={formik.values.email}
        placeholder="Email"
        {...formik.getFieldProps("email")}
        icon={<IoMail size={25} color="white" />}
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

      <motion.button
        type="submit"
        whileTap={{ scale: 0.95 }}
        className="w-80 flex-shrink-0 h-12 mx-auto md:mx-0 rounded-md text-white font-semibold active:bg-blue-900 bg-blue-700 hover:bg-blue-800 transition-colors duration-300"
      >
        Sign in
      </motion.button>
      <div className="flex w-80 justify-between mx-auto md:mx-0">
        <motion.button
          type="button"
          whileTap={{ scale: 0.95 }}
          onClick={() => signInWithGoogle()}
          className="w-[48%] h-12 mx-auto md:mx-0 rounded-md text-white font-semibold bg-slate-700 active:bg-red-900 hover:bg-red-800 transition-colors duration-300"
        >
          Gmail
        </motion.button>
        <motion.button
          type="button"
          whileTap={{ scale: 0.95 }}
          onClick={() => signinWithGithub()}
          className="w-[48%] h-12 mx-auto md:mx-0 rounded-md text-white font-semibold bg-slate-700 active:bg-gray-900 hover:bg-gray-800 transition-colors duration-300"
        >
          Github
        </motion.button>
      </div>
      <p className="text-center mx-auto md:mx-0 text-white/50 w-80 text-sm">
        Wana create account ?{" "}
        <span onClick={() => setter(false)} className="cursor-pointer text-blue-700">
          Sign up
        </span>
      </p>
    </form>
  );
};

export default SigninForm;
