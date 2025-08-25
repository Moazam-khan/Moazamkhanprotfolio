'use client'
import React from "react";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";

export default function Projects() {
  const cardData = [
     {
      id: 1,
      title: "Hag Safari",
      description: "",
      image: "/assets/hag.png",
      link: "https://www.hag.ae/",
      github: "https://github.com/Moazam-khan"
    },
     {
      id: 2,
      title: "Alaqeel",
      description: "",
      image: "/assets/alaqeel.png",
      link: "https://alaqeel.hadnat.site",
      github: "https://github.com/Moazam-khan"
    },
    {
      id: 3,
      title: "Rawdhat",
      description: "",
      image: "/assets/rahwat.png",
      link: "https://rawdhat.com/login",
      github: "https://github.com/Moazam-khan"
    },
     {
      id: 4,
      title: "Desert Safari Ride",
      description: "",
      image: "/assets/desertsafari.png",
      link: "https://desert-safari-ride.vercel.app",
      github: "https://github.com/Moazam-khan"
    },
       {
      id: 5,
      title: "OTP with Email",
      description: "",
      image: "/assets/otp.png",
      link: "https://nextauthapp-six.vercel.app",
      github: "https://github.com/Moazam-khan"
    },
    {
      id: 6,
      title: "Neardear Chatroom",
      description: "",
      image: "/assets/chat.png",
      link: "https://neardear-chatroom.netlify.app/",
      github: "https://github.com/Moazam-khan"
    },
    {
      id: 7,
      title: "Desert Safari",
      description: "",
      image: "/assets/desert.png",
      link: "https://desert-safari0.netlify.app/",
      github: "https://github.com/Moazam-khan"
    },
    {
      id: 8,
      title: "TechHealth",
      description: "",
      image: "/assets/techcare.png",
      link: "https://tech-care12.netlify.app/",
      github: "https://github.com/Moazam-khan"
    },
    {
      id: 9,
      title: "Tic Tac Toe",
      description: "",
      image: "/assets/Tectoe.png",
      link: "https://tic-tac-toe66.netlify.app/",
      github: "https://github.com/Moazam-khan"

    },
    {
      id: 10,
      title: "Currency Converter",
      description: "",
      image: "/assets/curren.png",
      link: "https://curr-convt.netlify.app/",
      github: "https://github.com/Moazam-khan"
    },
    {
      id: 11,
      title: "Pladin",
      description: "",
      image: "/assets/Pladin.png",
      link: "https://paladin0.netlify.app/",
      github: "https://github.com/Moazam-khan"
    },
    {
      id: 12,
      title: "Todo List with Context API",
      description: "",
      image: "/assets/TodoCapi.png",
      link: "https://todolist-contextapi.netlify.app/",
      github: "https://github.com/Moazam-khan"
    },
    {
      id: 13,
      title: "Todo List with Redux Toolkit",
      description: "",
      image: "/assets/todoredux.png",
      link: "https://todolist-with-rtk.netlify.app/",
      github: "https://github.com/Moazam-khan"
    },
    {
      id: 14,
      title: "React Router DOM",
      description: "",
      image: "/assets/Reactrouter.png",
      link: "https://rrd-react-router-dom.netlify.app",
      github: "https://github.com/Moazam-khan"
    },
    
  ];

  return (
    <div className="min-h-screen bg-black py-20">
      <h1 className="text-lg md:text-4xl text-center font-sans font-bold text-red-900 mb-8">
        All Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-8">
        {cardData.map(card => (
          <div
            key={card.id}
            className="flex flex-col bg-gradient-to-br from-black via-gray-900 to-red-900 shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-full h-60">
              <ExportedImage
                src={card.image}
                alt={`Screenshot of ${card.title} project`}
                height={1000}
                width={1000}
                className="absolute inset-0 w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            <div className="flex flex-col flex-grow p-6">
              <h2 className="text-2xl font-extrabold text-white mb-2 drop-shadow">
                {card.title}
              </h2>
              {card.description && (
                <p className="text-neutral-300 text-base mb-4">
                  {card.description}
                </p>
              )}
              <div className="flex justify-between items-center mt-auto gap-2">
                <Link
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-red-700 hover:bg-red-800 text-white font-semibold shadow transition"
                >
                Preview
                </Link>
                <Link
                  href={card.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-white hover:bg-gray-200 text-red-900 font-semibold shadow transition"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}