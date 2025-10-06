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
      company: "Selsla Technology — Remote (Riyadh, Saudi Arabia)",
      role: "Junior Full Stack Developer",
      period: "Jan 2025 - Mar 2025",
      description: "Developed reusable UI components and a secure admin dashboard for legal service platforms. Implemented custom API endpoints, integrated Multer for file uploads, and managed both frontend and backend using Next.js, Express, MongoDB, MySQL, and Prisma. Contributed to two major projects: Lawyer Login Portal (rawdhat.com/login) and Legal Services Platform (alaqeel.hadnat.site)."
    }

    ,
    {
      company: "Built a complete end-to-end application, handling both frontend and backend development and deployment for www.hag.ae",
      role: "Full-Stack Web Application (Freelancing Project)",
      period: "Jul 2025",
      description: "Developed and deployed a high-performance full-stack web application for HAG (www.hag.ae). Implemented secure PayPal payment integration for online transactions, automated email notifications using Resend, and designed a scalable backend with Next.js API routes and MongoDB. Deployed on Cloudflare with a custom domain purchased from Hostinger."
    },
    { company: "Developed a service-based web platform for www.ujeasylife.com offering professional cleaning solutions in Dubai", role: "Full-Stack Web Application (Freelancing Project)", period: "Aug 2025", description: "Created and deployed a full-stack web platform for UJ Easy Life (www.ujeasylife.com), a Dubai-based cleaning service provider offering general cleaning, AC cleaning, and painting services. Designed a responsive and user-friendly interface using Next.js and Tailwind CSS, implemented booking functionality, integrated MongoDB for efficient data management, and automated email notifications using Resend. The domain was purchased from Cloudflare and the project was deployed on Vercel for optimal performance and scalability." }
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