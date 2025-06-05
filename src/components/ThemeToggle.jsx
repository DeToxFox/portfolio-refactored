// Save the icon-enhanced ThemeToggle.jsx into the appropriate structure for the user

// src/components/ThemeToggle.jsx
import { useEffect, useState } from 'react';
import toggleTheme from '../utils/toggleTheme';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const darkNow = stored === 'dark' || (!stored && prefers);
    setIsDark(darkNow);
  }, []);

  const handleToggle = () => {
    toggleTheme();
    setIsDark((prev) => !prev);
  };

  return (
    <button
      onClick={handleToggle}
      className="
        p-2 text-lg transition-colors
        bg-gray-200 rounded dark:bg-gray-800 dark:text-white
        hover:bg-gray-300 dark:hover:bg-gray-700
      "
      aria-label="Toggle theme"
    >
      {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggle;