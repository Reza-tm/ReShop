import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../../services/Firebase/Firebase";
import getData from "./Header.data.js";
import { RiVipCrownLine } from "react-icons/ri";
import CartModal from "../CartModal/CartModal";
import CartBadge from "../CartBadge/CartBadge";
import { motion } from "framer-motion";
import { BiSupport, BiHomeSmile, BiShoppingBag } from "react-icons/bi";
import { VscSignOut } from "react-icons/vsc";

const Header = () => {
  const data = getData();
  const [cartModalVisibility, setCartModalVisibility] = useState(false);

  return (
    <div className="bg-gray-50/5 items-center w-24 p-3 flex flex-col rounded-r-lg h-80 justify-between fixed centerY">
      <motion.div whileHover={{ rotate: "10deg" }} className="relative">
        <RiVipCrownLine color="white" size="40px" />
      </motion.div>
      <div className="flex flex-col items-center  justify-around h-full mt-2 text-gray-200">
        <motion.div whileHover={{ scale: 1.2 }}>
          <NavLink className={(nav) => (nav.isActive ? "text-white" : "text-white/50")} to="/">
            <BiHomeSmile size="27px" />
          </NavLink>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <NavLink className={(nav) => (nav.isActive ? "text-white" : "text-white/50")} to="/contact">
            <BiSupport size="27px" />
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
          <CartModal visibility={cartModalVisibility}></CartModal>
        </div>
        <motion.div whileHover={{ scale: 1.2 }} onClick={() => signOut(auth)} className="cursor-pointer">
          <VscSignOut size="27px" color="rgb(255 255 255 / 0.5)" />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
