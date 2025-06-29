import React from 'react';
import logo from '../assets/PurpleMonkey.jpg'; // Adjust the path as necessary
import ThemeToggle from './ThemeToggle'; // Import the ThemeToggle component

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black shadow-md transition-colors duration-500">
      <nav className="max-w-7xl mx-auto px-4 py-1 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
        <div className="flex items-center space-x-3">
          {/* <img
            src={logo}
            alt="Logo"
            className="h-24 w-24 object-contain"
          /> */}
          <div className="text-center md:text-left">
            <p className="text-xl font-bold text-black dark:text-white">David Turner, CET</p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Full Stack Developer | Business Analyst
            </p>
          </div>
        </div>
        <ul className="flex items-center space-x-6 text-black dark:text-white">
          <li><a href="#top" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About Me</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          <li className="flex items-center"><ThemeToggle /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
// This Navbar component includes a logo, title, subtitle, and navigation links.
// It uses Tailwind CSS for styling and supports dark mode.
// The logo is imported from the assets folder, and the component is responsive.