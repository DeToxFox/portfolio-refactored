// src/components/Projects.jsx
import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaFigma, FaExternalLinkAlt, FaSearchPlus, FaDownload, FaCode, FaUser, FaBriefcase } from 'react-icons/fa';
import diner1 from '../assets/diner-sg-1.png';
import diner2 from '../assets/diner-sg-2.png';
import QRCode from 'react-qr-code';
import { projects } from '../data/projects';
import { getProjectTechStack } from '../data/techStack';
import netlifyFunctionImg from '../assets/Netlify-Serverless-Function.png';

// Custom Tooltip component
function Tooltip({ children, text }) {
  const [show, setShow] = useState(false);
  return (
    <span className="relative" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <span className="absolute z-50 left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded bg-gray-800 text-white text-xs whitespace-nowrap shadow-lg">
          {text}
        </span>
      )}
    </span>
  );
}

export default function Projects() {
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [activeScreenshot, setActiveScreenshot] = useState({});
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  // Scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Initialize active screenshot for each project
  useEffect(() => {
    const initialScreenshots = {};
    projects.forEach((project, index) => {
      if (project.screenshotViews && project.screenshotViews.length > 0) {
        initialScreenshots[index] = 0;
      }
    });
    setActiveScreenshot(initialScreenshots);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'In Development': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Completed': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getTypeIcon = (type) => {
    return type === 'Client Project' ? FaBriefcase : FaUser;
  };

  const getTypeColor = (type) => {
    return type === 'Client Project' 
      ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
      : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          Projects
        </h2>

        <div className="grid w-full gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch justify-items-center">
          {projects.map((project, idx) => {
            const techStack = getProjectTechStack(project.tags);
            
            // Use hardcoded Netlify URL for QR Code Resume Generator
            const resumeUrl = 'https://david-turner-portfolio.netlify.app/DavidTurner_DevResume.pdf';

            return (
              <div
                key={idx}
                ref={(el) => (cardRefs.current[idx] = el)}
                className={`
                  group
                  flex flex-col h-full
                  p-6
                  bg-gray-50 dark:bg-gray-800
                  rounded-xl
                  shadow-lg
                  transform transition-all
                  duration-500
                  border-2
                  hover:shadow-2xl
                  hover:scale-[1.02]
                  hover:border-indigo-300 dark:hover:border-indigo-600
                  min-h-[540px] md:min-h-[600px] lg:min-h-[620px]
                  w-full
                  max-w-[400px]
                `}
              >
                {/* Card content as flex column for top alignment */}
                <div className="flex flex-col h-full w-full">
                  {/* 1. Fixed-height image/QR area */}
                  <div className="flex flex-col items-center justify-center w-full" style={{height: '120px'}}>
                    {project.title === "Gary Blue's Diner (Refactor)" && project.images.length > 0 ? (
                      <div className="w-full flex flex-col items-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-xs mx-auto md:max-w-[260px] md:mx-auto">
                          {project.images.map((img, i) => (
                            <div
                              key={i}
                              className="relative group cursor-pointer overflow-hidden rounded-lg w-full"
                              onClick={() => setLightboxSrc(img)}
                            >
                              <img
                                src={img}
                                alt={`${project.title} thumbnail ${i + 1}`}
                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 max-h-32 md:max-h-24"
                              />
                              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                                <div className="absolute inset-0 bg-black bg-opacity-10 md:bg-opacity-0 md:group-hover:bg-opacity-40 transition-colors" />
                                <FaSearchPlus className="text-white text-2xl opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : project.title === "Hair Salon Website" && project.images.length > 0 ? (
                      <div className="w-full flex flex-col items-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-xs mx-auto md:max-w-[260px] md:mx-auto">
                          {project.images.map((img, i) => (
                            <div
                              key={i}
                              className="relative group cursor-pointer overflow-hidden rounded-lg w-full"
                              onClick={() => setLightboxSrc(img)}
                            >
                              <img
                                src={img}
                                alt={`${project.title} thumbnail ${i + 1}`}
                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 max-h-32 md:max-h-24"
                              />
                              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                                <div className="absolute inset-0 bg-black bg-opacity-10 md:bg-opacity-0 md:group-hover:bg-opacity-40 transition-colors" />
                                <FaSearchPlus className="text-white text-2xl opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : project.title === "Portfolio Website (Refactored)" ? (
                      <div className="w-full flex flex-col items-center">
                        <div className="grid grid-cols-1 gap-3 w-full max-w-[130px] mx-auto">
                          <div
                            className="relative group cursor-pointer overflow-hidden rounded-lg w-full"
                            onClick={() => setLightboxSrc(netlifyFunctionImg)}
                          >
                            <img
                              src={netlifyFunctionImg}
                              alt="Netlify Serverless Function code preview"
                              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 max-h-24"
                            />
                            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                              <div className="absolute inset-0 bg-black bg-opacity-10 md:bg-opacity-0 md:group-hover:bg-opacity-40 transition-colors" />
                              <FaSearchPlus className="text-white text-2xl opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : project.title === "QR Code Resume Generator" ? (
                      <div className="w-full flex flex-col items-center justify-center">
                        <div className="bg-white p-2 rounded-xl shadow-lg border-2 border-indigo-100 dark:border-indigo-900 flex items-center justify-center w-full max-w-[120px] mx-auto">
                          <QRCode
                            value={resumeUrl}
                            size={100}
                            bgColor="#ffffff"
                            fgColor="#111827"
                            className="mx-auto"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-lg" />
                    )}
                  </div>
                  {/* 1b. Click to enlarge or QR CTA label below image/QR area */}
                  <div className="flex items-center justify-center w-full" style={{height: '40px'}}>
                    {((project.title === "Gary Blue's Diner (Refactor)" && project.images.length > 0) ||
                      (project.title === "Hair Salon Website" && project.images.length > 0) ||
                      project.title === "Portfolio Website (Refactored)") && (
                      <span className="inline-block px-3 py-1 bg-indigo-600 text-white rounded-full text-xs font-semibold shadow-lg">
                        Click to enlarge
                      </span>
                    )}
                    {project.title === "QR Code Resume Generator" && (
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-xs font-semibold shadow-lg">
                        Scan to Download Resume
                      </span>
                    )}
                  </div>
                  {/* 2. Fixed-height badges row */}
                  <div className="flex justify-between items-center min-h-[36px] h-[36px]">
                    <div className="flex items-center gap-2">
                      {React.createElement(getTypeIcon(project.type), {
                        className: "text-sm"
                      })}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(project.type)}`}>
                        {project.type || <span className="invisible">Type</span>}
                      </span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status || <span className="invisible">Status</span>}
                    </span>
                  </div>
                  {/* 3. Title */}
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center" style={{height: '32px'}}>
                    {project.title}
                  </h3>
                  {/* 4. Description (debug: green border, fixed height for all cards) */}
                  <p className="text-gray-600 dark:text-gray-300" style={{height: '180px', overflow: 'hidden', marginBottom: 0}}>
                    {project.description}
                  </p>
                  {/* 5. Bullet points: visible, perfectly aligned bullets in all cards */}
                  <div className="w-full" style={{height: '72px', marginBottom: 0}}>
                    <ul className="list-disc list-inside w-full">
                      {[0,1,2].map(i => (
                        <li key={i} className="text-sm leading-tight">
                          {project.features && project.features[i] ? project.features[i] : '\u00A0'}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Tech Stack Icons - always below features, aligned across all cards */}
                  <div className="flex flex-wrap gap-2 w-full justify-center items-center mb-4">
                    {project.title === 'QR Code Resume Generator' ? (
                      <>
                        <div className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                          <svg viewBox="0 0 32 32" width="18" height="18" fill="#3776AB" className="inline-block"><path d="M16.002 2.002c-7.732 0-7.332 3.332-7.332 3.332l.008 3.334h7.324v1h-10.002c-2.002 0-2.002 2-2.002 2v3.334c0 2 2 2 2 2h2.668v-2.668s-.002-2.666 2.666-2.666h7.334c2.668 0 2.668-2.666 2.668-2.666v-3.334c0-2-2-2-2-2zm-4.668 2.666a1 1 0 1 1 0 2.002zm-5.332 7.332a1 1 0 1 1 0 2.002 1 1 0 0 1 0-2.002zm5.332 2.668a1 1 0 1 1 0 2.002 1 1 0 0 1 0-2.002zm-5.332 7.332c0 2 2 2 2 2h10.002v-1h-7.324v-1h10.002c2.002 0 2.002-2 2.002-2v-3.334c0-2-2-2-2-2h-2.668v2.668s.002 2.666-2.666 2.666h-7.334c-2.668 0-2.668 2.666-2.668 2.666v3.334c0 2 2 2 2 2zm4.668 2.666a1 1 0 1 1 0 2.002zm5.332-7.332a1 1 0 1 1 0 2.002 1 1 0 0 1 0-2.002z"/></svg>
                          <span>Python</span>
                        </div>
                        <div className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                          <span>qrcode</span>
                        </div>
                      </>
                    ) : (
                      techStack.map((tech, i) => {
                        const IconComponent = tech.icon;
                        return (
                          <div
                            key={i}
                            className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-600 group/tech"
                            title={`${tech.name} - ${tech.description}`}
                          >
                            <IconComponent 
                              className="text-base transition-transform duration-200 group-hover/tech:scale-110" 
                              style={{ color: tech.color }}
                            />
                            <span>{tech.name}</span>
                          </div>
                        );
                      })
                    )}
                  </div>
                  {/* Links & Demo */}
                  <div className="mt-auto flex flex-col justify-end w-full">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-all duration-200 font-medium hover:scale-105"
                        >
                          <FaExternalLinkAlt className="mr-2" /> Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-all duration-200 font-medium hover:scale-105"
                        >
                          <FaGithub className="mr-2" /> Code
                        </a>
                      )}
                      {project.figma && (
                        <a
                          href={project.figma}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-all duration-200 font-medium hover:scale-105"
                        >
                          <FaFigma className="mr-2" /> Design
                        </a>
                      )}
                      {/* Special case for Portfolio Website */}
                      {!project.demo && project.title === 'Portfolio Website (Refactored)' && (
                        <span className="flex items-center text-green-600 dark:text-green-400 font-medium">
                          <FaCode className="mr-2" /> Viewing Now
                        </span>
                      )}
                    </div>
                    {project.note && (
                      <div className="text-sm italic text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
                        {project.note}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Lightbox modal */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setLightboxSrc(null)}
        >
          <img
            src={lightboxSrc}
            alt="Enlarged screenshot"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
