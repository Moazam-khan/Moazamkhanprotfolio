'use client';

import React, { useState, useEffect } from "react";
import { FaHome, FaProjectDiagram, FaGraduationCap, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const pathname = usePathname();

  // Detect screen width on resize and set isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the md breakpoint
    };

    // Set initial state
    handleResize();

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed w-full bg-white shadow-md z-50">
      {isMobile ? (
        <MobileNavbar />
      ) : (
        <nav className="hidden md:flex items-center justify-center px-8 py-4 w-full bg-black">
          {/* Menu Items in the center */}
          <div className="flex space-x-8">
            <Link href="/" className={`transform transition-transform duration-300 hover:scale-110 flex items-center space-x-2 ${pathname === '/' ? 'text-red-500' : 'text-white hover:text-red-500'}`}>
              <FaHome className={`${pathname === '/' ? 'text-red-500' : 'hover:text-red-500'}`} />
              <span>Home</span>
            </Link>
            <Link href="/Projects" className={`transform transition-transform duration-300 hover:scale-110 flex items-center space-x-2 ${pathname === '/Projects' ? 'text-red-500' : 'text-white hover:text-red-500'}`}>
              <FaProjectDiagram className={`${pathname === '/Projects' ? 'text-red-500' : 'hover:text-red-500'}`} />
              <span>Projects</span>
            </Link>
            <Link href="/Education" className={`transform transition-transform duration-300 hover:scale-110 flex items-center space-x-2 ${pathname === '/Education' ? 'text-red-500' : 'text-white hover:text-red-500'}`}>
              <FaGraduationCap className={`${pathname === '/Education' ? 'text-red-500' : 'hover:text-red-500'}`} />
              <span>Education</span>
            </Link>
            <Link href="/Contact" className={`transform transition-transform duration-300 hover:scale-110 flex items-center space-x-2 ${pathname === '/Contact' ? 'text-red-500' : 'text-white hover:text-red-500'}`}>
              <FaEnvelope className={`${pathname === '/Contact' ? 'text-red-500' : 'hover:text-red-500'}`} />
              <span>Contact</span>
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}