import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for hamburger and close buttons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#F5E6D3] p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo */}
        <div className="text-[#4A3728] font-bold text-3xl">
          Beat Farm
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#F5E6D3] shadow-lg">
            <ul className="flex flex-col items-center">
              <li className="py-2 text-lg">
                <a href="#" className="text-[#4A3728] font-lufga hover:text-[#00A4E4]">All Beats</a>
              </li>
              <li className="py-2 text-lg">
                <a href="#" className="text-[#4A3728] font-lufga hover:text-[#00A4E4]">Free Beats</a>
              </li>
              <li className="py-2 text-lg">
                <a href="#" className="text-[#4A3728] font-lufga hover:text-[#00A4E4]">Premium Beats</a>
              </li>
              <li className="py-2 text-lg">
                <a href="#" className="text-[#4A3728] font-lufga hover:text-[#00A4E4]">License Info</a>
              </li>
              <li className="py-2 text-lg">
                <a href="#" className="text-[#4A3728] font-lufga hover:text-[#00A4E4]">FAQ</a>
              </li>
              <li className="py-2 text-lg">
                <a href="#" className="text-[#4A3728] font-lufga hover:text-[#00A4E4]">Contact</a>
              </li>
              <button className="bg-[#00A4E4] text-white font-bold py-2 px-4 rounded hover:bg-[#008ec1] my-4">
                Sign Up / Log In
              </button>
            </ul>
          </div>
        )}

        {/* Full Navigation Links for large screens */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-[#4A3728] font-lufga hover:text-[#00A4E4]">All Beats</a>
          <a href="#" className="text-[#4A3728] font-lufga hover:text-[#00A4E4]">Free Beats</a>
          <a href="#" className="text-[#4A3728] font-lufga hover:text-[#00A4E4]">Premium Beats</a>
          <a href="#" className="text-[#4A3728] font-lufga hover:text-[#00A4E4]">License Info</a>
          <a href="#" className="text-[#4A3728] font-lufga hover:text-[#00A4E4]">FAQ</a>
          <a href="#" className="text-[#4A3728] font-lufga hover:text-[#00A4E4]">Contact</a>
        </div>
          {/* Sign Up / Log In Button for large screens */}
          <div className="hidden md:flex">
          <button className="bg-[#00A4E4] text-white font-bold py-2 px-4 rounded hover:bg-[#008ec1]">
            Sign Up / Log In
          </button>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
