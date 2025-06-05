// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    title: 'QR Code Resume Generator',
    description:
      'A backend utility that dynamically generates resumes and QR codes linking to your portfolio.',
    tags: ['Node.js', 'Backend'],
    github: 'https://github.com/DeToxFox/qr-resume-generator',
    note: 'Backend only — UI planned for later',
  },
  {
    title: 'Hair Salon Website',
    description:
      'Responsive site for a local hairstylist with booking integration. Based on Figma mockups.',
    tags: ['React', 'Vite', 'Tailwind'],
    figma: 'https://www.figma.com/your-hair-site-preview',
    note: 'In Progress',
  },
  {
    title: 'Movie Finder API',
    description:
      'A full-stack movie search engine supporting PostgreSQL and MongoDB. Includes REST API and authentication.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
    github: 'https://github.com/DeToxFox/movie-finder-api',
    note: '',
  },
  {
    title: 'Portfolio Website (Refactored)',
    description:
      'The site you are currently viewing — rebuilt with React, Tailwind, and modern gradient support.',
    tags: ['React', 'Vite', 'Tailwind'],
    github: 'https://github.com/DeToxFox/portfolio-refactored',
    note: '',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4
                 scroll-mt-24
                 bg-light-mode-gradient dark:bg-dark-mode-gradient
                 transition-colors duration-500
                 animate-fade-in"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6
                         bg-white dark:bg-gray-800
                         rounded-lg shadow-md
                         transition-colors duration-500"
            >
              {/* Project Title */}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Project Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1
                               bg-blue-100 dark:bg-blue-800
                               text-blue-800 dark:text-blue-200
                               rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* GitHub / Figma / Note Links */}
              <div className="flex flex-col space-y-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub Repo
                  </a>
                )}
                {project.figma && (
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Figma Preview
                  </a>
                )}
                {project.note && (
                  <span className="text-sm text-gray-500 dark:text-gray-400 italic">
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
};

export default Projects;