import React from "react";

const CartBadge = ({ numOfItems }) => {
  return (
    <div className="absolute -right-4 -top-2 rounded-full w-5 h-5 select-none bg-white">
      <div className="relative w-full  h-full">
        <p className="centerXY absolute text-xs text-teal-600 font-bold">{numOfItems ? numOfItems : 0}</p>
      </div>
    </div>
  );
};

export default CartBadge;
