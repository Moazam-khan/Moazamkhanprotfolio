// src/components/EducationAndSkills.tsx
'use client';

import React, { useState } from 'react';
import {
  FaJsSquare,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaNpm,
  FaNodeJs,

  FaCodeBranch,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiYarn,
  SiAntdesign,
  SiTypescript,
  SiRedux,

  SiExpress,
  SiPrisma,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiVisualstudiocode,
  SiAuth0,
} from 'react-icons/si';
import ExportedImage from 'next-image-export-optimizer';

const EducationAndSkills: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'education' | 'skills' | 'achievements'>('education');

  const educationData = [
    { institution: "APSACS RISALPUR CANTT", degree: "Matriculation  | 81%" },
    { institution: "TWPSAC ABBOTTBAD", degree: "Pre-Engineering | 78%" },
    { institution: "UET PESHAWAR", degree: "Bachelor of Science in Computer Systems Engineering  | CGPA=2.73" },
  ];

const skillsData = [
  // Frontend Technologies
  { icon: <FaHtml5 title="HTML5" /> },
  { icon: <FaCss3Alt title="CSS3" /> },
  { icon: <FaJsSquare title="JavaScript" /> },
  { icon: <SiTypescript title="TypeScript" /> },
  { icon: <FaReact title="React" /> },
  { icon: <SiNextdotjs title="Next.js" /> },
  { icon: <SiTailwindcss title="Tailwind CSS" /> },
  { icon: <SiAntdesign title="Ant Design" /> },
  { icon: <SiRedux title="Redux Toolkit" /> },
  { icon: <FaCodeBranch title="Context API" /> },

  // Backend & Databases
  { icon: <FaNodeJs title="Node.js" /> },
  { icon: <SiExpress title="Express.js" /> },
  { icon: <SiPrisma title="Prisma ORM" /> },
  { icon: <SiMysql title="MySQL" /> },
  { icon: <SiPostgresql title="PostgreSQL" /> },
  { icon: <SiMongodb title="MongoDB" /> },

  // Authentication
  { icon: <SiAuth0 title="Authentication" /> },

  // Tools & Platforms
  { icon: <FaGit title="Git" /> },
  { icon: <FaGithub title="GitHub" /> },
  { icon: <FaNpm title="NPM" /> },
  { icon: <SiYarn title="Yarn" /> },
  { icon: <SiVisualstudiocode title="VS Code" /> },
];

  const achievementsData = [
    { title: "Executive Member & Ambassador", description: " LET’S HELPWELFARE SOCIETY, UET Peshawar" },
    { title: "Assistant to Director, Prime Minister’s Laptop", description: "Scheme Phase-II, Pakistan (2023)" },
    { title: "Appreciation Certificate Recipient", description: "Prime Minister's Office of Pakistan – Green Youth Movement Club" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center mb-30 p-4 bg-black  text-white">
      <div className="container mx-auto mt-4 ">
        <h1 className="text-lg md:text-4xl text-center font-sans font-bold text-red-900">
          Education Background
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start mt-4">
          {/* Left Side - Picture */}
          <div className="md:w-1/3 lg:h-full mb-10 md:mb-0 flex flex-col justify-between relative">
            <ExportedImage
              src="/assets/uet.jpg"
              alt="Your Name"
              width={500}
              height={500}
              className="w-full h-auto lg:h-full shadow-md rounded-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          {/* Right Side - Description and Links */}
          <div className="md:w-2/3 md:pl-8">
            <p className="mb-2 text-sm">
              Recent graduate in Computer Systems Engineering with a strong focus on front-end web
              development. Proficient in HTML, CSS, JavaScript, and React.js with experience creating
              responsive, visually appealing applications. Demonstrated ability to leverage front-end
              technologies and Git for collaborative projects, with an eye for detail in design. Eager to apply
              technical and creative skills in a front-end development role to contribute to dynamic and user-friendly web solutions.
            </p>
            <div className="flex space-x-4 mb-4">
              <button
                onClick={() => setActiveSection('education')}
                className={`px-4 py-2 rounded ${activeSection === 'education' ? 'bg-red-500 text-white' : 'bg-gray-700 text-black bold'} transform transition-transform duration-300 hover:scale-110`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveSection('skills')}
                className={`px-4 py-2 rounded ${activeSection === 'skills' ? 'bg-red-500 text-white' : 'bg-gray-700 text-black bold'} transform transition-transform duration-300 hover:scale-110 `}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveSection('achievements')}
                className={`px-4 py-2 rounded ${activeSection === 'achievements' ? 'bg-red-500 text-white' : 'bg-gray-700 text-black bold'} transform transition-transform duration-300 hover:scale-110`}
              >
                Achievements
              </button>
            </div>

            {/* Conditional Rendering Based on Active Section */}
            <div className="p-6 bg-gray-800 shadow-md rounded-lg transform transition-transform duration-500 hover:scale-105" style={{ minHeight: '300px' }}>
              {activeSection === 'education' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4  text-red-500">Education</h2>
                  <ul>
                    {educationData.map((edu, index) => (
                      <li key={index} className="mb-4">
                        <h3 className="text-xl font-semibold  text-black">{edu.institution}</h3>
                        <p className=" text-gray-400">{edu.degree}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeSection === 'skills' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-red-500 ">Skills</h2>
                  <ul className="flex flex-wrap space-x-6">
                    {skillsData.map((skill, index) => (
                      <li key={index} className="flex items-center text-gray-400 text-5xl transform transition-transform duration-500 hover:scale-125 text-black">
                        {skill.icon}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeSection === 'achievements' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-red-500">Achievements</h2>
                  <ul>
                    {achievementsData.map((achievement, index) => (
                      <li key={index} className="mb-4">
                        <h3 className="text-xl font-semibold text-black">{achievement.title}</h3>
                        <p className="text-gray-400">{achievement.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAndSkills;