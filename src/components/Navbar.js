"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-blue-950 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Desktop Navigation */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/Logo-PNG-white.png"
              alt="Set The Sale Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/ads-dashboard"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Ads Intelligence
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              href="https://calendly.com/pachocripto/initial-consultation-companies"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-sm">
                Book a Call
              </button>
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-900 rounded-lg mt-2 mb-4">
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300 hover:bg-blue-800 transition-colors duration-200"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300 hover:bg-blue-800 transition-colors duration-200"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              href="/ads-dashboard"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300 hover:bg-blue-800 transition-colors duration-200"
              onClick={closeMenu}
            >
              Ads Intelligence
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300 hover:bg-blue-800 transition-colors duration-200"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <Link
                href="https://calendly.com/pachocripto/initial-consultation-companies"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <button className="w-full bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300">
                  Book a Call
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
