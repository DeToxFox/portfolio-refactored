// import ThemeToggle from './components/ThemeToggle';/*Not needed anymore, integrated into Navbar*/
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
// import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      {/* <Footer /> optional for later */}
    </>
  );
}

export default App;
// This is the main App component where you can include your theme toggle and other components.
// It imports the ThemeToggle component and the Hero component.
// The ThemeToggle component allows users to switch between light and dark themes.
// The Hero component can be used to display a hero section or banner on the page.
// You can add more components and functionality as needed for your application.
// The App component is the root component of your React application.
// It serves as the entry point for your application and can be rendered in the main index file.
// The ThemeToggle component is responsible for toggling the theme between light and dark modes.