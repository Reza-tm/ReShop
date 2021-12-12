import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";

const SinginInput = ({ icon, value, placeholder }) => {
  return (
    <div className="relative mx-auto md:mx-0">
      <input
        value={value}
        placeholder={placeholder}
        className="appearance-none w-80 h-12 border-2 focus:border-sky-700 pl-12 transition-colors duration-300 pr-4 bg-transparent text-white font-bold outline-none border-gray-600 rounded-md"
      />
      <div className="absolute" style={{ top: "50%", transform: "translateY(-50%)", left: "15px" }}>
        {icon}
      </div>
    </div>
  );
};

export default SinginInput;
