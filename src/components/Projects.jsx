// src/components/Projects.jsx
import React, { useState } from 'react';
import { FaGithub, FaFigma, FaExternalLinkAlt, FaSearchPlus } from 'react-icons/fa';
import diner1 from '../assets/diner-sg-1.png';
import diner2 from '../assets/diner-sg-2.png';
import QRCode from 'react-qr-code';

const projects = [
  {
    title: "Gary Blue's Diner (Refactor)",
    description:
      "Modernizing a multi-page restaurant order site with React, Tailwind CSS, and streamlined UX.",
    tags: ['React', 'Vite', 'Tailwind', 'JavaScript'],
    github: 'https://github.com/DeToxFox/gary-blues-diner',
    figma: 'https://www.figma.com/file/YourDinerFigmaLink',
    demo: 'https://garys-blue-diner.netlify.app',
    images: [diner1, diner2],
    features: [
      'Converted multi-page flow to React + Router',
      'Built responsive UI with Tailwind',
      'Integrated payment & confirmation logic',
    ],
    note: 'Refactor in progress — enhanced layout & UI polish',
  },
  {
    title: 'Hair Salon Website',
    description:
      'A responsive multi-page site for a hairstylist, built from custom Figma mockups.',
    tags: ['React', 'Vite', 'Tailwind'],
    github: 'https://github.com/DeToxFox/hair-salon-site',
    figma: 'https://www.figma.com/file/YourSalonFigmaLink',
    images: [], // drop in imports as you add screenshots
    features: [
      'Custom booking form with validation',
      'Mobile-first layout across breakpoints',
      'Styled directly from Figma design tokens',
    ],
    note: 'Live client project — currently in development',
  },
  {
    title: 'QR Code Resume Generator',
    description:
      'A CLI utility that generates PDF resumes and embedded QR codes linking to your portfolio.',
    tags: ['Node.js', 'CLI', 'PDF'],
    github: 'https://github.com/DeToxFox/qr-resume-generator',
    demo: '',    // no UI demo yet
    images: [],  // no screenshots
    // qrValue: `${window.location.origin}/DavidTurner_DevResume.pdf`, // <-- points to public/resume.pdf
    qrValue: '/DavidTurner_DevResume.pdf',
    features: [
      'Generates dynamic QR codes',
      'Outputs styled PDF resume',
      'Configurable via JSON',
    ],
    note: 'Backend only — UI planned for later',
  },
  {
    title: 'Portfolio Website (Refactored)',
    description:
      'This very site — rebuilt with React, Tailwind, and modern design patterns.',
    tags: ['React', 'Vite', 'Tailwind'],
    github: 'https://github.com/DeToxFox/portfolio-refactored',
    demo: 'https://your-portfolio.netlify.app',
    images: [], // drop in imports as you add screenshots
    features: [
      'Dark/light theme toggle',
      'Scroll-to-top & section animations',
      'Reusable Tailwind component library',
    ],
    note: '',
  },
];

export default function Projects() {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="
                group
                flex flex-col
                p-6
                bg-gray-50 dark:bg-gray-800
                rounded-lg
                shadow-md
                transform transition
                duration-300
                hover:shadow-2xl
                hover:scale-105
              "
            >
              {/* 1. Thumbnails */}
              {project.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {project.images.map((src, i) => (
                    <div
                      key={i}
                      className="relative group cursor-pointer overflow-hidden rounded-lg"
                      onClick={() => setLightboxSrc(src)}
                    >
                      {/* Thumbnail image */}
                      <img
                        src={src}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="w-full h-auto object-cover transition-transform duration-200 group-hover:scale-105"
                      />

                      {/* Overlay container */}
                      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                        {/* Background tint */}
                        <div className="absolute inset-0 bg-black bg-opacity-10 md:bg-opacity-0 md:group-hover:bg-opacity-40 transition-colors" />
                        {/* bg-black bg-opacity-10, NOTE: this will show on mobile an overlay shader */}
                        {/* Magnifier icon */}
                        <FaSearchPlus className="text-white text-3xl opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity" />
                        {/* NOTE: opacity-100 on mobile, 0 on desktop */}
                      </div>
                    </div>
                  ))}
                </div>
              )}


              {/* 2. Title */}
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100 transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                {project.title}
              </h3>

              {/* 3. Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                {project.description}
              </p>

              {/* 4. QR Code preview for the Resume Generator */}
              {project.qrValue && (
                <div className="mt-2 mb-4 flex flex-col items-center">
                  <QRCode
                    value={project.qrValue}
                    size={96}
                    bgColor={project.darkMode ? '#1f2937' : '#fff'}
                    fgColor={project.darkMode ? '#fff' : '#111'}
                  />
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Scan to view the resume
                  </p>
                </div>
              )}


              {/* 5. Features list */}
              {project.features.length > 0 && (
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
                  {project.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              )}

              {/* 6. Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* 7. Links & Demo */}
              <div className="mt-auto flex flex-wrap items-center justify-between">
                <div className="flex space-x-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-1" /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors"
                    >
                      <FaGithub className="mr-1" /> Repo
                    </a>
                  )}
                  {project.figma && (
                    <a
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors"
                    >
                      <FaFigma className="mr-1" /> Figma
                    </a>
                  )}
                </div>
                {project.note && (
                  <span className="text-sm italic text-gray-500 dark:text-gray-400 mt-4 w-full">
                    {project.note}
                  </span>
                )}
              </div>
            </div>
          ))}
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