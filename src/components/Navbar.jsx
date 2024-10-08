import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If the page is scrolled more than 50px, set isScrolled to true
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-between items-center sm:px-16 sm:pt-12 fixed w-full top-0 z-10 transition-all duration-300 ${
        isScrolled
          ? "bg-[#A0D683] shadow-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="flex items-center">
        <img src={logo} alt="Wesbeng Logo" className="h-12" />
      </div>

      <button
        className={`sm:py-2 sm:px-10 rounded-full font-bold transition-all duration-300 ${
          isScrolled ? "bg-[#2F5150] text-white" : "bg-white text-black"
        }`}
      >
        Login
      </button>
    </header>
  );
};

export default Navbar;
