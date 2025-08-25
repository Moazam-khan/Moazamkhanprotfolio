'use client'

import React from "react";

export default function Experiences() {
  const experiences = [

      {
      company: " Federal Board of Revenue (FBR)  Paksitan Abbottabad ",
      role: "Frontend & Networking Intern (onsite)",
      period: " May 2024 – Sep 2024",
      description: " Built responsive UIs with HTML, CSS, JavaScript, and React. Gained experience in networking, version control, and team collaboration"
    },
    {
      company: "Selsla Technology Remote (Riyadh, Saudi Arabia)",
      role: "Next.js Intern (remote)",
      period: "Dec 2024",
      description: "Worked on a lawyer’s website using Next.js. Fixed UI bugs, optimized performance, and ensured responsive design using Git for collaboration"
    },
    {
      company: "Selsla Technology Remote (Riyadh, Saudi Arabia)",
      role: "Junior Full Stack Developer",
      period: "jan 2025 - march 2025",
      description: "Developed reusable components for a lawyer’s website and built a dashboard with custom API endpoints. Used Multer for file uploads and handled both frontend and backend of the dashboard using Next.js, Express, MongoDB, MySQL, and Sequelize."
    },
    {
  company: "Built a complete end-to-end application, handling both frontend and backend development and Deployment",
   role:  "Full-Stack Web Application (Freelancing Project)",
   description: "Implemented secure payment integration with PayPal for online transactions, integrated email services with Resend for automated notifications, developed the backend using Next.js API routes and MongoDB for high performance and scalability, and deployed the application on Cloudflare with a custom domain purchased from Hostinger."

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