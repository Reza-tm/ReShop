import React from "react";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="flex items-center justify-center overflow-hidden h-full">
      <header className="z-10 relative flex-shrink-0 h-screen ">
        <Header />
      </header>
      <main className="z-0 w-full pl-32  pr-5">{children}</main>
    </div>
  );
};

export default Layout;
