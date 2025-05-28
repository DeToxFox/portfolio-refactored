import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black shadow-md transition-colors duration-500">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {/* Placeholder Logo */}
          <img src="/src/assets/PurpleMonkey" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-semibold text-black dark:text-white">
            David Turner
          </span>
        </div>
        <ul className="flex space-x-6 text-black dark:text-white">
          <li><a href="#top" className="hover:text-blue-600">Home</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
// This is a simple Navbar component that includes a logo and navigation links.
// It uses Tailwind CSS for styling and supports dark mode with a transition effect.
// The Navbar is sticky at the top of the page and adapts its colors based on the theme.
