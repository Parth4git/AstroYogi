import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-cyan-300 text-xl font-bold mb-4">Our Company</h3>
          <p className="text-gray-300">
            We are dedicated to providing top-notch solutions and services
            tailored to your needs.
          </p>
          <p className="text-gray-200 mt-2">
            Follow us on social media for updates and news.
          </p>
          <div className="flex mt-4 space-x-4 text-lg">
            <FaFacebook className="hover:text-cyan-200" />
            <FaTwitter className="hover:text-cyan-200" />
            <FaInstagram className="hover:text-cyan-200" />
            <FaLinkedin className="hover:text-cyan-200" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="ml-12 sm:mb-0">
          <h3 className="text-cyan-300 text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-cyan-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-200">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-200">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-200">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-200">
                Expert
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-200">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-cyan-300 text-xl font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-cyan-200">
                Astrology Consultation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-200">
                Tarot Reading
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-200">
                Numerology
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-200">
                Vastu Consultation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-200">
                Palmistry
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-200">
                Crystal Healing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-200">
                Meditation
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mb-8 sm:mb-0">
          <h3 className="text-cyan-300 text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-300 mt-4">Email: support@example.com</p>
          <p className="text-gray-300 mt-4">
            Phone: +91 XXXXX XXXXX
            <br /> <span className="ml-13">+91 XXXXX XXXXX</span>
          </p>
          <p className="text-gray-300 mt-4">
            Location: Hanumangarhi, Sanigava Road, Kanpur, 208021, Registered
            Address: 19 PURADURJAN RAI, MAUNATH BHANJAN, Mau- 275101
          </p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
