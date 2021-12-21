import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../services/Firebase/Firebase";
import getData from "./Header.data.js";
import { RiVipCrownLine } from "react-icons/ri";
import CartModal from "../CartModal/CartModal";
import CartBadge from "../CartBadge/CartBadge";

const Header = () => {
  const data = getData();
  const [cartModalVisibility, setCartModalVisibility] = useState(false);

  return (
    <div className="bg-gray-50/5 items-center w-24 p-3 flex flex-col rounded-r-lg h-80 justify-between sticky centerY">
      <div className="relative">
        <RiVipCrownLine color="white" size="40px" />
      </div>
      <div className="flex flex-col items-center  justify-around h-full mt-2 text-gray-200">
        {data.map(({ icon, to, type }) =>
          type == "link" ? (
            <Link to={to}>{icon}</Link>
          ) : type == "modal" ? (
            <div className=" cursor-pointer">
              <div onClick={() => setCartModalVisibility(!cartModalVisibility)} className="relative">
                {icon}
                <CartBadge />
              </div>
              <CartModal visibility={cartModalVisibility}></CartModal>
            </div>
          ) : (
            <div onClick={() => signOut(auth)} className="cursor-pointer">
              {icon}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Header;
