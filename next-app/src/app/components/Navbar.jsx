// src/components/Navbar.tsx
"use client"; // This is a client component because it uses state for the mobile menu

import React, { useState } from "react";
import Image from "next/image";
import GradientText from "./sections/Items/GradientText";

// Data for navigation links to keep the component clean
const navLinks = [
  { href: "#", text: "Services" },
  { href: "price", text: "Subscription Plans" },
  { href: "learnx", text: "LearnX" },
  { href: "#", text: "Blog" },
  { href: "#", text: "Company" },
  { href: "#", text: "Partners" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm text-white border-b border-gray-800">
      <div className="max-w-screen-2xl mx-auto px-1 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side: Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="flex uppercase text-2xl font-bold items-center"
            >
             
              <GradientText
                className="text-2xl md:text-3xl lg:text-4xl  leading-tight"
                gradientFrom="from-blue-600"
                gradientTo="to-blue-200"
              >
                Hack Secure
              </GradientText>
            </a>
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Right Side: Actions and Sign In */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a
              href="#"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              Report an incident
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              Talk to sales
            </a>
            <button className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
            <a
              href="auth"
              className="px-5 py-2 border-2 border-blue-600 rounded-full text-white hover:bg-blue-600 hover:text-black font-semibold transition-all duration-300"
            >
              Sign in
            </a>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                {link.text}
              </a>
            ))}
            <div className="border-t border-gray-700 pt-4 mt-4 space-y-2">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                Report an incident
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                Talk to sales
              </a>
              <a
                href="auth"
                className="block mx-3 my-2 px-5 py-2 border-2 border-blue-600 rounded-full text-center text-white hover:bg-blue-600 font-semibold transition-all duration-300"
              >
                Sign in
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavbarPreviewPage = () => {
  return (
   
      <Navbar />
      
  );
};

export default NavbarPreviewPage;