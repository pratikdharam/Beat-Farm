import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for hamburger and close buttons
import { Link } from 'react-router-dom'; // Import Link from React Router
import SignUpLogin from '../../pages/SignUpLogin'; // Adjust the path if needed

const Navbar = ({ toggleModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleModalToggle = () => {
    toggleModal(); // Call the passed toggleModal function
    setIsModalOpen(!isModalOpen); // Toggle modal state
  };

  return (
    <nav className="bg-[#F5E6D3] p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-[#4A3728] font-bold text-3xl">
          Beat Farm
        </div>

        {/* Hamburger Menu and Cart Icon for Mobile */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Cart Icon with Notification Badge */}
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6 text-black">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <div className="absolute top-0 -right-2">
              <p className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">3</p>
            </div>
          </div>

          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#F5E6D3] shadow-lg">
            <ul className="flex flex-col items-center">
              <li className="py-2 text-lg">
                <Link to="/" onClick={toggleMenu} className="text-[#4A3728] font-lufga hover:text-[#00A4E4]">All Beats</Link>
              </li>
              <li className="py-2 text-lg">
                <Link to="/free-beats" onClick={toggleMenu} className="text-[#4A3728] font-lufga hover:text-[#00A4E4]">Free Beats</Link>
              </li>
              <li className="py-2 text-lg">
                <Link to="/premium-beats" onClick={toggleMenu} className="text-[#4A3728] font-lufga hover:text-[#00A4E4]">Premium Beats</Link>
              </li>
              <li className="py-2 text-lg">
                <Link to="/license-info" onClick={toggleMenu} className="text-[#4A3728] font-lufga hover:text-[#00A4E4]">License Info</Link>
              </li>
              <li className="py-2 text-lg">
                <Link to="/faq" onClick={toggleMenu} className="text-[#4A3728] font-lufga hover:text-[#00A4E4]">FAQ</Link>
              </li>
              <li className="py-2 text-lg">
                <Link to="/contact" onClick={toggleMenu} className="text-[#4A3728] font-lufga hover:text-[#00A4E4]">Contact</Link>
              </li>
              <button onClick={handleModalToggle} className="bg-[#00A4E4] text-white font-bold py-2 px-4 rounded hover:bg-[#008ec1] my-4">
                Sign Up / Log In
              </button>
            </ul>
          </div>
        )}

        {/* Full Navigation Links for large screens */}
        <div className="hidden md:flex space-x-6 flex-grow justify-center">
          <Link to="/" className="text-[#4A3728] font-lufga hover:text-[#00A4E4]">All Beats</Link>
          <Link to="/free-beats" className="text-[#4A3728] font-lufga hover:text-[#00A4E4]">Free Beats</Link>
          <Link to="/premium-beats" className="text-[#4A3728] font-lufga hover:text-[#00A4E4]">Premium Beats</Link>
          <Link to="/license-info" className="text-[#4A3728] font-lufga hover:text-[#00A4E4]">License Info</Link>
          <Link to="/faq" className="text-[#4A3728] font-lufga hover:text-[#00A4E4]">FAQ</Link>
          <Link to="/contact" className="text-[#4A3728] font-lufga hover:text-[#00A4E4]">Contact</Link>
        </div>

        {/* Cart Icon and Sign Up / Log In Button for large screens */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Cart Icon with Notification Badge */}
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6 text-black">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <div className="absolute top-0 -right-2">
              <p className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">0</p>
            </div>
          </div>

          {/* Sign Up / Log In Button */}
          <button onClick={handleModalToggle} className="bg-[#00A4E4] text-white font-bold py-2 px-4 rounded hover:bg-[#008ec1]">
            Sign Up / Log In
          </button>
        </div>
      </div>

      {/* Modal for Sign Up / Log In */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
          <div className="bg-white rounded-lg p-6 w-96">
            <SignUpLogin />
            <button onClick={handleModalToggle} className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
