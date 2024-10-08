import React from "react";
import logo from "../assets/img/logo.png";

const Navbar = () => (
  <header className="flex justify-between items-center sm:px-16 sm:pt-12 bg-transparent text-white fixed w-full top-0 z-10">
    <div className="flex items-center">
      <img src={logo} alt="Wesbeng Logo" className="h-12" />
    </div>
    <button className="bg-white text-black sm:py-2 sm:px-10 rounded-full font-bold">
      Login
    </button>
  </header>
);

export default Navbar;
