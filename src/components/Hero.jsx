import React from "react";
import myPhoto from "../assets/Pro-Headshot.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center px-6 md:px-10 bg-gradient-to-b from-[#f8fbff] via-[#eef2f7] to-[#e3e7ed] dark:from-[#0a0a23] dark:via-[#121228] dark:to-[#1c1c3a] text-center md:text-left animate-fade-in"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-6 leading-tight">
            Turning complex problems into{" "}
            <span className="text-blue-600 dark:text-blue-400">clean solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            I’m David Turner — a Full Stack Developer with a background in business analysis. I enjoy building clean, reliable software that solves real problems and supports real people. Whether it’s a solo project or a team effort, I bring a calm, collaborative mindset and a focus on doing quality work.
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            src={myPhoto}
            alt="David Turner Headshot"
            className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;