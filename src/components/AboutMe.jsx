// src/components/AboutMe.jsx
import React from 'react';
import myPhoto from '../assets/Pro-Headshot.jpeg';

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-20 px-4
                 scroll-mt-24
                 bg-light-mode-gradient dark:bg-dark-mode-gradient
                 transition-colors duration-500
                 animate-fade-in"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img
          src={myPhoto}
          alt="David Turner Headshot"
          className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover
                     shadow-xl transition-transform duration-300 hover:scale-105"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Hi, I’m David Turner
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3 text-lg leading-relaxed">
            I’m a <strong>systematic and collaborative full&nbsp;stack developer</strong> who
            thrives on solving real-world problems with clean, efficient code.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-3 text-lg leading-relaxed">
            My expertise spans both frontend and backend technologies, and I have a passion for
            creating user-focused solutions that make a difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;