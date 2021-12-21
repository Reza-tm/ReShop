import React, { useState } from "react";
import SigninForm from "../../components/SigninPage/SigninForm";
import SigninImage from "../../assets/images/signin-image.png";
import { AnimatePresence, motion } from "framer-motion";
import SignupForm from "../../components/SigninPage/SignupForm";

const SigninAndSignup = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <main className=" md:h-screen mx-auto flex md:flex-row flex-col justify-around items-center">
      <div className="w-1/2 flex justify-center">
        <div className="sm:w-64  mt-20 md:mt-0 md:w-96 lg:w-[500px]">
          <img src={SigninImage} />
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <AnimatePresence onExitComplete={() => setIsSignIn(true)}>
          {isSignUp && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <SignupForm setter={setIsSignUp} />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence onExitComplete={() => setIsSignUp(true)}>
          {isSignIn && (
            <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <SigninForm setter={setIsSignIn} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default SigninAndSignup;
