const ProjectCard = ({ title, description, tags = [], github, live }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-colors duration-300">
      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-sm bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            GitHub
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-green-600 hover:underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;