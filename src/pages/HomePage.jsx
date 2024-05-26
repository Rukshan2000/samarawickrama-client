import React, { useState, useEffect } from 'react';
import TopNav from '../components/TopNav';
import TopNavSm from '../components/TopNavSm';
import LandingPage from '../components/LandingPage';
import About from '../components/About';
// import Projects from '../components/Projects';
import Button from '../components/Button';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768); // Adjust breakpoint as needed
  const [showTopNav, setShowTopNav] = useState(false);
  const [showLandingPage, setShowLandingPage] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768); // Adjust breakpoint as needed
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Set a delay of 500 milliseconds before showing the TopNav
    const topNavTimeout = setTimeout(() => {
      setShowTopNav(true);
    }, 500);

    // Set a delay of 1000 milliseconds (1 second) before showing the LandingPage
    const landingPageTimeout = setTimeout(() => {
      setShowLandingPage(true);
    }, 1000);

    // Clear the timeouts to prevent memory leaks
    return () => {
      clearTimeout(topNavTimeout);
      clearTimeout(landingPageTimeout);
    };
  }, []);

  return (
    <div className="bg-white">
      <h1>WEBSITE UNDER DEVELOPMENT</h1>
      {showTopNav && (isLargeScreen ? <TopNav /> : <TopNavSm />)}
      <section id="landing" style={{ opacity: showLandingPage ? 1 : 0, transition: 'opacity 1s' }}>
        <LandingPage />
      </section>
      <section id="about">
        <About />
      </section>
      {/* <section id="projects">
        <Projects />
      </section> */}
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      < Button/>
    </div>
  );
};

export default HomePage;
