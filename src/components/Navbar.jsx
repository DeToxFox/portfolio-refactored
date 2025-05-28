const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo and Name */}
        <div className="flex items-center space-x-2">
          {/* Placeholder for logo */}
          <div className="w-8 h-8 bg-blue-500 rounded-full" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            David Turner
          </span>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <a href="#top" className="text-gray-800 dark:text-gray-200 hover:underline">
            Home
          </a>
          <a href="#projects" className="text-gray-800 dark:text-gray-200 hover:underline">
            Projects
          </a>
          <a href="#contact" className="text-gray-800 dark:text-gray-200 hover:underline">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
// This Navbar component is a sticky header that contains the logo and navigation links.
// It uses Tailwind CSS for styling and supports dark mode.
// The logo is represented by a placeholder div, and the name "David Turner" is displayed next to it.