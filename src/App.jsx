import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainContent = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      {/* Key added to re-trigger animation on navigation */}
      <Hero key={location.pathname} />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<MainContent />} />
      </Routes>
    </Router>
  );
};

export default App;

// This is the main App component where you can include your theme toggle and other components.
// It imports the ThemeToggle component and the Hero component.
// The ThemeToggle component allows users to switch between light and dark themes.
// The Hero component can be used to display a hero section or banner on the page.
// You can add more components and functionality as needed for your application.
// The App component is the root component of your React application.
// It serves as the entry point for your application and can be rendered in the main index file.
// The ThemeToggle component is responsible for toggling the theme between light and dark modes.