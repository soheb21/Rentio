import React, { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-teal-600 flex items-center gap-2 font-bold text-xl">
          Rentio
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-teal-600 text-gray-600">Home</Link>
          <Link to="/about" className="hover:text-teal-600 text-gray-600">About</Link>
          <Link to="/contact" className="hover:text-teal-600 text-gray-600">Contact</Link>
          <Link to="/cars" className="hover:text-teal-600 text-gray-600">Cars</Link>

          {/* Desktop Buttons */}
          <div className="flex items-center gap-4">
            <Link className="rounded-md bg-teal-600 px-5 py-2.5 text-sm text-white" to="/login">
              Login
            </Link>
            <Link className="rounded-md bg-gray-100 px-5 py-2.5 text-sm text-teal-600" to="/register">
              Register
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden rounded-sm bg-gray-100 p-2 text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 text-gray-700">
          <Link onClick={() => setMenuOpen(false)} to="/" className="block hover:text-teal-600">Home</Link>
          <Link onClick={() => setMenuOpen(false)} to="/about" className="block hover:text-teal-600">About</Link>
          <Link onClick={() => setMenuOpen(false)} to="/contact" className="block hover:text-teal-600">Contact</Link>
          <Link onClick={() => setMenuOpen(false)} to="/cars" className="block hover:text-teal-600">Cars</Link>

          <div className="flex flex-col pt-4 gap-3">
            <Link onClick={() => setMenuOpen(false)} to="/login" className="rounded-md bg-teal-600 px-5 py-2.5 text-sm text-center text-white">
              Login
            </Link>
            <Link onClick={() => setMenuOpen(false)} to="/register" className="rounded-md bg-gray-100 px-5 py-2.5 text-sm text-center text-teal-600">
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
