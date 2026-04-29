'use client'

import React from "react";
import { FaBriefcase, FaMapMarkerAlt, FaStar } from "react-icons/fa";

type Experience = {
  company: string;
  location: string;
  role: string;
  type: 'Full-time' | 'Freelance' | 'Internship';
  period?: string;
  website?: string;
  description: string;
  technologies: string[];
  highlights?: string[];
};

const EXPERIENCES: Experience[] = [
    {
      company: "B-IT Solutions",
      location: "Riyadh, Saudi Arabia",
      role: "Full Stack Developer",
      type: "Full-time",
      // period: "February 2026 – Present",
      website: "www.b-it.co",
      description: "Developing scalable enterprise web applications using React.js, Next.js, and Node.js for clients in logistics and business operations. Implementing ZATCA-compliant e-invoicing integration in line with Saudi regulatory requirements, contributing to systems that handle live financial data. Integrating third-party REST APIs to automate workflows and improve data reliability across distributed services. Applying technical SEO and Core Web Vitals optimization, improving search visibility and measured page-performance metrics for enterprise clients.",
      technologies: ["React.js", "Next.js", "Node.js", "REST APIs", "ZATCA E-Invoicing", "Technical SEO", "Core Web Vitals"],
      highlights: ["Enterprise Web Apps", "ZATCA Compliance", "API Integrations", "SEO & Performance Optimization"]
    },
    {
      company: "Feegari",
      location: "Riyadh, Saudi Arabia",
      role: "Full Stack Developer",
      type: "Full-time",
      // period: "January 2026 – February 2026",
      website: "feelgari.com, feelgarisculpture.com",
      description: "Managed two production websites end-to-end, including domain configuration, hosting infrastructure, and system security. Maintained uptime monitoring and routine technical operations, ensuring continuity for customer-facing platforms. Administered Google Business Profile and supporting digital-presence assets for brand visibility.",
      technologies: ["Next.js", "Hosting & DNS", "System Security", "Uptime Monitoring", "Google Business Profile"],
      highlights: ["End-to-End Site Ownership", "Infrastructure & Security", "Uptime Monitoring", "Digital Presence"]
    },
    {
      company: "Freelance — Full Stack Developer",
      location: "Pakistan / ",
      role: "Full Stack Developer",
      type: "Freelance",
      // period: "June 2025 – Present",
      description: "Built and deployed responsive web applications for small businesses and individual clients using React and modern JavaScript frameworks. Designed and integrated REST APIs supporting dynamic content, authentication, and scalable client functionality. Managed hosting, domain configuration, and on-page SEO for production deployments. Delivered projects include: HAG (hag.ae), SAF Automation LLC (safautmationllc.com), Gems and Minerals Paradise — in progress (gemsandmineralsparadise.com), Own It Digital (ownitdigital.co.uk), Whippy Brother (whippybrother.vercel.app), UJ Easy Life (ujeasylife.com), and the Moazam Khan Portfolio.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "REST APIs", "Vercel", "On-Page SEO"],
      highlights: ["Responsive Web Apps", "REST API Integrations", "Hosting & Domain Setup", "On-Page SEO"]
    },
    {
      company: "Gems and Minerals Paradise",
      location: "Thailand ",
      role: "Full-Stack Web Developer",
      type: "Freelance",
      // period: "2025 – Present (In Progress)",
      website: "gemsandmineralsparadise.com",
      description: "Developing (in progress) a full-featured multi-currency online marketplace at gemsandmineralsparadise.com for gems, minerals, crystals, and related products. Built with modern full-stack technologies, including vendor dashboards, inventory management, a comprehensive admin panel, integrated AI support powered by GPT-4, and secure payment gateways via Stripe and PayPal.",
      technologies: ["Next.js", "Tailwind CSS", "Supabase", "Resend", "Vercel", "Stripe", "PayPal", "GPT-4 (AI integration)", "n8n"],
      highlights: ["Multi-Currency Support", "Vendor Dashboards", "Inventory Management", "Admin Panel", "AI GPT-4 Integration", "Stripe + PayPal Payments"]
    },
    {
      company: "HAG",
      location: "UAE ",
      role: "Full-Stack Web Developer",
      type: "Freelance",
      website: "hag.ae",
      description: "Designed and delivered a responsive corporate website at hag.ae, focused on clean UI, fast load times, and SEO-friendly structure to support the client's brand presence and lead generation.",
      technologies: ["Next.js", "Tailwind CSS", "Vercel", "On-Page SEO"],
      highlights: ["Responsive Design", "Performance Optimized", "SEO Friendly"]
    },
    {
      company: "SAF Automation LLC",
      location: "",
      role: "Full-Stack Web Developer",
      type: "Freelance",
      website: "safautmationllc.com",
      description: "Built a business website for SAF Automation LLC (safautmationllc.com) showcasing automation services, with structured content sections, contact integration, and deployment on a managed hosting setup.",
      technologies: ["Next.js", "Tailwind CSS", "REST APIs", "Vercel"],
      highlights: ["Service Showcase", "Contact Integration", "Production Deployment"]
    },
    {
      company: "Own It Digital",
      location: "United Kingdom ",
      role: "Full-Stack Web Developer",
      type: "Freelance",
      website: "ownitdigital.co.uk",
      description: "Delivered a marketing-focused web platform for Own It Digital (ownitdigital.co.uk), with responsive layouts, optimized Core Web Vitals, and on-page SEO to support the agency's client acquisition.",
      technologies: ["Next.js", "Tailwind CSS", "Vercel", "On-Page SEO", "Core Web Vitals"],
      highlights: ["Marketing Site", "Core Web Vitals", "On-Page SEO"]
    },
    {
      company: "Whippy Brother",
      location: "",
      role: "Full-Stack Web Developer",
      type: "Freelance",
      website: "whippybrother.vercel.app",
      description: "Designed and deployed a modern product/brand website at whippybrother.vercel.app with responsive design, smooth animations, and a fast Vercel deployment.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      highlights: ["Brand Website", "Smooth Animations", "Vercel Deployment"]
    },
    {
      company: "UJ Easy Life",
      location: "Dubai, UAE ",
      role: "Full-Stack Web Developer",
      type: "Freelance",
      website: "ujeasylife.com",
      description: "Created and deployed a full-stack web platform for UJ Easy Life (ujeasylife.com), a Dubai-based cleaning service provider offering general cleaning, AC cleaning, and painting services. Designed a responsive and user-friendly interface using Next.js and Tailwind CSS, implemented booking functionality, integrated MongoDB for efficient data management, and automated email notifications using Resend.",
      technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Resend", "Vercel"],
      highlights: ["Booking System", "Responsive Design", "Email Notifications"]
    },
    {
      company: "Selsla Technology",
      location: "Riyadh, Saudi Arabia",
      role: "Full Stack Developer",
      type: "Full-time",
      // period: "December 2024 – May 2025",
      website: "www.selsla.net",
      description: "Developed and maintained a school portal serving administrators, teachers, and parents; integrated third-party APIs and contributed to UI/UX improvements that increased platform usability. Also built reusable UI components and a secure admin dashboard for legal service platforms (Lawyer Login Portal at rawdhat.com/login and Legal Services Platform at alaqeel.hadnat.site), implementing custom API endpoints and Multer-based file uploads. Collaborated within a small engineering team to deliver features under tight schedules.",
      technologies: ["Next.js", "Express", "MongoDB", "MySQL", "Prisma", "Multer", "REST APIs"],
      highlights: ["School Portal", "Admin Dashboard", "API Development", "File Uploads", "UI/UX Improvements"]
    },
    {
      company: "Federal Board of Revenue (FBR), Regional Tax Office",
      location: "Abbottabad, Pakistan",
      role: "Engineering Intern — Networking & Frontend Development",
      type: "Internship",
      // period: "May 2024 – September 2024",
      description: "Supported networking infrastructure operations and contributed to internal frontend development at a federal government office. Built responsive UIs with HTML, CSS, JavaScript, and React, and gained hands-on experience with networking, version control, and team collaboration. Recognized in a formal certificate for punctuality, professionalism, and consistent technical contribution.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Networking", "Git"],
      highlights: ["Responsive UI", "Networking Operations", "Version Control", "Formal Recognition"]
    }
  ];

export default function Experiences() {
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
          {EXPERIENCES.map((exp, idx) => (
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
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                        exp.type === 'Freelance'
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : exp.type === 'Full-time'
                          ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                          : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                      }`}>
                        {exp.type}
                      </span>

                      {/* {exp.period && (
                        <div className="flex items-center space-x-1 text-gray-400 text-sm">
                          <FaCalendarAlt className="text-xs" />
                          <span>{exp.period}</span>
                        </div>
                      )} */}
                    </div>

                    <h2 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300 mb-2">
                      {exp.role}
                    </h2>
                    <div className="flex items-center space-x-2 text-gray-400 mb-1">
                      <FaBriefcase className="text-sm" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500 mb-1">
                      <FaMapMarkerAlt className="text-xs" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                    {exp.website && (
                      <div className="text-sm text-red-400/80 mb-4 break-all">
                        {exp.website}
                      </div>
                    )}
                    {!exp.website && <div className="mb-4" />}

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
