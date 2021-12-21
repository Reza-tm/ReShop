import { motion } from "framer-motion";
import React from "react";

const CartModal = ({ visibility }) => {
  return (
    <div
      style={{
        display: visibility ? "block" : "none",
      }}
      className="absolute left-20 centerY rounded-r-lg overflow-hidden rounded-l-sm w-64 h-96 cursor-default bg-gray-200/60"
    >
      <div className="w-full h-5/6 "></div>
      <div className="w-full h-1/6 flex justify-center items-center">
        <button className="px-4 py-2 bg-teal-900 rounded-md font-semibold">Go to Checkout</button>
      </div>
    </div>
  );
};

export default CartModal;
