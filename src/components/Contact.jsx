import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [formSuccess, setFormSuccess] = useState('');
  const [showFormToast, setShowFormToast] = useState(false);
  const [showCopyToast, setShowCopyToast] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef();

  const emailAddress = 'davidbrockturner@outlook.com';

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/send', formData);
      if (response.status === 200) {
        setFormSuccess('Your message has been sent!');
        setShowFormToast(true);
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress).then(() => {
      setShowCopyToast(true);
      setTimeout(() => setShowCopyToast(false), 5000);
    });
  };

  useEffect(() => {
    const onClickOutside = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setShowFormToast(false);
      }
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  return (
    <section
      id="contact"
      className="
        py-20 px-4
        scroll-mt-24
        bg-light-mode-gradient dark:bg-dark-mode-gradient
        transition-colors duration-500
        animate-fade-in
      "
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT: Form */}
        <div ref={formRef}>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Fields marked with <span className="text-red-500">*</span> are required.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-colors duration-300"
            >
              Send Message
            </button>

            {showFormToast && (
              <div className="mt-4 px-4 py-2 bg-green-100 dark:bg-green-900 border-l-4 border-green-500 text-green-800 dark:text-green-200 rounded-md">
                {formSuccess}
              </div>
            )}
          </form>
        </div>

        {/* RIGHT: Direct Contact */}
        <div className="pt-2 md:pt-[8rem]">
          <p className="text-gray-700 dark:text-gray-200 text-base mb-6">
            Prefer to reach out directly? Feel free to email me or view my resume below.
          </p>

          {showCopyToast && (
            <div className="px-4 py-2 bg-green-500 text-white text-sm font-medium text-center rounded shadow w-max max-w-xs mb-4 ml-[0.625rem] sm:ml-[1.75rem]">
              📋 Email copied to clipboard!
            </div>
          )}

          <div className="flex flex-col space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${emailAddress}`}
                title="Opens your default email app"
                className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition"
              >
                📧 Send Email
              </a>

              <button
                onClick={handleCopyEmail}
                title="Copy email address to clipboard"
                className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition"
              >
                📋 Copy Email
              </button>
            </div>

            <a
              href="/DavidTurner_DevResume.pdf"
              download
              className="w-full px-6 py-4 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-md flex items-center gap-2"
            >
              ⬇️ Download Resume
            </a>

            <button
              onClickCapture={(e) => {
                e.stopPropagation();
                setShowModal(true);
                setShowCopyToast(false);
              }}
              className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md flex items-center justify-center gap-2"
            >
              👁️ View Resume
            </button>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden w-11/12 md:w-3/4 h-[80vh] shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white text-xl"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>
            <iframe
              src="/DavidTurner_DevResume.pdf"
              className="w-full h-full"
              title="David Turner Resume"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;