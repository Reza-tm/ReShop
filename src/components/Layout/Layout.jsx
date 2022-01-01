import React from "react";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <header className="z-10 w-full lg:w-auto mx-auto relative flex-shrink-0 lg:h-screen ">
        <Header />
      </header>
      <main className="z-0  w-full lg:pl-32 py-4 lg:pr-5 px-5">{children}</main>
    </div>
  );
};

export default Layout;
