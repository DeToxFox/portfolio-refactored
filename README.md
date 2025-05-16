# Portfolio Refactored

This is a modern portfolio site built with [Vite](https://vitejs.dev/), [React](https://react.dev/), and [Tailwind CSS](https://tailwindcss.com/). It showcases my projects, skills, and contact information in a fast and responsive layout.

## :rocket: Tech Stack

- :zap: Vite
- ⚛️ React (JavaScript)
- :art: Tailwind CSS (v4)
- :wrench: PostCSS (with ESM support)
- :cloud: Deployed via [Netlify](https://www.netlify.com/)

## :file_folder: Setup Instructions that were followed

### :open_file_folder: Project Setup

```bash
git clone https://github.com/DeToxFox/portfolio-refactored.git
cd portfolio-refactored
npm create vite@latest . -- --template react
```
Then choose:
- Framework: React
- Variant: JavaScript
```bash
npm install
```

### :hammer_and_wrench: Tailwind Setup

Tailwind CSS v4 is configured manually using ESM modules:
```bash
npm install -D tailwindcss postcss autoprefixer @tailwindcss/postcss
```
touch postcss.config.js
```bash
import tailwindcssPostcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [tailwindcssPostcss(), autoprefixer()],
}
```
touch tailwind.config.js
```bash
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Within the src/index.css
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
```bash
npm run dev
```

## :brain: Features
- Responsive layout
- Fast build times with Vite
- Utility-first styling via Tailwind
- Modular component structure

## :globe_with_meridians: Live Demo
:point_right: https://www.SomeLinkHere.com

## :incoming_envelope: Contact
- My LinkedIn
- My GitHub
- Email: davidbrockturner@outlook.com
