'use client';

import React, { useState } from "react";
import { FaHome, FaProjectDiagram, FaGraduationCap, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

// MobileNavbar Component
export default function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-black shadow-md z-50">
      {/* Mobile Navbar */}
      <nav className="flex items-center justify-between px-4 py-4 border">
        {/* Hamburger Icon for Menu Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-red-500 focus:outline-none">
          {menuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
        </button>

        {/* Menu Icons */}
        {menuOpen && (
          <div className="flex justify-center items-center space-x-4 w-full">
            <Link href="/" className="text-gray-300 hover:text-red-500 transform transition-transform duration-300 hover:scale-125">
              <FaHome size={30} />
            </Link>
            <Link href="/Projects" className="text-gray-300  hover:text-red-500 transform transition-transform duration-300 hover:scale-125">
              <FaProjectDiagram size={30} />
            </Link>
            <Link href="/Education" className="text-gray-300  hover:text-red-500 transform transition-transform duration-300 hover:scale-125">
              <FaGraduationCap size={30} />
            </Link>
            <Link href="/Contact" className="text-gray-300  hover:text-red-500 transform transition-transform duration-300 hover:scale-125">
              <FaEnvelope size={30} />
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}