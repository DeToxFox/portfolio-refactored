import ProjectCard from './ProjectCard';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'Resume + QR Code Generator',
      description: 'A utility to dynamically generate resumes and QR codes linking to your portfolio.',
      tags: ['React', 'Tailwind', 'Node.js'],
      github: 'https://github.com/DeToxFox/ResumeAndSocialQR',
      live: '', // add live link if hosted
    },
    {
      title: 'Hair Salon Website',
      description: 'Responsive site for a local hairstylist with a booking integration.',
      tags: ['React', 'Vite', 'Tailwind'],
      github: '',
      live: '', // Netlify or live site link
    },
    // Add more as needed
  ];

  return (
    <section id="projects" className="px-4 py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">Featured Projects</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          A collection of personal and professional projects demonstrating my development experience.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
// This component displays a list of featured projects using the ProjectCard component.
// It includes a title, description, tags, and links to GitHub and live demos.
// The projects are displayed in a responsive grid layout, adapting to different screen sizes.