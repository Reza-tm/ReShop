import { motion } from "framer-motion";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const CartModal = ({ visibility }) => {
  const [cartModalVisibility, setCartModalVisibility] = visibility;
  const [display, setDisplay] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <motion.div
      onAnimationComplete={() => (cartModalVisibility ? "" : setDisplay(false))}
      onAnimationStart={() => setDisplay(true)}
      animate={{ opacity: cartModalVisibility ? 1 : 0 }}
      initial={{ opacity: 0 }}
      style={{ display: display ? "block" : "none", zIndex: "999 !important" }}
      className=" left-24 z-50 fixed centerY rounded-r-lg overflow-hidden rounded-l-sm w-72 h-96 cursor-default bg-gray-200"
    >
      <div className="w-full h-5/6 py-3 flex flex-col items-center  overflow-y-auto">
        {cartItems.length == 0 ? (
          <p className="text-black font-semibold text-xl centerXY text-center capitalize">There isnt any item</p>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>
      <div className="w-full h-1/6 flex justify-center items-center">
        <Link to="/checkout" onClick={() => setCartModalVisibility(false)}>
          <motion.button whileTap={{ scale: 1.04 }} className="px-4 py-2 bg-teal-900 rounded-md font-semibold">
            Go to Checkout
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default React.memo(CartModal);
