'use client';
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Right from "@/components/Right";
import { FaWhatsapp, FaLinkedinIn, FaGithub, FaArrowDown, FaDownload } from "react-icons/fa";
import Link from "next/link";

const Leftside = () => {
  const [text] = useTypewriter({
    words: ["Computer Systems Engineer", "Full Stack Developer", "Problem Solver", "Tech Enthusiast"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });

  const socialLinks = [
    { 
      icon: FaWhatsapp, 
      href: "https://web.whatsapp.com/send?phone=+966511096113", 
      color: "hover:text-green-500 hover:shadow-green-500/50",
      label: "WhatsApp"
    },
    { 
      icon: FaLinkedinIn, 
      href: "https://www.linkedin.com/in/moazam-khan-089406319/", 
      color: "hover:text-blue-500 hover:shadow-blue-500/50",
      label: "LinkedIn"
    },
    { 
      icon: FaGithub, 
      href: "https://github.com/Moazam-khan", 
      color: "hover:text-purple-500 hover:shadow-purple-500/50",
      label: "GitHub"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col gap-12 lg:grid lg:grid-cols-2 items-center px-6 md:px-12 lg:px-20 pt-28 md:pt-32 pb-8 relative overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Left Side Content */}
      <section className="space-y-8 order-2 lg:order-1 text-center lg:text-left z-10 animate-fadeInUp">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-2xl md:text-3xl font-medium text-gray-400 mb-2">
              Hi there! 👋 I&apos;m
            </h4>
          </motion.div>

          {/* Name with gradient */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight"
          >
            <span className="text-white">Moazam </span>
            <span className="gradient-text text-shadow-glow">Khan</span>
          </motion.h1>

          {/* Dynamic role */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center justify-center lg:justify-start"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-red-500">
              <span>{text}</span>
              <Cursor cursorStyle="|" cursorColor="#ef4444" />
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            Crafting <span className="text-red-400 font-semibold">exceptional digital experiences</span> with modern technologies. 
            Passionate about building scalable, user-friendly web applications that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
          >
            <Link
              href="/Projects"
              className="group px-8 py-3.5 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-full shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>View My Work</span>
              <FaArrowDown className="group-hover:translate-y-1 transition-transform duration-300" />
            </Link>
            <button className="px-8 py-3.5 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-full border border-white/10 hover:border-red-500/50 hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
              <FaDownload />
              <span>Download CV</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="space-y-2 pt-2"
        >
          <h2 className="text-xl font-semibold text-gray-300 flex items-center justify-center lg:justify-start space-x-2">
            <span className="w-8 h-0.5 bg-gradient-to-r from-transparent to-red-500" />
            <span>Connect With Me</span>
            <span className="w-8 h-0.5 bg-gradient-to-l from-transparent to-red-500" />
          </h2>
          <div className="flex flex-row justify-center lg:justify-start space-x-5">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex items-center justify-center w-14 h-14 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-transparent shadow-lg`}
                    aria-label={social.label}
                  >
                    <Icon className="text-2xl group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 shadow-xl transition-all duration-300" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Right Side - Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="order-1 lg:order-2 z-10 animate-float"
      >
        <Right />
      </motion.div>
    </div>
  );
};

export default Leftside;