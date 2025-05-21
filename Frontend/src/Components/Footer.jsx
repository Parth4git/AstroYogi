import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Our Company</h3>
          <p className="text-gray-400">
            We are dedicated to providing top-notch solutions and services
            tailored to your needs.
          </p>
          <div className="flex mt-4 space-x-4 text-lg">
            <FaFacebook className="hover:text-white" />
            <FaTwitter className="hover:text-white" />
            <FaInstagram className="hover:text-white" />
            <FaLinkedin className="hover:text-white" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Astrology Consultation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Tarot Reading
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Numerology
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Vastu Consultation
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400">Email: support@example.com</p>
          <p className="text-gray-400">Phone: +91 XXXXX XXXXX</p>
          <p className="text-gray-400">Location: City, Country</p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
