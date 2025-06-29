import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaGithub,
  FaFigma,
  FaDocker,
  FaAws,
  FaDatabase,
  FaServer,
  FaMobile,
  FaDesktop,
  FaCode,
  FaTools,
  FaCloud,
  FaEnvelope
} from 'react-icons/fa';
import { 
  SiVite, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql, 
  SiExpress, 
  SiNetlify,
  SiAxios,
  SiPostcss,
  SiEslint
} from 'react-icons/si';

export const techStack = {
  frontend: [
    {
      name: 'React',
      icon: FaReact,
      description: 'Frontend Framework',
      level: 'Advanced',
      color: '#61DAFB'
    },
    {
      name: 'JavaScript',
      icon: FaJs,
      description: 'Programming Language',
      level: 'Advanced',
      color: '#F7DF1E'
    },
    {
      name: 'HTML5',
      icon: FaHtml5,
      description: 'Markup Language',
      level: 'Advanced',
      color: '#E34F26'
    },
    {
      name: 'CSS3',
      icon: FaCss3Alt,
      description: 'Styling Language',
      level: 'Advanced',
      color: '#1572B6'
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      description: 'Utility-First CSS Framework',
      level: 'Advanced',
      color: '#06B6D4'
    },
    {
      name: 'Vite',
      icon: SiVite,
      description: 'Build Tool & Dev Server',
      level: 'Intermediate',
      color: '#646CFF'
    }
  ],
  backend: [
    {
      name: 'Node.js',
      icon: FaNodeJs,
      description: 'JavaScript Runtime',
      level: 'Intermediate',
      color: '#339933'
    },
    {
      name: 'Express',
      icon: SiExpress,
      description: 'Web Application Framework',
      level: 'Intermediate',
      color: '#000000'
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
      description: 'NoSQL Database',
      level: 'Intermediate',
      color: '#47A248'
    },
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
      description: 'Relational Database',
      level: 'Beginner',
      color: '#336791'
    }
  ],
  tools: [
    {
      name: 'Git',
      icon: FaGitAlt,
      description: 'Version Control',
      level: 'Advanced',
      color: '#F05032'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      description: 'Code Repository',
      level: 'Advanced',
      color: '#181717'
    },
    {
      name: 'Figma',
      icon: FaFigma,
      description: 'Design & Prototyping',
      level: 'Intermediate',
      color: '#F24E1E'
    },
    {
      name: 'Netlify',
      icon: SiNetlify,
      description: 'Deployment Platform',
      level: 'Intermediate',
      color: '#00C7B7'
    },
    {
      name: 'Docker',
      icon: FaDocker,
      description: 'Containerization',
      level: 'Beginner',
      color: '#2496ED'
    }
  ],
  libraries: [
    {
      name: 'Axios',
      icon: SiAxios,
      description: 'HTTP Client',
      level: 'Intermediate',
      color: '#5A29E4'
    },
    {
      name: 'Nodemailer',
      icon: FaEnvelope,
      description: 'Email Service',
      level: 'Intermediate',
      color: '#339933'
    },
    {
      name: 'PostCSS',
      icon: SiPostcss,
      description: 'CSS Processing',
      level: 'Intermediate',
      color: '#DD3A0A'
    },
    {
      name: 'ESLint',
      icon: SiEslint,
      description: 'Code Quality',
      level: 'Intermediate',
      color: '#4B32C3'
    }
  ]
};

// Helper function to get tech by name
export const getTechByName = (name) => {
  const allTech = [
    ...techStack.frontend,
    ...techStack.backend,
    ...techStack.tools,
    ...techStack.libraries
  ];
  return allTech.find(tech => tech.name.toLowerCase() === name.toLowerCase());
};

// Helper function to get tech stack for a project
export const getProjectTechStack = (techNames) => {
  return techNames.map(name => getTechByName(name)).filter(Boolean);
}; 