import { FaMoon, FaSun } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="fixed w-full z-50 bg-white text-gray-900 dark:bg-gray-950 dark:text-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">

        {/* Centered Nav Links */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-6">
          <a href="/" className="font-medium hover:text-blue-600 dark:hover:text-blue-400">Home</a>
          <a href="/about" className="font-medium hover:text-blue-600 dark:hover:text-blue-400">About</a>
          <a href="/education" className="font-medium hover:text-blue-600 dark:hover:text-blue-400">Education</a>
          <a href="/projects" className="font-medium hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
          <a href="/contact" className="font-medium hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Dark Mode"
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
