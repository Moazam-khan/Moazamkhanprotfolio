'use client';

import React from "react";
import ExportedImage from "next-image-export-optimizer";

export default function Right() {
  return (
    <div className="relative w-full max-w-md mx-auto group">
      {/* Animated gradient border */}
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-500 animate-pulse" />
      
      {/* Card container */}
      <div className="relative w-full rounded-2xl p-1 bg-gradient-to-br from-red-500 via-orange-500 to-red-600 animate-gradient-shift">
        <div className="relative w-full rounded-2xl overflow-hidden bg-black p-2">
          {/* Glowing effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-800 z-10" />
          
          {/* Image */}
          <div className="relative w-full aspect-[15/17.9] overflow-hidden rounded-xl">
            <ExportedImage
              src="/assets/moazam.jpg"
              alt="Moazam Khan - Full Stack Developer"
              height={800}
              width={800}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            
            {/* Overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Text overlay on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-white font-bold text-xl">Moazam Khan</p>
              <p className="text-red-400 text-sm">Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute top-1/4 -left-8 w-16 h-16 bg-red-500/20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-1/4 -right-8 w-20 h-20 bg-orange-500/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
    </div>
  );
}