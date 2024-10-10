import React from "react";
import Logo from "./ui/Logo";

const Footer = () => {
  return (
    <footer className="bg-[#A0D683] text-black w-full">
      <div className="w-full p-14">
        {/* Top section with logo and links */}
        <div className="flex flex-col justify-between items-left border-b border-white border-opacity-40 pb-8 gap-8">
          {/* Logo */}
          <div className="flex sm:w-[160px] items-center sm:space-x-2">
            <div className="w-full sm:py-1 sm:px-6 rounded-full border-4 border-[#2F5150] flex justify-center items-center">
              <Logo color="#2F5150" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex space-x-10 text-base font-medium text-white">
            <a href="#" className="hover:underline">
              Overview
            </a>
            <a href="#" className="hover:underline">
              Features
            </a>
            <a href="#" className="hover:underline">
              Blog
            </a>
            <a href="#" className="hover:underline">
              Help
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="flex pt-8">
          <p className="text-center text-base text-white">
            © 2024 <span className="font-bold">Wesbeng</span>. All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
