// src/pages/Contact.jsx

import React from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/M-Ehtesham-Ul-Hassan-Malik" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/m-ehtesham-ul-hassan-malik" },
    { icon: <FaMedium />, link: "https://medium.com/@malikehtesham" },
    { icon: <FaFacebook />, link: "https://www.facebook.com/ehtesham.malik.90857" },
    { icon: <FaTwitter />, link: "https://x.com/malik_mehtesham" },
    { icon: <FaYoutube />, link: "https://www.youtube.com/@ehtesham-malik" },
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>

        {/* Contact Form */}
        <form className="space-y-6 max-w-xl mx-auto text-left">
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your message"
              className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

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
      </div>
    </section>
  );
};

export default Contact;
