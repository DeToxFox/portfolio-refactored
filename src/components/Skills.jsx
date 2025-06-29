import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const skillCategories = [
  'Programming Languages',
  'Web Tech',
  'Frameworks/Libraries',
  'Databases',
  'Tools',
  'Cloud',
  'Other'
];

const skillLabels = [
  ['Python', 'Java', 'JavaScript'],
  ['HTML5', 'CSS3', 'Tailwind CSS', 'Web API (REST)'],
  ['React.js', 'React Native', 'Node.js', 'Express', 'Jest'],
  ['MySQL', 'PostgreSQL', 'MongoDB', 'Realm'],
  ['GitHub', 'Azure DevOps', 'Jira', 'Figma', 'Trello'],
  ['AWS', 'Citrix', 'SharePoint', 'Netlify'],
  ['OAuth 2.0', 'Microsoft Graph API', 'Azure Active Directory', 'dotenv', 'qrcode library']
];

// Proficiency: 3 = Proficient, 2 = Familiar
const skillLevels = [
  3, // Programming Languages
  3, // Web Tech
  3, // Frameworks/Libraries
  2, // Databases
  2, // Tools
  2, // Cloud
  2  // Other
];

const data = {
  labels: skillCategories,
  datasets: [
    {
      label: 'Proficiency',
      data: skillLevels,
      backgroundColor: 'rgba(99, 102, 241, 0.2)',
      borderColor: 'rgba(99, 102, 241, 1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(99, 102, 241, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(99, 102, 241, 1)'
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          const idx = context.dataIndex;
          return `${skillCategories[idx]}: ${skillLabels[idx].join(', ')}`;
        }
      }
    }
  },
  scales: {
    r: {
      min: 0,
      max: 3,
      ticks: {
        stepSize: 1,
        callback: function(value) {
          if (value === 3) return 'Proficient';
          if (value === 2) return 'Familiar';
          return '';
        }
      },
      pointLabels: {
        font: { size: 14 }
      }
    }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          Skills & Technology Radar
        </h2>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-xl">
            <Radar data={data} options={options} />
          </div>
        </div>
      </div>
    </section>
  );
} 