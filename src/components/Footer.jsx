import React from "react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="px-6 pb-6">
      <div className="w-full p-6 shadow-lg flex flex-row items-center justify-center rounded-lg bg-[#4793AF] text-[12px] sm:text-sm text-center font-semibold">
        <p className="text-gray-100">{currentYear} &nbsp;&nbsp; | &nbsp;&nbsp; lau_manzo12@hotmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;