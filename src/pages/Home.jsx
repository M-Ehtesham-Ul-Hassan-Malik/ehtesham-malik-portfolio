import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/images/profile.jpeg'; // ✅ make sure the path is correct

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMedium,
  FaFacebook,
  FaYoutube
} from 'react-icons/fa';

const socialLinks = [
  { icon: <FaGithub />, link: "https://github.com/M-Ehtesham-Ul-Hassan-Malik" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/m-ehtesham-ul-hassan-malik" },
  { icon: <FaMedium />, link: "https://medium.com/@malikehtesham" },
  { icon: <FaFacebook />, link: "https://www.facebook.com/ehtesham.malik.90857" },
  { icon: <FaTwitter />, link: "https://x.com/malik_mehtesham" },
  { icon: <FaYoutube />, link: "https://www.youtube.com/@ehtesham-malik" },
];

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6"
      >
        {/* ✅ Profile Image with glow and animation */}
        <div className="relative w-44 h-44 mx-auto">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 opacity-30 blur-xl scale-110"></div>
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src={profile}
            alt="M EHTESHAM UL HASSAN MALIK"
            className="relative w-40 h-40 rounded-full ring-4 ring-blue-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-white">
          M EHTESHAM UL HASSAN MALIK
        </h1>

        {/* Quotes */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          <span className="block mb-2">Al-Khwarizmi wrote the first algorithm. I’m just debugging his legacy.</span>
          <span className="block mb-2">Ibn al-Haytham saw the world through lenses; I analyze it through datasets.</span>
          <span>From the House of Wisdom to GitHub commits, the legacy lives on.</span>
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 text-2xl mt-4">
          {socialLinks.map(({ icon, link }, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-white bg-gray-200 dark:bg-gray-800 p-2 rounded-full transition-all duration-300 hover:bg-blue-500"
            >
              {icon}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
