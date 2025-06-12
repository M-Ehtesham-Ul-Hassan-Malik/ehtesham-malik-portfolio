import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-950 text-gray-600 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700 px-6 py-10 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
        
        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-500">Home</a></li>
            <li><a href="/about" className="hover:text-blue-500">About</a></li>
            <li><a href="/education" className="hover:text-blue-500">Education</a></li>
            <li><a href="/projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>

        {/* Centered Social Icons */}
        <div className="flex flex-col items-center">
          <h3 className="text-base font-semibold mb-3">Connect With Me</h3>
          <div className="flex gap-5 text-2xl justify-center">
            <a href="https://github.com/M-Ehtesham-Ul-Hassan-Malik" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/m-ehtesham-ul-hassan-malik" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaLinkedin /></a>
            <a href="https://medium.com/@malikehtesham" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaMedium /></a>
            <a href="https://www.facebook.com/ehtesham.malik.90857" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaFacebook /></a>
            <a href="https://x.com/malik_mehtesham" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaTwitter /></a>
            <a href="https://www.youtube.com/@ehtesham-malik" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaYoutube /></a>
          </div>
        </div>

        {/* Back to Top & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition"
          >
            <FaArrowUp />
            Back to Top
          </button>
          <p className="text-xs mt-2 md:mt-4">&copy; {new Date().getFullYear()} M. Ehtesham Ul Hassan Malik</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
