'use client';

import React, { useState, useEffect } from "react";
import { FaHome, FaProjectDiagram, FaGraduationCap, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavbar from "./MobileNavbar";
import { FaBriefcase } from "react-icons/fa6";

const NAV_ITEMS = [
  { href: "/", icon: FaHome, label: "Home" },
  { href: "/Projects", icon: FaProjectDiagram, label: "Projects" },
  { href: "/Experience", icon: FaBriefcase, label: "Experience" },
  { href: "/Education", icon: FaGraduationCap, label: "Education" },
  { href: "/Contact", icon: FaEnvelope, label: "Contact" },
];

export default function Navbar() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    let scrollFrame = 0;

    const handleResize = (event?: MediaQueryListEvent) => {
      setIsMobile(event ? event.matches : mediaQuery.matches);
    };

    const handleScroll = () => {
      if (scrollFrame) {
        return;
      }

      scrollFrame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        scrollFrame = 0;
      });
    };

    handleResize();
    handleScroll();

    mediaQuery.addEventListener("change", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (scrollFrame) {
        window.cancelAnimationFrame(scrollFrame);
      }
    };
  }, []);

  return (
    <div className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-md shadow-lg shadow-red-500/10' 
        : 'bg-transparent'
    }`}>
      {isMobile ? (
        <MobileNavbar />
      ) : (
        <nav className="hidden md:flex items-center justify-center px-8 py-5">
          <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-lg border border-white/10 rounded-full px-8 py-3 shadow-xl">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative flex items-center space-x-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/50'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`text-lg transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-gray-400 group-hover:text-red-500'
                  }`} />
                  <span className="font-medium tracking-wide">{item.label}</span>
                  
                  {/* Hover effect */}
                  {!isActive && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600/0 via-red-500/0 to-red-600/0 group-hover:from-red-600/10 group-hover:via-red-500/10 group-hover:to-red-600/10 transition-all duration-300" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
}
