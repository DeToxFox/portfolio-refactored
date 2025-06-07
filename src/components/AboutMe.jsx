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
        {/* <img
          src={myPhoto}
          alt="David Turner Headshot"
          className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover
                     shadow-xl transition-transform duration-300 hover:scale-105"
        /> */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Hi, I’m David Turner
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3 text-lg leading-relaxed">Hi, I’m David Turner

I’m a full stack developer with a background in business analysis. I build applications that are structured, intuitive, and focused on solving real-world problems. I’m highly organized and systematic in how I approach my work, which helps me manage unexpected challenges without losing momentum.

I love digging into problems and finding practical solutions. Whether I’m researching a technical issue or learning something new, I find energy and purpose in the process of improving systems and workflows.

I’ve been described as technical, charismatic, and dedicated — someone who brings both focus and clarity to a team. I take pride in producing high-quality work and communicating clearly with others.

I’m based in St. John’s, Newfoundland, and I’m always looking for ways to grow as a developer while contributing meaningfully to the teams I work with.</p>
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