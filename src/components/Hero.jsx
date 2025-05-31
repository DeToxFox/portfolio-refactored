const Hero = () => {
  return (
    <section
      id="top"
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-white text-black dark:bg-black dark:text-white transition-colors duration-500"
    >
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold">David Turner, CET</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300">
          Full Stack Developer | Business Analyst
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;