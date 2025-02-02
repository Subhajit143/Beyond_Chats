import React, { useState } from "react";
import logo from "../assets/LOGO.png";
import { NavLink } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
        <div className="w-full   px-4  flex justify-between sm:justify-center py-3 z-50 relative ">
        {/* Logo Section */}
        <div>
          
            <img className="w-2/5 sm:w-1/5" src={logo} alt="Logo" />
          
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:grid place-content-center">
          <ul className="flex gap-6">
            <li className="mx-2 cursor-pointer">
              <p className="font-semibold">+91-8420204635</p>
            </li>
            <li className="mx-2 cursor-pointer">
              <button className="bg-[#0F4B68] text-white font-semibold p-2 rounded-lg" >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="text-3xl md:hidden cursor-pointer" onClick={toggleMenu}>
          <RiMenu4Line />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="bg-gray-100 p-8 md:hidden">
          <ul className="flex flex-col gap-4 text-center items-center">
            <li>
              <p className="cursor-pointer text-black">+91-8420204635</p>
            </li>
            <li>
            <button className="bg-[#0F4B68] text-white font-semibold p-2 rounded-lg" >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
