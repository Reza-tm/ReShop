import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../services/Firebase/Firebase";
import { RiVipCrownLine } from "react-icons/ri";
import CartModal from "../CartModal/CartModal";
import CartBadge from "../CartBadge/CartBadge";
import { motion } from "framer-motion";
import { BiHomeSmile, BiShoppingBag } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { VscSignOut } from "react-icons/vsc";
import { persistor } from "../../services/Redux/store";

const Header = () => {
  const navigated = useNavigate();
  const [cartModalVisibility, setCartModalVisibility] = useState(false);

  return (
    <div className="bg-gray-50/5 items-center lg:w-24 md:w-[60vw]  sm:w-[90vw] w-full mx-auto mb-6 lg:mb-0 lg:-translate-y-1/2 lg:top-1/2  p-3 flex lg:flex-col lg:rounded-r-lg rounded-b-lg lg:h-80 h-20  justify-between lg:fixed ">
      <motion.div whileHover={{ rotate: "10deg" }} className="relative">
        <RiVipCrownLine color="white" size="40px" />
      </motion.div>
      <div className="flex lg:flex-col items-center w-full lg:w-auto px-5 justify-around h-full mt-2 text-gray-200">
        <motion.div whileHover={{ scale: 1.2 }}>
          <NavLink className={(nav) => (nav.isActive ? "text-white" : "text-white/50")} to="/">
            <BiHomeSmile size="27px" />
          </NavLink>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <NavLink className={(nav) => (nav.isActive ? "text-white" : "text-white/50")} to="/checkout">
            <FiShoppingCart size="25px" />
          </NavLink>
        </motion.div>
        <div>
          <motion.div
            onClick={() => setCartModalVisibility(!cartModalVisibility)}
            whileHover={{ scale: 1.2 }}
            className=" cursor-pointer relative"
          >
            <BiShoppingBag size="27px" color={cartModalVisibility ? "#fff" : "rgb(255 255 255 / 0.5)"} /> <CartBadge />
          </motion.div>
          <CartModal visibility={[cartModalVisibility, setCartModalVisibility]} />
        </div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          onClick={() => {
            persistor.purge().then(() => {
              signOut(auth);
              navigated(0);
            });
          }}
          className="cursor-pointer"
        >
          <VscSignOut size="27px" color="rgb(255 255 255 / 0.5)" />
        </motion.div>
      </div>
      <motion.div whileHover={{ rotate: "10deg" }} className="block lg:hidden relative">
        <RiVipCrownLine color="white" size="40px" />
      </motion.div>
    </div>
  );
};

export default Header;
