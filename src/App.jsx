import React from 'react';
import Header from './components/Header';
import BottomNavBar from './components/BottomNavBar';
import InfiniteCanvas from './components/InfiniteCanvas';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';
import HelicopterScene from './components/HelicopterScene';
import SEO from './components/SEO';

const App = () => {
  const [canvasPosition, setCanvasPosition] = React.useState(null);
  const [scale, setScale] = React.useState(typeof window !== 'undefined' && window.innerWidth < 768 ? 0.8 : 1);
  const [currentSection, setCurrentSection] = React.useState('hero');

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.1, 0.5));
  const handleZoomReset = () => {
    setScale(1);
  };


  // Define exact position for About Me section on the canvas
  // You can "fix" (adjust) these values to place it anywhere on the artboard
  const ABOUT_POS_X = 900;
  const ABOUT_POS_Y = window.innerHeight; // Puts it exactly one screen down

  const EXPERIENCE_POS_X = 0;
  const EXPERIENCE_POS_Y = window.innerHeight * 2; // Two screens down

  // Work Section: Custom Position
  // You can change these values to move the Work section anywhere on the canvas
  const WORK_POS_X = -900;
  const WORK_POS_Y = window.innerHeight * 3;
  const WORK_SECTION_HEIGHT = '100vh'; // Customize viewport height for Work section

  // Contact Section: Placed relative to Work or independent
  const CONTACT_POS_X = 2500;
  const CONTACT_POS_Y = window.innerHeight;
  const CONTACT_SECTION_HEIGHT = '100vh'; // Customize viewport height for Contact section

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const trigger = Date.now();

      if (hash === '#about') {
        setCanvasPosition({ x: -ABOUT_POS_X, y: -ABOUT_POS_Y, trigger });
        setCurrentSection('about');
      } else if (hash === '#experience') {
        setCanvasPosition({ x: -EXPERIENCE_POS_X, y: -EXPERIENCE_POS_Y, trigger });
        setCurrentSection('experience');
      } else if (hash === '#work') {
        setCanvasPosition({ x: -WORK_POS_X, y: -WORK_POS_Y, trigger });
        setCurrentSection('work');
      } else if (hash === '#contact') {
        setCanvasPosition({ x: -CONTACT_POS_X, y: -CONTACT_POS_Y, trigger });
        setCurrentSection('contact');
      } else {
        // Default/Hero position
        setCanvasPosition({ x: 0, y: 0, trigger });
        setCurrentSection('hero');
      }
    };

    // Check initial hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [ABOUT_POS_X, ABOUT_POS_Y, EXPERIENCE_POS_X, EXPERIENCE_POS_Y]);

  const resetToHero = () => {
    // Force reset even if hash doesn't change
    setCanvasPosition({ x: 0, y: 0 });
  };

  const handleNavigation = (hashId) => {
    // Force update position based on the clicked item, even if hash is same
    // We add a random 'trigger' timestamp to ensure the useEffect in InfiniteCanvas FIRES
    // even if x/y coordinates are identical to the previous command.
    const trigger = Date.now();

    if (hashId === '#about') {
      setCanvasPosition({ x: -ABOUT_POS_X, y: -ABOUT_POS_Y, trigger });
      setCurrentSection('about');
    } else if (hashId === '#experience') {
      setCanvasPosition({ x: -EXPERIENCE_POS_X, y: -EXPERIENCE_POS_Y, trigger });
      setCurrentSection('experience');
    } else if (hashId === '#work') {
      setCanvasPosition({ x: -WORK_POS_X, y: -WORK_POS_Y, trigger });
      setCurrentSection('work');
    } else if (hashId === '#contact') {
      setCanvasPosition({ x: -CONTACT_POS_X, y: -CONTACT_POS_Y, trigger });
      setCurrentSection('contact');
    } else {
      setCanvasPosition({ x: 0, y: 0, trigger });
      setCurrentSection('hero');
    }
  };

  const getSEOProps = () => {
    switch (currentSection) {
      case 'about':
        return { title: 'About Me', description: 'Learn more about Jai, a passionate Product Designer.' };
      case 'experience':
        return { title: 'Experience', description: 'Explore my professional journey and timeline.' };
      case 'work':
        return { title: 'My Work', description: 'A showcase of my recent design projects and case studies.' };
      case 'contact':
        return { title: 'Contact', description: 'Get in touch with me for collaborations and opportunities.' };
      default:
        return { title: 'Jai | Product Designer', description: 'Portfolio of Jai, a Product Designer specializing in creating intuitive and beautiful digital experiences.' };
    }
  };

  const seoProps = getSEOProps();

  return (
    <div className="h-screen w-full relative selection:bg-yellow-200 selection:text-black overflow-hidden">
      <SEO {...seoProps} />
      {/* Fixed UI Overlays - Kept OUTSIDE the canvas so they don't move */}
      <Header onReset={resetToHero} />
      <BottomNavBar
        onNavigate={handleNavigation}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onZoomReset={handleZoomReset}
        currentScale={scale}
      />
      <HelicopterScene />

      <InfiniteCanvas targetPosition={canvasPosition} scale={scale}>
        <main className="w-full h-full relative z-0 flex items-center justify-center">
          <Hero />
        </main>

        {/* About Me Section - Explicitly positioned */}
        <div
          className="absolute z-10 w-full flex justify-center pointer-events-none"
          style={{
            left: ABOUT_POS_X,
            top: ABOUT_POS_Y,
            height: '100vh',
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <div className="pointer-events-auto w-full flex justify-center">
            <AboutMe />
          </div>
        </div>

        {/* Experience Section */}
        <div
          className="absolute z-10 w-full flex justify-center pointer-events-none"
          style={{
            left: EXPERIENCE_POS_X,
            top: EXPERIENCE_POS_Y,
            height: '100vh',
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <div className="pointer-events-auto w-full flex justify-center">
            <Experience />
          </div>
        </div>

        {/* Work Section */}
        <div
          className="absolute z-10 w-full flex justify-center pointer-events-none"
          style={{
            left: WORK_POS_X,
            top: WORK_POS_Y,
            height: WORK_SECTION_HEIGHT, // Customizable Height
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <div className="pointer-events-auto w-full flex justify-center">
            <Work />
          </div>
        </div>

        {/* Contact Section */}
        <div
          className="absolute z-10 w-full flex justify-center pointer-events-none"
          style={{
            left: CONTACT_POS_X,
            top: CONTACT_POS_Y,
            height: CONTACT_SECTION_HEIGHT, // Customizable Height
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <div className="pointer-events-auto w-full flex justify-center">
            <Contact />
          </div>
        </div>

      </InfiniteCanvas>
    </div>
  );
}

export default App;
