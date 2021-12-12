import React from "react";
import SigninForm from "../../components/SignInPage/SigninForm/SigninForm";
import SigninImage from "../../assets/images/signin-image.png";

const Signin = () => {
  return (
    <main className="w-full h-full flex md:flex-row  flex-col justify-around items-center">
      <div className="lg:h-[500px] sm:w-64 w-52 mt-20 md:mt-0 md:w-96 lg:w-[500px]">
        <img src={SigninImage} />
      </div>
      <div className=" h-[500px] flex flex-col justify-center">
        <SigninForm />
      </div>
    </main>
  );
};

export default Signin;
