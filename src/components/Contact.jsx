import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'; // Import axios for potential future API calls

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const formRef = useRef();

  useEffect(() => {
    const handleInteraction = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setSuccessMessage('');
      }
    };

    if (successMessage) {
      document.addEventListener('mousedown', handleInteraction);
    }

    return () => {
      document.removeEventListener('mousedown', handleInteraction);
    };
  }, [successMessage]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formatName = (field) => {
    const value = formData[field];
    if (!value.trim()) return;
    const formatted = value
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
    setFormData({ ...formData, [field]: formatted });
  };
  // handleSubmit is an async function that handles the form submission.
  // It prevents the default form submission behavior, sends the form data to the server,
  // and updates the success message state based on the response.
  // This function uses axios to send a POST request to the server endpoint '/send'.
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post('http://localhost:5000/send', formData);
    setSuccessMessage('✅ Message Successfully Sent!');
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  } catch (err) {
    console.error('Error sending message', err);
    setSuccessMessage('❌ Failed to send message. Please try again later.');
  }
};
  // Note the return below is the JSX for the Contact component
  // It includes a contact form, direct email link, and resume download/view options.
  // The above code handles form submission, input formatting, and success message display.
  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-20 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Side – Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-black dark:text-white mb-2">Get In Touch</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Fields marked with <span className="text-red-500">*</span> are required.
          </p>

          {successMessage && (
            <div className="mb-4 text-green-600 dark:text-green-400 font-semibold">
              {successMessage}
            </div>
          )}

          <form className="space-y-4" ref={formRef} onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={() => formatName('firstName')}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  onBlur={() => formatName('lastName')}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded dark:bg-gray-800 dark:text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side – Resume & Direct Email */}
        <div className="flex flex-col justify-center space-y-6">
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Prefer to reach out directly? Feel free to email me or view my resume below.
          </p>

          <a
            href="mailto:davidbrockturner@outlook.com"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            📧 Send Email
          </a>

          <a
            href="/DavidTurner_DevResume.pdf"
            download
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            📄 Download Resume
          </a>

          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            👁️ View Resume
          </button>
        </div>
      </div>

      {/* Resume Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 p-6 max-w-4xl w-full relative rounded-lg shadow-lg">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-red-500"
            >
              ✖
            </button>
            <iframe
              src="/DavidTurner_DevResume.pdf"
              className="w-full h-[80vh]"
              title="David Turner Resume"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;