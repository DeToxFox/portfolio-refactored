// src/components/Projects.jsx
import React from 'react';
import { FaGithub, FaFigma, FaExternalLinkAlt } from 'react-icons/fa';
import diner1 from '../assets/diner-sg-1.png';
import diner2 from '../assets/diner-sg-2.png';

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
    images: [
      '/images/salon-homepage.png',
      '/images/salon-booking.png',
    ],
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
    images: [
      '/images/portfolio-hero.png',
      '/images/portfolio-projects.png',
    ],
    features: [
      'Dark/light theme toggle',
      'Scroll-to-top & section animations',
      'Reusable Tailwind component library',
    ],
    note: '',
  },
];

export default function Projects() {
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
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {project.images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ))}
                </div>
              )}

              {/* 2. Title */}
              <h3
                className="
                  text-xl font-semibold mb-2
                  text-gray-800 dark:text-gray-100
                  group-hover:text-indigo-600 dark:group-hover:text-indigo-400
                  transition-colors
                "
              >
                {project.title}
              </h3>

              {/* 3. Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                {project.description}
              </p>

              {/* 4. Features list */}
              {project.features.length > 0 && (
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
                  {project.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              )}

              {/* 5. Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="
                      px-2 py-1
                      bg-indigo-100 dark:bg-indigo-900
                      text-indigo-800 dark:text-indigo-200
                      rounded-full text-sm
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* 6. Links & Demo */}
              <div className="mt-auto flex flex-wrap items-center justify-between">
                <div className="flex space-x-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center
                        text-indigo-600 dark:text-indigo-400
                        hover:text-indigo-800 dark:hover:text-indigo-200
                        transition-colors
                      "
                    >
                      <FaExternalLinkAlt className="mr-1" /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center
                        text-indigo-600 dark:text-indigo-400
                        hover:text-indigo-800 dark:hover:text-indigo-200
                        transition-colors
                      "
                    >
                      <FaGithub className="mr-1" /> Repo
                    </a>
                  )}
                  {project.figma && (
                    <a
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center
                        text-indigo-600 dark:text-indigo-400
                        hover:text-indigo-800 dark:hover:text-indigo-200
                        transition-colors
                      "
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
    </section>
  );
}