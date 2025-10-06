'use client';

import React, { useState, useEffect } from "react";
import { FaHome, FaProjectDiagram, FaGraduationCap, FaEnvelope, FaBars, FaTimes, FaBriefcase } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {/* Mobile Navbar Header */}
      <div className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-red-500/10' 
          : 'bg-black/80 backdrop-blur-sm'
      }`}>
        <nav className="flex items-center justify-between px-6 py-4">
          {/* Logo/Brand */}
          <Link href="/" className="text-xl font-bold">
            <span className="text-white">Moazam</span>
            <span className="gradient-text ml-1">Khan</span>
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 hover:scale-110 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FaTimes className="w-5 h-5 transition-transform duration-300 rotate-90" />
            ) : (
              <FaBars className="w-5 h-5 transition-transform duration-300" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-40 transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMenuOpen(false)}
      >
        {/* Menu Content */}
        <div
          className={`flex flex-col items-center justify-center h-full space-y-8 transition-all duration-500 ${
            menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Animated Background Elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          {/* Navigation Items */}
          {navItems.map((item, idx) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative flex flex-col items-center space-y-2 transition-all duration-300 ${
                  menuOpen ? 'animate-fadeInUp' : ''
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Icon Circle */}
                <div
                  className={`relative flex items-center justify-center w-20 h-20 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-red-600 to-red-500 shadow-xl shadow-red-500/50 scale-110'
                      : 'bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-red-500/50 group-hover:bg-white/10 group-hover:scale-110'
                  }`}
                >
                  {/* Glow Effect */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-orange-500 opacity-50 blur-xl animate-pulse" />
                  )}
                  
                  <Icon
                    className={`text-3xl relative z-10 transition-all duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-400 group-hover:text-red-500'
                    }`}
                  />
                </div>

                {/* Label */}
                <span
                  className={`text-lg font-semibold tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 group-hover:text-white'
                  }`}
                >
                  {item.label}
                </span>

                {/* Active Indicator */}
                {isActive && (
                  <div className="w-12 h-1 bg-gradient-to-r from-red-600 to-orange-500 rounded-full animate-pulse" />
                )}
              </Link>
            );
          })}

          {/* Close Button Text */}
          <button
            onClick={() => setMenuOpen(false)}
            className="mt-8 px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            Close Menu
          </button>
        </div>
      </div>
    </>
  );
}