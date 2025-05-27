import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.documentElement.classList.add(savedTheme);
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
// This code initializes a React application with a theme toggle feature.
// It checks for a saved theme in localStorage and applies it if available.
// If no saved theme is found, it checks the user's system preference for dark mode and applies it accordingly.
// The application is rendered in strict mode, which helps identify potential problems in the application.
// The main entry point of the application is the App component, which can include various components and functionality as needed.
// The code also imports a CSS file for styling the application.
// The use of StrictMode helps ensure that the application adheres to best practices and can help catch potential issues early in development.
// The saved theme is stored in localStorage to persist the user's preference across sessions.
// The use of `createRoot` from 'react-dom/client' is part of the React 18 API for rendering the application.
// The application can be further extended with additional components and features as needed.
// This setup allows for a responsive and user-friendly theme management system in the React application.
// The code is structured to ensure that the theme is applied consistently across the application,
// enhancing the user experience by respecting their preferences for light or dark mode.
// The use of `localStorage` allows the theme preference to persist even after the user closes the browser or refreshes the page.
// This approach ensures that the application is accessible and visually appealing to a wide range of users,
// regardless of their personal preferences for light or dark themes.
