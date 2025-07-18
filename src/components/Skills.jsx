import React from 'react';
import { FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaGithub, FaAws, FaCloud, FaTrello, FaJira, FaFigma, FaShieldAlt, FaUsers, FaSync, FaChartBar, FaTasks, FaUserCog } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiMysql, SiTailwindcss, SiVite, SiExpress, SiJest, SiNetlify, SiRealm, SiDotenv } from 'react-icons/si';

const brandColors = {
  Python: "#3776AB",
  Java: "#007396",
  JavaScript: "#F7DF1E",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  "Tailwind CSS": "#38BDF8",
  "React.js": "#61DAFB",
  "React Native": "#61DAFB",
  "Node.js": "#339933",
  Express: "#000000",
  Jest: "#C21325",
  Vite: "#646CFF",
  MySQL: "#4479A1",
  PostgreSQL: "#336791",
  MongoDB: "#47A248",
  Realm: "#39477F",
  GitHub: "#181717",
  "Azure DevOps": "#0078D7",
  Jira: "#0052CC",
  Figma: "#F24E1E",
  Trello: "#0079BF",
  Postman: "#FF6C37",
  ZOHO: "#C8202F",
  "MS Excel": "#217346",
  AWS: "#FF9900",
  Citrix: "#0085D1",
  SharePoint: "#0078D4",
  Netlify: "#00C7B7",
  "OAuth 2.0": "#F7B93E",
  "Microsoft Graph API": "#0078D4",
  "Azure Active Directory": "#0078D4",
  dotenv: "#8EC13F",
  "qrcode library": "#F7DF1E",
  "Agile/Scrum": "#E34F26",
  "Safe Agile": "#E34F26",
  "Change Mgmt": "#E34F26",
  "Risk Mitigation": "#E34F26",
  "Requirements Gathering": "#6B7280",
  "Workflow Mapping": "#6B7280",
  "Data Reporting": "#6B7280",
  "Stakeholder Mgmt": "#6B7280",
  "Process Optimization": "#6B7280",
  "RFP/Bid Response": "#6B7280",
  "Risk Identification": "#6B7280",
  "Data Cleansing": "#6B7280"
};

const skillBadges = [
  {
    category: 'Programming Languages',
    color: 'bg-indigo-500 text-white',
    items: [
      { icon: FaPython, label: 'Python' },
      { icon: FaJava, label: 'Java' },
      { icon: FaJs, label: 'JavaScript' }
    ]
  },
  {
    category: 'Web Tech',
    color: 'bg-cyan-600 text-white',
    items: [
      { icon: FaHtml5, label: 'HTML5' },
      { icon: FaCss3Alt, label: 'CSS3' },
      { icon: SiTailwindcss, label: 'Tailwind CSS' },
      { icon: FaJs, label: 'Web API (REST)' }
    ]
  },
  {
    category: 'Frameworks/Libraries',
    color: 'bg-green-600 text-white',
    items: [
      { icon: FaReact, label: 'React.js' },
      { icon: FaReact, label: 'React Native' },
      { icon: FaNodeJs, label: 'Node.js' },
      { icon: SiExpress, label: 'Express' },
      { icon: SiJest, label: 'Jest' },
      { icon: SiVite, label: 'Vite' },
      { icon: SiTailwindcss, label: 'Tailwind' }
    ]
  },
  {
    category: 'Databases',
    color: 'bg-orange-500 text-white',
    items: [
      { icon: SiMysql, label: 'MySQL' },
      { icon: SiPostgresql, label: 'PostgreSQL' },
      { icon: SiMongodb, label: 'MongoDB' },
      { icon: SiRealm, label: 'Realm' }
    ]
  },
  {
    category: 'Tools',
    color: 'bg-purple-600 text-white',
    items: [
      { icon: FaGithub, label: 'GitHub' },
      { icon: FaCloud, label: 'Azure DevOps' },
      { icon: FaJira, label: 'Jira' },
      { icon: FaFigma, label: 'Figma' },
      { icon: FaTrello, label: 'Trello' },
      { icon: FaChartBar, label: 'Postman' },
      { icon: FaTasks, label: 'ZOHO' },
      { icon: FaChartBar, label: 'MS Excel' }
    ]
  },
  {
    category: 'Cloud',
    color: 'bg-blue-600 text-white',
    items: [
      { icon: FaAws, label: 'AWS' },
      { icon: FaCloud, label: 'Citrix' },
      { icon: FaCloud, label: 'SharePoint' },
      { icon: SiNetlify, label: 'Netlify' }
    ]
  },
  {
    category: 'Methodologies',
    color: 'bg-red-500 text-white',
    items: [
      { icon: FaUsers, label: 'Agile/Scrum' },
      { icon: FaShieldAlt, label: 'Safe Agile' },
      { icon: FaSync, label: 'Change Mgmt' },
      { icon: FaShieldAlt, label: 'Risk Mitigation' }
    ]
  },
  {
    category: 'Core Competencies',
    color: 'bg-gray-700 text-white',
    items: [
      { icon: FaTasks, label: 'Requirements Gathering' },
      { icon: FaTasks, label: 'Workflow Mapping' },
      { icon: FaChartBar, label: 'Data Reporting' },
      { icon: FaUserCog, label: 'Stakeholder Mgmt' },
      { icon: FaSync, label: 'Process Optimization' },
      { icon: FaTasks, label: 'RFP/Bid Response' },
      { icon: FaShieldAlt, label: 'Risk Identification' },
      { icon: FaTasks, label: 'Data Cleansing' }
    ]
  },
  {
    category: 'Other',
    color: 'bg-yellow-600',
    items: [
      { icon: FaShieldAlt, label: 'OAuth 2.0' },
      { icon: FaCloud, label: 'Microsoft Graph API' },
      { icon: FaCloud, label: 'Azure Active Directory' },
      { icon: SiDotenv, label: 'dotenv' },
      { icon: FaTasks, label: 'qrcode library' }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-10 px-4 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2 text-center">
          Technical Skills & Core Competencies
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 text-center max-w-2xl mx-auto">
          A summary of my technical expertise, tools, and methodologies—spanning full stack development, cloud, collaboration, and business analysis.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-16">
          {skillBadges.map((group, idx) => (
            <div key={group.category} className="flex flex-col items-start mb-10">
              <h3 className="text-xl font-semibold mb-5 text-gray-800 dark:text-gray-200 tracking-wide">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-5" style={{lineHeight: '2.6'}}>
                {group.items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <span
                      key={item.label}
                      className={`inline-flex items-center gap-3 px-5 py-3 rounded-full text-lg font-semibold shadow-sm ${group.color} dark:${group.color}`}
                    >
                      <span className="flex items-center justify-center w-11 h-11 rounded-full bg-neutral-badge">
                        <Icon color={brandColors[item.label]} size={22} />
                      </span>
                      <span className="text-white drop-shadow">{item.label}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 