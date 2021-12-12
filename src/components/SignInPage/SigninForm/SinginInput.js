import React from "react";
import { IoAlertOutline } from "react-icons/io5";

const SinginInput = ({ icon, value, placeholder, id, error, touch, ...rest }) => {
  return (
    <div className="relative mx-auto md:mx-0">
      <input
        id={id}
        value={value}
        placeholder={placeholder}
        className="appearance-none w-80 h-12 border-2 focus:border-sky-700 px-12 transition-colors duration-300 bg-transparent text-white font-bold outline-none border-gray-600 rounded-md"
        {...rest}
      />
      <div className="absolute" style={{ top: "50%", transform: "translateY(-50%)", left: "15px" }}>
        {icon}
      </div>
      {error && touch ? (
        <div className="group">
          <div className="absolute " style={{ top: "50%", transform: "translateY(-50%)", right: "15px" }}>
            <IoAlertOutline size={25} color="#f87171" />
          </div>
          <div
            className="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100 "
            style={{ top: "-18px", right: "15px" }}
          >
            <p className="text-sm text-red-400/70">{error}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SinginInput;
