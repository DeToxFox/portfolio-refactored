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

### :hammer_and_wrench: Tailwind Setup (v3) [(using v4? → click here)](#hammer_and_wrench-tailwind-setup-for-users-with-v4)

Tailwind CSS v3 is configured using ESM-style modules to align with Vite’s setup:
```bash
npm install -D tailwindcss@3.4.3 postcss autoprefixer
```
touch postcss.config.js
```bash
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```
touch tailwind.config.js
```bash
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // or 'class' for toggle support
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
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
- System and manual dark mode toggle
- Modular component structure
- Fast build times with Vite
- Utility-first styling via Tailwind


## :globe_with_meridians: Live Demo
:point_right: https://www.SomeLinkHere.com

## :incoming_envelope: Contact
- My LinkedIn
- My GitHub
- Email: davidbrockturner@outlook.com

### :hammer_and_wrench: Tailwind Setup for users with v4

Tailwind v4 separates the PostCSS plugin into @tailwindcss/postcss, which requires additional configuration. If you're upgrading from v3:

```bash
npm install -D tailwindcss@latest postcss autoprefixer @tailwindcss/postcss
```
Update postcss.config.js
```bash
import tailwindcssPostcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [tailwindcssPostcss(), autoprefixer()],
};
```
NOTE: Vite and Tailwind v4 may require ESM compatibility and a working Vite plugin configuration to avoid runtime build errors.