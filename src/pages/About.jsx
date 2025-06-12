import React from 'react';
import profileImg from '../assets/images/profile.jpeg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
        {/* Profile Image with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="flex-shrink-0"
        >
          <img
            src={profileImg}
            alt="M. Ehtesham Ul Hassan Malik"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg border-4 border-gray-300 dark:border-gray-700 transition-transform"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            I am a Software Engineering student at FAST NUCES, Karachi, passionate about AI, machine learning, and innovative software solutions. Skilled in Python, Java, TypeScript, and frameworks like TensorFlow and Scikit-learn, I enjoy building AI-driven applications and solving complex problems.
            <br /><br />
            Beyond tech, I have a strong background in public speaking and leadership, having served as the Director of Public Speaking House at FAST NUCES.
            <br /><br />
            Let’s connect and innovate together!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
