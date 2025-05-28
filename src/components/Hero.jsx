const Hero = () => {
  return (
    <section id="top" className="min-h-screen flex items-center justify-center bg-white text-black dark:bg-black dark:text-white transition-colors duration-500 px-4">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          David Turner
        </h1>
        <div className="mt-6 flex justify-center space-x-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
