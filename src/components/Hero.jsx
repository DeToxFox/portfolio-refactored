import React from 'react';

const Hero = () => {
  return (
    <section
      id="top"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-white dark:bg-black text-black dark:text-white px-4 transition-colors duration-500"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          David Turner, CET
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Full Stack Developer | Business Analyst
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-400 dark:border-gray-600 text-black dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
