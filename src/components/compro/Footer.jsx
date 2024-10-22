import React from "react";
import Logo from "./ui/Logo";

const Footer = () => {
  return (
    <footer className="bg-[#A0D683] text-black w-full">
      <div className="w-full p-6 sm:p-14">
        {/* Top section with logo and links */}
        <div className="flex flex-col justify-between items-left border-b border-white border-opacity-40 pb-4 sm:pb-8 gap-4 sm:gap-8">
          {/* Logo */}
          <div className="flex w-[120px] sm:w-[160px] items-center sm:space-x-2">
            <div className="w-full py-1 px-4 sm:py-1 sm:px-6 rounded-full border-[3px] border-[#2F5150] flex justify-center items-center">
              <Logo color="#2F5150" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-3 sm:flex flex-col sm:flex-row gap-2 sm:gap-10 text-sm sm:text-base font-medium text-white">
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
        <div className="flex justify-center sm:justify-start pt-4 sm:pt-8">
          <p className="text-center text-sm sm:text-base text-white">
            © 2024 <span className="font-bold">Wesbeng</span>. All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
