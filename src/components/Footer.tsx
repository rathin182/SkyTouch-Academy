"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-2">
            <h3
              className="text-2xl font-bold text-sky-400 mb-4"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              SkyTouch Academy
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering professionals with cutting-edge digital marketing skills. Join thousands of successful graduates who have transformed their careers with our expert-led programs.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-sky-400 cursor-pointer">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 cursor-pointer">
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 cursor-pointer">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 cursor-pointer">
                <i className="ri-instagram-fill text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#courses" className="text-gray-300 hover:text-sky-400 cursor-pointer">
                  Courses
                </a>
              </li>
              <li>
                <a href="#workshops" className="text-gray-300 hover:text-sky-400 cursor-pointer">
                  Workshops
                </a>
              </li>
              <li>
                <a href="#free-courses" className="text-gray-300 hover:text-sky-400 cursor-pointer">
                  Free Courses
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-sky-400 cursor-pointer">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-sky-400 cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-sky-400 cursor-pointer">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-sky-400 cursor-pointer">
                  Student Portal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-sky-400 cursor-pointer">
                  Career Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-sky-400 cursor-pointer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-sky-400 cursor-pointer">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 SkyTouch Academy. All rights reserved.</p>
          {/* <a
            href="https://readdy.ai/?origin=logo"
            className="text-gray-400 hover:text-sky-400 text-sm cursor-pointer mt-2 md:mt-0"
          >
            Website Builder
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
