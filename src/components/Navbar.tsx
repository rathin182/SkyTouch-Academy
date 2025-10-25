"use client"; // Required if using React hooks or client-side interactivity

import React, { useState } from "react";
import Link from "next/link";
import { RiMenuLine } from "react-icons/ri";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1
              className="text-2xl font-bold text-sky-600"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              SkyTouch Academy
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#courses" className="text-gray-700 hover:text-sky-600 font-medium">
              Courses
            </Link>
            <Link href="#workshops" className="text-gray-700 hover:text-sky-600 font-medium">
              Workshops
            </Link>
            <Link href="#free-courses" className="text-gray-700 hover:text-sky-600 font-medium">
              Free Courses
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-sky-600 font-medium">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-sky-600 font-medium">
              Contact
            </Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="font-semibold rounded-lg transition-all duration-200 border-2 border-sky-500 text-sky-600 hover:bg-sky-50 px-4 py-2 text-sm">
              Free Demo
            </button>
            <button className="font-semibold rounded-lg transition-all duration-200 bg-sky-500 hover:bg-sky-600 text-white shadow-lg hover:shadow-xl px-4 py-2 text-sm">
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-sky-600">
              <RiMenuLine className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col p-4 space-y-2">
            <Link href="#courses" className="text-gray-700 hover:text-sky-600 font-medium">
              Courses
            </Link>
            <Link href="#workshops" className="text-gray-700 hover:text-sky-600 font-medium">
              Workshops
            </Link>
            <Link href="#free-courses" className="text-gray-700 hover:text-sky-600 font-medium">
              Free Courses
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-sky-600 font-medium">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-sky-600 font-medium">
              Contact
            </Link>
            <button className="font-semibold rounded-lg border-2 border-sky-500 text-sky-600 hover:bg-sky-50 px-4 py-2 text-sm mt-2">
              Free Demo
            </button>
            <button className="font-semibold rounded-lg bg-sky-500 hover:bg-sky-600 text-white shadow-lg px-4 py-2 text-sm mt-2">
              Enroll Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
