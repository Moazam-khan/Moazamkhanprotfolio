'use client';

import React from "react";
import ExportedImage from "next-image-export-optimizer";

export default function Right() {
  return (
    <div className="w-auto sm:w-[25rem] rounded-xl p-6 border border-white/[0.1] dark:border-white/[0.2] bg-black dark:bg-black relative group shadow transition-shadow duration-300 hover:shadow-2xl hover:shadow-emerald-500/10">
      <div className="w-full mt-2 bg-black">
        <ExportedImage
          src="/assets/moazam.jpg"
          alt="Moazam Khan portrait"
          height={1000}
          width={1000}
          className="h-60 w-full object-cover rounded-xl group-hover:shadow-xl transition-shadow"
        />
      </div>
    </div>
  );
}