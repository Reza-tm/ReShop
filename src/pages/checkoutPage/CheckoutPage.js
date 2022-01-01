import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/mainAppComponents/Checkout/CheckoutItem/CheckoutItem";
import { AiOutlineFileDone } from "react-icons/ai";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div>
      <h1 className="font-semibold  uppercase text-3xl text-white my-1">Checkout 🛍</h1>
      <div className="lg:h-[520px] relative  border-teal-900/20 border-4 rounded-lg p-5">
        {cartItems.length === 0 ? (
          <p className="centerXY  text-2xl uppercase text-white">There isnt any Item</p>
        ) : (
          <div className="flex flex-col lg:flex-row overflow-hidden h-full">
            <div className="flex overflow-scroll flex-col space-y-3 w-full lg:w-1/2">
              {cartItems.map((item) => (
                <CheckoutItem item={item} />
              ))}
            </div>
            <div className="relative lg:w-1/2 w-full">
              <div className="lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 mt-5 lg:my-0 lg:-translate-y-1/2 lg:absolute flex lg:flex-col items-center justify-around text-center">
                <AiOutlineFileDone color="white" size={50} className="mx-auto hidden lg:block my-10" />
                <p className="font-semibold text-white text-2xl">Your final amount is</p>
                <br />
                <p className="text-[#34d399] font-semibold text-3xl">
                  {cartItems.reduce((acc, mul) => acc + mul.price * mul.quantity, 0)} $
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      ;
    </div>
  );
};

export default CheckoutPage;
