'use client';

import React, { useState, useEffect } from "react";
import { FaHome, FaProjectDiagram, FaGraduationCap, FaEnvelope, FaBars, FaTimes, FaBriefcase } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fix: Prevent background scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { href: "/", icon: FaHome, label: "Home" },
    { href: "/Projects", icon: FaProjectDiagram, label: "Projects" },
    { href: "/Experience", icon: FaBriefcase, label: "Experience" },
    { href: "/Education", icon: FaGraduationCap, label: "Education" },
    { href: "/Contact", icon: FaEnvelope, label: "Contact" },
  ];

  return (
    <>
      {/* Navbar Header */}
      <header 
        className={`w-full fixed top-0 left-0 right-0 z-[60] transition-all duration-300 px-6 py-4 flex items-center justify-between ${
          scrolled || menuOpen
            ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-red-500/10' 
            : 'bg-transparent'
        }`}
      >
        <Link href="/" className="text-xl font-bold z-[70]">
          <span className="text-white">Moazam</span>
          <span className="text-red-500 ml-1">Khan</span>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-[70] w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg transition-transform active:scale-90"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </header>

      {/* Fullscreen Overlay Menu */}
      <div
        className={`fixed top-16 inset-0 z-50 transition-all duration-500 ease-in-out ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Darkened Background */}
        <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />

        {/* Animated Background Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-red-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-orange-600/20 rounded-full blur-[120px] animate-pulse" />

        <nav className="relative h-full flex flex-col items-center justify-center p-8">
          <ul className="w-full max-w-xs space-y-4">
            {navItems.map((item, idx) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <li 
                  key={item.href}
                  className={`transform transition-all duration-500 delay-[${idx * 50}ms] ${
                    menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center p-4 rounded-2xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/20' 
                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <div className={`p-3 rounded-xl mr-4 ${isActive ? 'bg-white/20' : 'bg-white/5'}`}>
                      <Icon className="text-xl" />
                    </div>
                    <span className="text-lg font-medium">{item.label}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full animate-ping" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => setMenuOpen(false)}
            className="mt-12 text-gray-500 hover:text-white uppercase tracking-widest text-xs font-bold transition-colors"
          >
            — Close Menu —
          </button>
        </nav>
      </div>
    </>
  );
}