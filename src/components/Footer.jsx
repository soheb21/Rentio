import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        
        {/* ✅ Rentio logo/name added (no style changed) */}
        <div className="flex justify-center">
          <Link to="/">
            <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-300">
              Rentio
            </h2>
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-300">
          <Link to="/" className="hover:text-teal-600">Home</Link>
          <Link to="/about" className="hover:text-teal-600">About</Link>
          <Link to="/cars" className="hover:text-teal-600">Cars</Link>
          <Link to="/contact" className="hover:text-teal-600">Contact</Link>
        </div>

        {/* ✅ Social Icons added (same styling as original) */}
        <div className="mt-6 flex justify-center space-x-6">
          <a href="#" className="text-gray-500 hover:text-teal-600"><FaFacebook className="size-6" /></a>
          <a href="#" className="text-gray-500 hover:text-teal-600"><FaInstagram className="size-6" /></a>
          <a href="#" className="text-gray-500 hover:text-teal-600"><FaTwitter className="size-6" /></a>
          <a href="#" className="text-gray-500 hover:text-teal-600"><FaGithub className="size-6" /></a>
          <a href="#" className="text-gray-500 hover:text-teal-600"><FaDribbble className="size-6" /></a>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Rentio — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
