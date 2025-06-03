import React from 'react';
import myPhoto from '../assets/Pro-Headshot.jpeg';

const AboutMe = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img
          src={myPhoto}
          alt="David Turner Headshot"
          className="w-48 h-48 rounded-full object-cover shadow-lg"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-2">Hi, I’m David Turner</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I'm a <strong>systematic and collaborative full stack developer</strong> who thrives on solving real-world problems with clean, efficient code.
            My experience spans <strong>JavaScript, React, Node.js</strong>, and <strong>RESTful APIs</strong>, with a growing passion for mobile through <strong>React Native</strong>.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
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