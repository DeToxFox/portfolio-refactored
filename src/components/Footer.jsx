import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 bg-white dark:bg-black text-center text-sm text-gray-600 dark:text-gray-400">
      <p>&copy; {new Date().getFullYear()} David Turner. All rights reserved.</p>
    </footer>
  );
};

export default Footer;