import React from "react";
import { BiMinus, BiPlus, BiX } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { decrementQuantity, deleteItemFromCarts, increaseQuantity } from "../../../../services/Redux/cart/cartSlice";

const CheckoutItem = ({ item }) => {
  const { category, name, quantity, imgUrl, price } = item;
  const dispatch = useDispatch();
  return (
    <div className="w-full bg-white/10 border-teal-800/10 flex flex-shrink-0 justify-between p-2 pl-4 items-center border-2 h-24 rounded-lg">
      <div className="w-1/5">
        <p className="text-white font-bold text-lg uppercase">{category}</p>
        <p className="text-white font-semibold">{name}</p>
      </div>
      <div className=" font-bold text-2xl text-center w-1/6 text-[#86efac]">{quantity * price} $</div>
      <div className="w-1/5 select-none flex items-center justify-around">
        {quantity > 1 ? (
          <BiMinus size={25} color="white" cursor="pointer" onClick={() => dispatch(decrementQuantity(item))} />
        ) : (
          <BiX size={25} color="#fca5a5" cursor="pointer" onClick={() => dispatch(deleteItemFromCarts(item))} />
        )}
        <p className="font-bold text-white text-xl">{quantity}</p>
        <BiPlus cursor="pointer" size={25} color="white" onClick={() => dispatch(increaseQuantity(item))} />
      </div>
      <div className="w-1/5 ml-7 border relative object-fill object-bottom overflow-hidden rounded-md h-full">
        <img src={imgUrl} className="object-cover object-top w-full h-full" />
      </div>
    </div>
  );
};

export default CheckoutItem;
