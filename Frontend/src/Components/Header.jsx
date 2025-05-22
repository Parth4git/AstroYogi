import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-700">MyLogo</div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium text-lg">
          <a href="#home" className="hover:text-blue-700 transition">
            Home
          </a>
          <a href="#categories" className="hover:text-blue-700 transition">
            Categories
          </a>
          <a href="#experts" className="hover:text-blue-700 transition">
            Experts
          </a>
          <a href="#blog" className="hover:text-blue-700 transition">
            Testimonials
          </a>
          <a href="#about" className="hover:text-blue-700 transition">
            About
          </a>
          <a href="#contact" className="hover:text-blue-700 transition">
            Contact
          </a>
        </nav>

        {/* Login/Register Button */}
        <div className="hidden md:block">
          <button
            className="bg-blue-800 text-white px-4 py-2 rounded-4xl hover:bg-blue-600 transition font-semibold"
            onClick={() => {
              navigate("/register");
            }}
          >
            Login / Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
