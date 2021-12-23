import { motion } from "framer-motion";
import React, { useState } from "react";
import { BiPlus, BiMinus, BiX } from "react-icons/bi";

const CartItem = ({ title, description }) => {
  const [numOfProduct, setNumOfProduct] = useState(1);
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-11/12 py-1 z-10 justify-between flex pl-2 pr-1 items-center rounded-r-lg rounded-l-sm h-16 my-1 flex-shrink-0 border-2 bg-gray-200/10"
    >
      <div className="w-2/5">
        <div className="text-black font-semibold">{title}</div>
        <div className="text-black/50 overflow-ellipsis whitespace-nowrap w-11/12 text-xs overflow-hidden">{description}</div>
      </div>
      <div className="w-1/5 select-none flex items-center justify-around">
        {numOfProduct > 1 ? (
          <BiMinus color="black" cursor="pointer" onClick={() => setNumOfProduct((prev) => prev - 1)} />
        ) : (
          <BiX color="black" cursor="pointer" />
        )}
        <p className="font-bold text-black">{numOfProduct}</p>
        <BiPlus cursor="pointer" color="black" onClick={() => setNumOfProduct((prev) => prev + 1)} />
      </div>
      <div className="w-1/5 border rounded-sm h-full"></div>
    </motion.div>
  );
};

export default CartItem;
