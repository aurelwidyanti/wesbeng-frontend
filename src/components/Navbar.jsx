import React from 'react';
import logo from '../assets/img/logo.png';

const Navbar = () => (
  <header className="flex justify-between items-center p-5 bg-transparent text-white fixed w-full top-0 z-10">
    {/* Logo on the left */}
    <div className="flex items-center pl-9 pt-4">
      <img src={logo} alt="Wesbeng Logo" className="h-12" />
    </div>

    {/* Login button on the right */}
    <button className="bg-black text-white py-2 px-6 rounded-full font-bold">
      Login
    </button>
  </header>
);

export default Navbar;