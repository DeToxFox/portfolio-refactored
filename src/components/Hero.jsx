const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Dark Mode Test</h1>
        <p className="mt-4 text-lg">This should be white on black when in dark mode.</p>
      </div>
    </section>
  );
};

export default Hero;


// import React from 'react'

// const Hero = () => {
//   return (
//     <section className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center px-4">
//       <div className="max-w-3xl text-center">
//         <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
//           David Turner
//         </h1>
//         <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
//           Full Stack Developer | Business Analyst | React & Python Enthusiast
//         </p>

//         <div className="mt-6 flex justify-center space-x-4">
//           <a
//             href="#projects"
//             className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//           >
//             View Projects
//           </a>
//           <a
//             href="#contact"
//             className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
//           >
//             Contact Me
//           </a>
//         </div>
//       </div>
//       <div className="bg-white text-black dark:bg-black dark:text-white p-4">
//   <p>This block should be black in dark mode and white in light mode.</p>
// </div>
//     </section>
//   )
// }

// export default Hero