'use client';
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Right from "@/components/Right"; // Import your Right component
import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Leftside = () => {
  const [text] = useTypewriter({
    words: ["Computer Systems Engineer.", "Full Stack Developer.", "MERN Stack Developer."],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <div className="flex flex-col gap-20 md:grid md:grid-cols-2 items-center md:p-4 mt-8 dark:">

      {/* Left Side Content (Text Section) */}
      <section className="space-y-4 order-2 md:order-1 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-3xl font-semibold text-gray-800">Hi, I&apos;m</h4>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-400">
            Moazam <span className="text-red-700">Khan</span>
          </h1>
          <h2 className="text-xl text-red-700 font-medium">
            <span>{text}</span>
            <Cursor cursorStyle="|" cursorColor="#ff014f" />
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Creating scalable, user-friendly web apps with modern<br></br> tech and solid engineering skills.
          </p>
        </motion.div>

        {/* Social Links */}
        <div>
          <h2 className="text-2xl font-bold text-red-900">Find me in:</h2>
          <div className="flex flex-row justify-center md:justify-start space-x-4 mt-2">
            <Link
              href="https://web.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
            >
              <FaWhatsapp className="text-5xl text-gray-800 hover:text-green-500" />
          </Link>
            <Link
              href="https://www.linkedin.com/in/moazam-khan-089406319/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
            >
              <FaLinkedinIn className="text-5xl text-gray-800 hover:text-blue-600" />
          </Link>
            <Link
              href="https://github.com/Moazam-khan"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
            >
              <FaGithub className="text-5xl text-gray-800 hover:text-red-500" />
          </Link>
          </div>
        </div>
      </section>

      {/* Right Side Content (Image Section) */}
      <div className="order-1 md:order-2 md:mb-3">
        <Right />
      </div>
    </div>
  );
};

export default Leftside;