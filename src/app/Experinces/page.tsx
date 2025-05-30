'use client'

import React from "react";

export default function Experiences() {
  const experiences = [
    {
      company: "ABC Tech Solutions",
      role: "Frontend Developer",
      period: "Jan 2023 - Present",
      description: "Developed and maintained responsive web applications using React, Next.js, and Tailwind CSS. Collaborated with designers and backend developers to deliver seamless user experiences."
    },
    {
      company: "XYZ Innovations",
      role: "Web Developer Intern",
      period: "Jun 2022 - Dec 2022",
      description: "Assisted in building and optimizing landing pages. Gained hands-on experience with JavaScript, HTML, CSS, and version control using Git."
    },
    {
      company: "Freelance",
      role: "Full Stack Developer",
      period: "2021 - 2022",
      description: "Worked with various clients to deliver custom web solutions, including e-commerce sites and dashboards, using MERN stack technologies."
    }
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <h1 className="text-3xl md:text-5xl text-center font-bold text-red-900 mb-12">
        Experience
      </h1>
      <div className="max-w-3xl mx-auto space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-gradient-to-br from-black via-gray-900 to-red-900 rounded-xl shadow-lg p-8 border border-white/10">
            <h2 className="text-xl font-semibold text-white">{exp.role}</h2>
            <div className="flex justify-between items-center text-neutral-400 text-sm mb-2">
              <span>{exp.company}</span>
              <span>{exp.period}</span>
            </div>
            <p className="text-neutral-200">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}