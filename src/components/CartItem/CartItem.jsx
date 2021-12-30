import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { BiPlus, BiMinus, BiX } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { decrementQuantity, deleteItemFromCarts, increaseQuantity } from "../../services/Redux/cart/cartSlice";

const CartItem = ({ item }) => {
  const { category, name, imgUrl, quantity } = item;
  const dispatch = useDispatch();
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.02 }}
          className="w-11/12 py-1 z-10 justify-between bg-stone-50/50 flex pl-2 pr-1 items-center rounded-md h-16 my-1 flex-shrink-0 border-2 "
        >
          <div className="w-2/5">
            <div className="text-black font-semibold">{category}</div>
            <div className="text-black/50 overflow-ellipsis whitespace-nowrap w-11/12 text-xs overflow-hidden">{name}</div>
          </div>
          <div className="w-1/5 select-none flex items-center justify-around">
            {quantity > 1 ? (
              <BiMinus color="black" cursor="pointer" onClick={() => dispatch(decrementQuantity(item))} />
            ) : (
              <BiX color="black" cursor="pointer" onClick={() => dispatch(deleteItemFromCarts(item))} />
            )}
            <p className="font-bold text-black">{quantity}</p>
            <BiPlus cursor="pointer" color="black" onClick={() => dispatch(increaseQuantity(item))} />
          </div>
          <div className="w-1/5 border relative object-fill object-bottom overflow-hidden rounded-md h-full">
            <img src={imgUrl} className="object-cover object-top w-full h-full" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartItem;
