import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Get in Touch</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Let's connect! Feel free to send an email or reach out on social platforms.
      </p>
      <div className="flex justify-center space-x-6 mb-6">
        <a
          href="https://github.com/DeToxFox"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black dark:text-white text-2xl hover:text-blue-600 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/david-turner-24a3863b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black dark:text-white text-2xl hover:text-blue-600 transition"
        >
          <FaLinkedin />
        </a>
      </div>
      <a
        href="mailto:your.davidbrockturner@outlook.com"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Send Email
      </a>
    </section>
  );
};

export default Contact;

