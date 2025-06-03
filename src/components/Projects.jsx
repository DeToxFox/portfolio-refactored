import React from 'react';

const projects = [
  {
    title: 'QR Code Resume Generator',
    description: 'A backend utility that dynamically generates resumes and QR codes linking to your portfolio.',
    tags: ['Node.js', 'Backend'],
    github: 'https://github.com/DeToxFox/qr-resume-generator',
    note: 'Backend only — UI planned for later',
  },
  {
    title: 'Hair Salon Website',
    description: 'Responsive site for a local hairstylist with booking integration. Based on Figma mockups.',
    tags: ['React', 'Vite', 'Tailwind'],
    github: '',
    figma: 'https://www.figma.com/your-hair-site-preview',
    note: 'In Progress',
  },
  {
    title: 'Movie Finder API',
    description:
      'A full-stack movie search engine supporting PostgreSQL and MongoDB. Includes REST API and authentication.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
    github: 'https://github.com/DeToxFox/S3_MovieFinder_API_NodeJS',
  },
  {
    title: 'Portfolio Website (Refactored)',
    description:
      'The site you’re viewing now! Built with Vite + React + Tailwind, deployed via Netlify.',
    tags: ['React', 'Tailwind', 'Vite'],
    github: 'https://github.com/DeToxFox/portfolio-refactored',
    live: 'https://david-turner-portfolio.netlify.app/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="mb-12 text-gray-700 dark:text-gray-300">
          A collection of professional and personal projects demonstrating my development experience.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              {project.github && (
                <a href={project.github} className="text-blue-500 hover:underline mr-4" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {project.live && (
                <a href={project.live} className="text-blue-500 hover:underline mr-4" target="_blank" rel="noopener noreferrer">
                  Live Site
                </a>
              )}
              {project.figma && (
                <a href={project.figma} className="text-blue-500 hover:underline mr-4" target="_blank" rel="noopener noreferrer">
                  Figma Preview
                </a>
              )}
              {project.note && (
                <p className="mt-2 text-sm italic text-yellow-500">{project.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;