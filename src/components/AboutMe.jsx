import React from 'react';
import myPhoto from '../assets/Pro-Headshot.jpeg';

const AboutMe = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-neutral-100 dark:from-gray-900 dark:to-black py-20 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img
          src={myPhoto}
          alt="David Turner Headshot"
          className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover shadow-xl transition-transform duration-300 hover:scale-105"
        />
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
            Hi, I’m David Turner
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3 text-lg leading-relaxed">
            I’m a <strong>systematic and collaborative full stack developer</strong> who thrives on solving real-world problems with clean, efficient code.
            My experience spans <strong>JavaScript, React, Node.js</strong>, and <strong>RESTful APIs</strong>, with a growing passion for mobile through <strong>React Native</strong>.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-3 text-lg leading-relaxed">
            I also bring a background in <strong>business analysis</strong>—bridging tech with communication and thoughtful design.
            Whether I’m mentoring students, refactoring old projects, or exploring backend logic, I’m driven by curiosity, impact, and teamwork.
          </p>
          <p className="text-sm italic text-gray-600 dark:text-gray-400">
            “Always eager to keep learning, improving, and making a meaningful impact.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;