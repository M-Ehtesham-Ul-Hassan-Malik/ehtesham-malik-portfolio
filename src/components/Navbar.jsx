import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed w-full z-50 bg-white text-gray-900 dark:bg-gray-950 dark:text-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">

        {/* Hamburger for small screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu" className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Centered nav links (hidden on small screens) */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 gap-6">
          <a href="/" className="font-medium hover:text-blue-600 dark:hover:text-blue-400">Home</a>
          <a href="/about" className="font-medium hover:text-blue-600 dark:hover:text-blue-400">About</a>
          <a href="/education" className="font-medium hover:text-blue-600 dark:hover:text-blue-400">Education</a>
          <a href="/skills" className="font-medium hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
          <a href="/projects" className="font-medium hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
          <a href="/contact" className="font-medium hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
        </div>

        {/* Dark mode toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Dark Mode"
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 flex flex-col items-center gap-4 bg-white dark:bg-gray-950 p-4 rounded shadow">
          <a onClick={closeMenu} href="/" className="block font-medium hover:text-blue-600 dark:hover:text-blue-400">Home</a>
          <a onClick={closeMenu} href="/about" className="block font-medium hover:text-blue-600 dark:hover:text-blue-400">About</a>
          <a onClick={closeMenu} href="/education" className="block font-medium hover:text-blue-600 dark:hover:text-blue-400">Education</a>
          <a onClick={closeMenu} href="/projects" className="block font-medium hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
          <a onClick={closeMenu} href="/contact" className="block font-medium hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
