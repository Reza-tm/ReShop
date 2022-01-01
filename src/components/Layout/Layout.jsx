import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../services/Redux/cart/cartSlice";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.cart.cartModal);
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <header className="z-10 w-full lg:w-auto mx-auto relative flex-shrink-0 lg:h-screen ">
        <Header />
      </header>
      <main
        onClick={() => {
          if (modalState) {
            dispatch(closeModal());
          }
        }}
        className="z-0  w-full lg:pl-32 py-4 lg:pr-5 px-5"
      >
        {children}
      </main>
    </div>
  );
};

export default React.memo(Layout);
