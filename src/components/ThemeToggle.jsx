import toggleTheme from '../utils/toggleTheme';

const ThemeToggle = () => {
  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded transition-colors"
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
// This component can be used anywhere in your app to toggle the theme.
// For example, you can place it in your App component or in a header.
// import it in your App.jsx or any other component where you want to use it
// and include it like this: <ThemeToggle />
