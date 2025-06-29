// src/data/projects.js
import diner1 from '../assets/diner-sg-1.png';
import diner2 from '../assets/diner-sg-2.png';
import hsHero from '../assets/HS-Hero.png';
import hsMeetStylist from '../assets/HS-MeetStylist.png';

export const projects = [
  {
    title: "Gary Blue's Diner (Refactor)",
    description:
      "Modernizing a multi-page restaurant order site with React, Tailwind CSS, and streamlined UX. Includes order confirmation logic, email summary, and a fresh payment UI.",
    tags: ['React', 'Vite', 'Tailwind', 'JavaScript', 'Netlify', 'Figma', 'Node.js'],
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
    type: 'Personal Project',
    status: 'In Development',
    // For interactive screenshots - different views of the project
    screenshotViews: [
      { name: 'Homepage', image: diner1, alt: 'Diner homepage with menu' },
      { name: 'Order Flow', image: diner2, alt: 'Order confirmation process' }
    ]
  },
  {
    title: 'Hair Salon Website',
    description:
      'A responsive multi-page website built for a real hairstylist client. Includes booking integration and based on custom Figma mockups.',
    tags: ['React', 'Vite', 'Tailwind', 'JavaScript', 'Netlify', 'Figma', 'Node.js'],
    github: 'https://github.com/DeToxFox/hair-salon-site',
    figma: 'https://www.figma.com/file/YourSalonFigmaLink',
    demo: '',
    images: [hsHero, hsMeetStylist],
    features: [
      'Custom booking form with validation',
      'Mobile-first layout across breakpoints',
      'Styled directly from Figma design tokens',
    ],
    note: 'Live client project — currently in development',
    type: 'Client Project',
    status: 'In Development',
    // Placeholder for interactive screenshots
    screenshotViews: [
      { name: 'Homepage', image: hsHero, alt: 'Salon homepage' },
      { name: 'Meet Stylist', image: hsMeetStylist, alt: 'Meet the stylist section' }
    ]
  },
  {
    title: 'QR Code Resume Generator',
    description:
      'A CLI utility that generates PDF resumes and embedded QR codes linking to your portfolio.',
    tags: ['Python', 'qrcode', 'CLI', 'PDF'],
    github: 'https://github.com/DeToxFox/qr-resume-generator',
    demo: '',
    images: [],
    qrValue: '/DavidTurner_DevResume.pdf',
    features: [
      'Generates dynamic QR codes',
      'Outputs styled PDF resume',
      'Configurable via JSON',
    ],
    note: 'Backend only — UI planned for later',
    type: 'Personal Project',
    status: 'Completed',
    screenshotViews: []
  },
  {
    title: 'Portfolio Website (Refactored)',
    description:
      'This very site — rebuilt with React, Tailwind, and modern design patterns.',
    tags: ['React', 'Vite', 'Tailwind', 'JavaScript', 'Netlify', 'Figma', 'Node.js'],
    github: 'https://github.com/DeToxFox/portfolio-refactored',
    demo: '',
    images: [],
    features: [
      'Dark/light theme toggle',
      'Scroll-to-top & section animations',
      'Reusable Tailwind component library',
    ],
    note: 'You\'re viewing it now! 🎯',
    type: 'Personal Project',
    status: 'Live',
    screenshotViews: []
  },
];