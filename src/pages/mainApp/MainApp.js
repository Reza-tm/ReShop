import React from "react";
import Header from "../../components/Header/Header";

const MainApp = () => {
  return (
    <div className="flex">
      <header className="h-screen relative w-32">
        <Header />
      </header>
      <main className="w-full"></main>
    </div>
  );
};

export default MainApp;
