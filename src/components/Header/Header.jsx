import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { auth } from "../../services/Firebase/Firebase";
import getData from "./Header.data.js";

const Header = () => {
  const data = getData();
  console.log(data);

  return (
    <div className="bg-white/10 w-24 p-3 flex flex-col rounded-r-lg h-72 justify-between sticky centerY">
      <div className="">
        <img src={logo} className="object-cover" />
      </div>
      <div className="flex flex-col items-center justify-around h-full mt-2 text-gray-200">
        {data.map(({ title, to }) =>
          to ? (
            <Link to={to}>
              <p className="capitalize font-bold">{title}</p>
            </Link>
          ) : (
            <p onClick={() => signOut(auth)} className="cursor-pointer capitalize font-bold">
              {title}
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default Header;
