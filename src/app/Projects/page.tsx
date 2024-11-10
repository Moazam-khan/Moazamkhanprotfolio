'use client'

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export default function Projects() {

  const cardData = [
    {
      id: 1,
      title: "Neardear Chatroom",
      description: "",
      image: "/assets/hero/chat.png",
      link: "https://neardear-chatroom.netlify.app/",
       github: "https://github.com/Moazam-khan"
    },
    {
      id: 2,
      title: "Desert Safari",
      description: "",
      image: "/assets/hero/desert.png",
      link: "https://desert-safari0.netlify.app/",
       github: "https://github.com/Moazam-khan"
    },
    {
      id: 3,
      title: "TechHealth",
      description: "",
      image: "/assets/hero/techcare.png",
      link: "https://tech-care12.netlify.app/",
       github: "https://github.com/Moazam-khan"
    },
    {
      id: 4,
      title: "Tic Tac Toe",
      description: "",
      image: "/assets/hero/tectoe.png",
      link: "https://tic-tac-toe66.netlify.app/",
       github: "https://github.com/Moazam-khan"
    },
    {
      id: 5,
      title: "Currency Converter",
      description: "",
      image: "/assets/hero/curren.png",
      link: "https://curr-convt.netlify.app/",
       github: "https://github.com/Moazam-khan"
    },
    {
      id: 6,
      title: "Pladin",
      description: "",
      image: "/assets/hero/Pladin.png",
      link: "https://paladin0.netlify.app/",
       github: "https://github.com/Moazam-khan"
    },
    {
      id: 7,
      title: "Todo List with Context API", 
      description: "",
      image: "/assets/hero/TodoCapi.png",
      link: "https://todolist-contextapi.netlify.app/",
       github: "https://github.com/Moazam-khan"
    },
    {
      id: 8,
      title: "Todo List with Redux Toolkit",
      description: "",
      image: "/assets/hero/todoredux.png",
      link: "https://todolist-with-rtk.netlify.app/",
       github: "https://github.com/Moazam-khan"
    },
    {
      id: 9,
      title: "React Router DOM",
      description: "",
      image: "/assets/hero/Reactrouter.png",
      link: "https://rrd-react-router-dom.netlify.app",
      github: "https://github.com/Moazam-khan"
    },
  ];

  return (
    <div className="min-h-screen bg-black py-20 ">
      <h1 className="text-lg md:text-4xl text-center font-sans font-bold text-red-900">
        All Projects 
      </h1>
      <div className="grid grid-cols-1 flex items-start sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 ">
        {cardData.map(card => (
          <CardContainer key={card.id} className="inter-var flex flex-col  ">
            <CardBody className="bg-black-50 flex-grow group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border border-red-900 w-full h-full rounded-xl p-6 border  transition-transform duration-200 ease-in-out hover:scale-105">
              <CardItem translateZ={50} className="text-xl font-bold text-neutral-600 dark:text-white">
                {card.title}
              </CardItem>
              <CardItem as="p" translateZ={60} className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                {card.description}
              </CardItem>
              <CardItem translateZ={100} className="w-full mt-4">
                <Image
                  src={card.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={card.title}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-4">
                <a href={card.link} target="_blank" rel="noopener noreferrer">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-red-900 dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                 Visit Deployment
                  </CardItem>
                </a>
                <a href={card.github} target="_blank" rel="noopener noreferrer">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-red-900 dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Github
                  </CardItem>
                </a>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}