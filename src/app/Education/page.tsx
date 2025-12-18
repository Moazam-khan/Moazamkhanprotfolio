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
  FaGraduationCap,
  FaAward,
  FaCertificate,
  FaStar,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiYarn,
  SiAntdesign,
  SiTypescript,
  SiRedux,
  SiVercel,
  SiCloudflare,
  SiResend,
  SiPaypal,
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
  const [activeSection, setActiveSection] = useState<'education' | 'skills' | 'achievements' | 'certification'>('education');

  const educationData = [
    { 
      institution: "UET PESHAWAR", 
      degree: "Bachelor of Science in Computer Systems Engineering", 
      // grade: "CGPA: 2.73",
      // year: "2020 - 2024"
    },
    { 
      institution: "TWPSAC ABBOTTABAD", 
      degree: "Pre-Engineering", 
      // grade: "78%",
      // year: "2018 - 2020"
    },
    { 
      institution: "APSACS RISALPUR CANTT", 
      degree: "Matriculation", 
      // grade: "81%",
      // year: "2016 - 2018"
    },
  ];

  const skillsData = [
    // Frontend Technologies
    { icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
    { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
    { icon: FaJsSquare, name: "JavaScript", color: "text-yellow-500" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
    { icon: FaReact, name: "React", color: "text-cyan-500" },
    { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400" },
    { icon: SiAntdesign, name: "Ant Design", color: "text-red-500" },
    { icon: SiRedux, name: "Redux", color: "text-purple-500" },
    { icon: FaCodeBranch, name: "Context API", color: "text-green-500" },
    
    // Backend & Databases
    { icon: FaNodeJs, name: "Node.js", color: "text-green-600" },
    { icon: SiExpress, name: "Express.js", color: "text-gray-400" },
    { icon: SiPrisma, name: "Prisma", color: "text-teal-500" },
    { icon: SiMysql, name: "MySQL", color: "text-blue-600" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-700" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    
    // Authentication & Tools
    { icon: SiAuth0, name: "Auth", color: "text-orange-600" },
    { icon: FaGit, name: "Git", color: "text-red-600" },
    { icon: FaGithub, name: "GitHub", color: "text-white" },
    { icon: FaNpm, name: "NPM", color: "text-red-500" },
    { icon: SiYarn, name: "Yarn", color: "text-blue-600" },
    { icon: SiVisualstudiocode, name: "VS Code", color: "text-blue-500" },
    { icon: SiVercel, name: "Vercel", color: "text-white" },
    { icon: SiCloudflare, name: "Cloudflare", color: "text-orange-500" },
    { icon: SiResend, name: "Resend", color: "text-purple-500" },
    { icon: SiPaypal, name: "PayPal", color: "text-blue-600" }
  ];

  const achievementsData = [
    { 
      title: "Executive Member & Ambassador", 
      description: "LET'S HELP WELFARE SOCIETY, UET Peshawar",
      icon: FaAward
    },
    { 
      title: "Assistant to Director", 
      description: "Prime Minister's Laptop Scheme Phase-II, Pakistan (2023)",
      icon: FaAward
    },
    { 
      title: "Appreciation Certificate Recipient", 
      description: "Prime Minister's Office of Pakistan – Green Youth Movement Club",
      icon: FaAward
    },
  ];

  const certificationData = [
    { 
      title: "Responsive Web Design Certification", 
      description: "FreeCodeCamp: HTML, CSS, Flexbox, and Grid",
      icon: FaCertificate
    },
    { 
      title: "Back End Development and APIs Certification", 
      description: "FreeCodeCamp: Node.js, Express, MongoDB, and APIs",
      icon: FaCertificate
    },
    { 
      title: "CCNA Certification", 
      description: "Cisco Certified Network Associate",
      icon: FaCertificate
    }
  ];

  const sections = [
    { id: 'education', label: 'Education', icon: FaGraduationCap },
    { id: 'skills', label: 'Skills', icon: FaCodeBranch },
    { id: 'achievements', label: 'Achievements', icon: FaAward },
    { id: 'certification', label: 'Certifications', icon: FaCertificate },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-24 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16 animate-fadeInDown">
        <h1 className="text-5xl md:text-7xl font-black mb-4">
          <span className="gradient-text">Education & Skills</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          My academic background, technical expertise, and professional achievements
        </p>
        <div className="mt-4 flex items-center justify-center space-x-2">
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          <FaStar className="text-red-500" />
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Side - Image and Bio */}
          <div className="lg:col-span-1 space-y-6 animate-fadeInUp">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
              <div className="relative">
                <ExportedImage
                  src="/assets/uet.jpg"
                  alt="University Campus"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Bio Card */}
            <div className="glass-effect rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">About Me</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Recent graduate in Computer Systems Engineering with a strong focus on full-stack web development. 
                Proficient in modern JavaScript frameworks and backend technologies with experience creating 
                scalable, production-ready applications. Passionate about clean code, user experience, and 
                continuous learning.
              </p>
            </div>
          </div>

          {/* Right Side - Tabs Content */}
          <div className="lg:col-span-2 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id as 'education' | 'skills' | 'achievements' | 'certification')}
                    className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/50 scale-105'
                        : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    <Icon className="text-lg" />
                    <span>{section.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Content Area */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-500" />
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 min-h-[500px] shadow-xl">
                
                {/* Education Section */}
                {activeSection === 'education' && (
                  <div className="space-y-6 animate-fadeInUp">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center space-x-3">
                      <FaGraduationCap className="text-red-500" />
                      <span>Education</span>
                    </h2>
                    <div className="space-y-4">
                      {educationData.map((edu, index) => (
                        <div
                          key={index}
                          className="group relative"
                        >
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/50 to-orange-500/50 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
                          <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 group-hover:border-red-500/50 transition-all duration-300">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                                {edu.institution}
                              </h3>
                              {/* <span className="px-3 py-1 text-xs bg-red-500/20 text-red-400 rounded-full border border-red-500/30">
                                {edu.year}
                              </span> */}
                            </div>
                            <p className="text-gray-300 font-medium mb-1">{edu.degree}</p>
                            {/* <p className="text-gray-500">{edu.grade}</p> */}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills Section */}
                {activeSection === 'skills' && (
                  <div className="animate-fadeInUp">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center space-x-3">
                      <FaCodeBranch className="text-red-500" />
                      <span>Technical Skills</span>
                    </h2>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
                      {skillsData.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                          <div
                            key={index}
                            className="group flex flex-col items-center space-y-2"
                          >
                            <div className="relative">
                              <div className={`absolute -inset-2 ${skill.color} opacity-0 group-hover:opacity-50 blur-xl transition duration-300`} />
                              <Icon className={`relative text-5xl ${skill.color} transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12`} />
                            </div>
                            <span className="text-xs text-gray-400 group-hover:text-white transition-colors text-center">
                              {skill.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Achievements Section */}
                {activeSection === 'achievements' && (
                  <div className="space-y-6 animate-fadeInUp">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center space-x-3">
                      <FaAward className="text-red-500" />
                      <span>Achievements</span>
                    </h2>
                    <div className="space-y-4">
                      {achievementsData.map((achievement, index) => {
                        const Icon = achievement.icon;
                        return (
                          <div
                            key={index}
                            className="group relative"
                          >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600/50 to-orange-500/50 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
                            <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 group-hover:border-yellow-500/50 transition-all duration-300 flex items-start space-x-4">
                              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-500 rounded-full flex items-center justify-center">
                                <Icon className="text-white text-xl" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors mb-1">
                                  {achievement.title}
                                </h3>
                                <p className="text-gray-400 text-sm">{achievement.description}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Certifications Section */}
                {activeSection === 'certification' && (
                  <div className="space-y-6 animate-fadeInUp">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center space-x-3">
                      <FaCertificate className="text-red-500" />
                      <span>Certifications</span>
                    </h2>
                    <div className="space-y-4">
                      {certificationData.map((cert, index) => {
                        const Icon = cert.icon;
                        return (
                          <div
                            key={index}
                            className="group relative"
                          >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/50 to-purple-500/50 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
                            <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 group-hover:border-blue-500/50 transition-all duration-300 flex items-start space-x-4">
                              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-500 rounded-full flex items-center justify-center">
                                <Icon className="text-white text-xl" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                                  {cert.title}
                                </h3>
                                <p className="text-gray-400 text-sm">{cert.description}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAndSkills;
