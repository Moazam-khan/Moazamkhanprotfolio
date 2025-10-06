'use client'
import React, { useState } from "react";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { FaExternalLinkAlt, FaGithub, FaStar } from "react-icons/fa";

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const cardData = [
    {
      id: 1,
      title: "Hag Safari",
      description: "Full-stack booking platform with PayPal integration and automated email notifications",
      image: "/assets/hag.png",
      link: "https://www.hag.ae/",
      github: "https://github.com/Moazam-khan",
      tags: ["Next.js", "MongoDB", "PayPal"],
      featured: true
    },
    {
      id: 2,
      title: "UJEasyLife",
      description: "Service booking platform for cleaning solutions in Dubai",
      image: "/assets/uj.png",
      link: "https://www.ujeasylife.com",
      github: "https://github.com/Moazam-khan",
      tags: ["Next.js", "Tailwind", "MongoDB"],
      featured: true
    },
    {
      id: 3,
      title: "Alaqeel",
      description: "Legal services platform with secure admin dashboard",
      image: "/assets/alaqeel.png",
      link: "https://alaqeel.hadnat.site",
      github: "https://github.com/Moazam-khan",
      tags: ["Next.js", "Express", "MySQL"],
      featured: true
    },
    {
      id: 4,
      title: "Rawdhat",
      description: "Lawyer login portal with authentication system",
      image: "/assets/rahwat.png",
      link: "https://rawdhat.com/login",
      github: "https://github.com/Moazam-khan",
      tags: ["React", "Auth", "API"]
    },
    {
      id: 5,
      title: "Desert Safari Ride",
      description: "Modern travel booking website with stunning UI",
      image: "/assets/desertsafari.png",
      link: "https://desert-safari-ride.vercel.app",
      github: "https://github.com/Moazam-khan",
      tags: ["Next.js", "Vercel"]
    },
    {
      id: 6,
      title: "OTP Authentication",
      description: "Secure email-based OTP verification system",
      image: "/assets/otp.png",
      link: "https://nextauthapp-six.vercel.app",
      github: "https://github.com/Moazam-khan",
      tags: ["Next.js", "Auth", "Email"]
    },
    {
      id: 7,
      title: "Neardear Chatroom",
      description: "Real-time chat application",
      image: "/assets/chat.png",
      link: "https://neardear-chatroom.netlify.app/",
      github: "https://github.com/Moazam-khan",
      tags: ["React", "WebSocket"]
    },
    {
      id: 8,
      title: "Desert Safari",
      description: "Interactive safari tour website",
      image: "/assets/desert.png",
      link: "https://desert-safari0.netlify.app/",
      github: "https://github.com/Moazam-khan",
      tags: ["React", "CSS3"]
    },
    {
      id: 9,
      title: "TechHealth",
      description: "Healthcare management dashboard",
      image: "/assets/techcare.png",
      link: "https://tech-care12.netlify.app/",
      github: "https://github.com/Moazam-khan",
      tags: ["React", "Dashboard"]
    },
    {
      id: 10,
      title: "Tic Tac Toe",
      description: "Classic game with modern UI",
      image: "/assets/Tectoe.png",
      link: "https://tic-tac-toe66.netlify.app/",
      github: "https://github.com/Moazam-khan",
      tags: ["JavaScript", "Game"]
    },
    {
      id: 11,
      title: "Currency Converter",
      description: "Real-time currency exchange rates",
      image: "/assets/curren.png",
      link: "https://curr-convt.netlify.app/",
      github: "https://github.com/Moazam-khan",
      tags: ["React", "API"]
    },
    {
      id: 12,
      title: "Pladin",
      description: "Modern web application",
      image: "/assets/Pladin.png",
      link: "https://paladin0.netlify.app/",
      github: "https://github.com/Moazam-khan",
      tags: ["React", "UI"]
    },
    {
      id: 13,
      title: "Todo with Context API",
      description: "Task management using Context API",
      image: "/assets/TodoCapi.png",
      link: "https://todolist-contextapi.netlify.app/",
      github: "https://github.com/Moazam-khan",
      tags: ["React", "Context API"]
    },
    {
      id: 14,
      title: "Todo with Redux",
      description: "State management with Redux Toolkit",
      image: "/assets/todoredux.png",
      link: "https://todolist-with-rtk.netlify.app/",
      github: "https://github.com/Moazam-khan",
      tags: ["React", "Redux"]
    },
    {
      id: 15,
      title: "React Router Demo",
      description: "Routing examples and navigation",
      image: "/assets/Reactrouter.png",
      link: "https://rrd-react-router-dom.netlify.app",
      github: "https://github.com/Moazam-khan",
      tags: ["React", "Router"]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-24 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16 animate-fadeInDown">
        <h1 className="text-5xl md:text-7xl font-black mb-4">
          <span className="gradient-text">My Projects</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          A showcase of my recent work and side projects
        </p>
        <div className="mt-4 flex items-center justify-center space-x-2">
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          <FaStar className="text-red-500" />
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className="group relative animate-fadeInUp"
            style={{ animationDelay: `${index * 0.1}s` }}
            onMouseEnter={() => setHoveredId(card.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Card glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-500" />
            
            {/* Card */}
            <div className="relative flex flex-col h-full bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 group-hover:border-red-500/50 group-hover:shadow-2xl group-hover:shadow-red-500/20 group-hover:-translate-y-2">
              
              {/* Featured badge */}
              {card.featured && (
                <div className="absolute top-4 right-4 z-20 flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-1 rounded-full text-xs font-bold text-black shadow-lg">
                  <FaStar className="text-xs" />
                  <span>Featured</span>
                </div>
              )}

              {/* Image Container */}
              <div className="relative w-full h-52 overflow-hidden bg-black/50">
                <ExportedImage
                  src={card.image}
                  alt={`${card.title} project screenshot`}
                  height={1000}
                  width={1000}
                  className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  priority={card.featured}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Quick action buttons on hover */}
                <div className={`absolute inset-0 flex items-center justify-center space-x-3 transition-all duration-500 ${
                  hoveredId === card.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Link
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
                    aria-label={`View ${card.title}`}
                  >
                    <FaExternalLinkAlt />
                  </Link>
                  <Link
                    href={card.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white hover:bg-gray-200 text-black rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
                    aria-label={`GitHub repository for ${card.title}`}
                  >
                    <FaGithub />
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-5 space-y-3">
                <h2 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300 line-clamp-1">
                  {card.title}
                </h2>
                
                {card.description && (
                  <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">
                    {card.description}
                  </p>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {card.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/10 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom action bar */}
              <div className="flex border-t border-white/10 bg-black/30 backdrop-blur-sm">
                <Link
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 text-center text-sm font-semibold text-gray-300 hover:text-white hover:bg-red-500/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  <span>Live Demo</span>
                </Link>
                <Link
                  href={card.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 text-center text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/5 border-l border-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <FaGithub className="text-xs" />
                  <span>Code</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Section */}
      <div className="max-w-7xl mx-auto mt-16 text-center animate-fadeInUp">
        <Link
          href="https://github.com/Moazam-khan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/50 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
        >
          <FaGithub className="text-xl" />
          <span>View More on GitHub</span>
          <FaExternalLinkAlt className="text-sm" />
        </Link>
      </div>
    </div>
  );
}