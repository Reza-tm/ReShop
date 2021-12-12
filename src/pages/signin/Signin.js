import React from "react";
import SigninForm from "../../components/SignInPage/SigninForm/SigninForm";
import SigninImage from "../../assets/images/signin-image.png";

const Signin = () => {
  return (
    <main className="w-full h-full flex justify-around items-center">
      <div className="h-[500px] w-[500px]">
        <img src={SigninImage} />
      </div>
      <div className=" h-[500px] flex flex-col justify-center">
        <SigninForm />
      </div>
    </main>
  );
};

export default Signin;
