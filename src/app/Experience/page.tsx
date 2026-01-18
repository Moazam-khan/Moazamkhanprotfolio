'use client'

import React from "react";
import { FaBriefcase,  FaMapMarkerAlt, FaStar } from "react-icons/fa";

export default function Experiences() {
  const experiences = [
    
   {
  company: "Gems and Minerals Paradise",
  location: "Thailand",
  role: "Full-Stack Web Developer",
  type: "Freelance",
  description: "Developing (in progress) a full-featured multi-currency online marketplace at www.gemsandmineralsparadise.com for gems, minerals, crystals, and related products. Built with modern full-stack technologies, including vendor dashboards, inventory management system, comprehensive admin panel, integrated AI support powered by GPT-4, and secure payment gateways via Stripe and PayPal.",
  technologies: ["Next.js", "Tailwind CSS", "Supabase", "Resend", "Vercel", "Stripe", "PayPal", "GPT-4 (AI integration)","n8n"],
  highlights: ["Multi-Currency Support", "Vendor Dashboards", "Inventory Management", "Admin Panel", "AI GPT-4 Integration", "Stripe + PayPal Payments"]
},
    {
      company: "UJ Easy Life - Freelance Project",
      location: "Dubai, UAE",
      role: "Full-Stack Web Developer",
      type: "Freelance",
      description: "Created and deployed a full-stack web platform for UJ Easy Life (www.ujeasylife.com), a Dubai-based cleaning service provider offering general cleaning, AC cleaning, and painting services. Designed a responsive and user-friendly interface using Next.js and Tailwind CSS, implemented booking functionality, integrated MongoDB for efficient data management, and automated email notifications using Resend.",
      technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Resend", "Vercel"],
      highlights: ["Booking System", "Responsive Design", "Email Notifications"]
    },
    {
      company: "Selsla Technology",
      location: "Riyadh, Saudi Arabia (Remote)",
      role: "Junior Full Stack Developer",
    
      type: "Full-time",
      description: "Developed reusable UI components and a secure admin dashboard for legal service platforms. Implemented custom API endpoints, integrated Multer for file uploads, and managed both frontend and backend using Next.js, Express, MongoDB, MySQL, and Prisma. Contributed to two major projects: Lawyer Login Portal (rawdhat.com/login) and Legal Services Platform (alaqeel.hadnat.site).",
      technologies: ["Next.js", "Express", "MongoDB", "MySQL", "Prisma", "Multer"],
      highlights: ["Admin Dashboard", "API Development", "File Uploads"]
    },
    {
      company: "Selsla Technology",
      location: "Riyadh, Saudi Arabia (Remote)",
      role: "Next.js Intern",
 
      type: "Internship",
      description: "Worked on a lawyer's website using Next.js. Fixed UI bugs, optimized performance, and ensured responsive design using Git for collaboration.",
      technologies: ["Next.js", "Git", "Responsive Design"],
      highlights: ["Bug Fixing", "Performance Optimization", "Team Collaboration"]
    },
    {
      company: "Federal Board of Revenue (FBR)",
      location: "Abbottabad, Pakistan",
      role: "Frontend & Networking Intern",
   
      type: "Internship",
      description: "Built responsive UIs with HTML, CSS, JavaScript, and React. Gained experience in networking, version control, and team collaboration.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Networking"],
      highlights: ["Responsive UI", "Networking", "Version Control"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center mb-16 animate-fadeInDown">
        <h1 className="text-5xl md:text-7xl font-black mb-4">
          <span className="gradient-text">Work Experience</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          My professional journey and key achievements
        </p>
        <div className="mt-4 flex items-center justify-center space-x-2">
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          <FaStar className="text-red-500" />
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-orange-500 to-red-500 transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-br from-red-600 to-orange-500 rounded-full border-4 border-black transform -translate-x-1/2 animate-pulse-glow z-10" />

              <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                idx % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
              }`}>
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-500" />
                  
                  <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 shadow-xl transition-all duration-500 group-hover:border-red-500/50 group-hover:shadow-2xl group-hover:shadow-red-500/20 group-hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                        exp.type === 'Freelance' 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : exp.type === 'Full-time'
                          ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                          : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                      }`}>
                        {exp.type}
                      </span>
                      
                      <div className="flex items-center space-x-1 text-gray-400 text-sm">
                        {/* <FaCalendarAlt className="text-xs" />
                        <span>{exp.period}</span> */}
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300 mb-2">
                      {exp.role}
                    </h2>
                    <div className="flex items-center space-x-2 text-gray-400 mb-1">
                      <FaBriefcase className="text-sm" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500 mb-4">
                      <FaMapMarkerAlt className="text-xs" />
                      <span className="text-sm">{exp.location}</span>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {exp.highlights && exp.highlights.length > 0 && (
                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-red-400 mb-2">Key Highlights:</h3>
                        <div className="flex flex-wrap gap-2">
                          {exp.highlights.map((highlight, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 text-xs bg-red-500/10 text-red-400 rounded-full border border-red-500/20"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h3>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/10 backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-20 text-center animate-fadeInUp">
        <div className="glass-effect rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-3">Want to work together?</h3>
          <p className="text-gray-400 mb-6">I&apos;m always open to discussing new projects and opportunities</p>
          <a
            href="/Contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-full shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}
