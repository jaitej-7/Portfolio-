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

const App = () => {
  const [canvasPosition, setCanvasPosition] = React.useState(null);


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
      } else if (hash === '#experience') {
        setCanvasPosition({ x: -EXPERIENCE_POS_X, y: -EXPERIENCE_POS_Y, trigger });
      } else if (hash === '#work') {
        setCanvasPosition({ x: -WORK_POS_X, y: -WORK_POS_Y, trigger });
      } else if (hash === '#contact') {
        setCanvasPosition({ x: -CONTACT_POS_X, y: -CONTACT_POS_Y, trigger });
      } else {
        // Default/Hero position
        setCanvasPosition({ x: 0, y: 0, trigger });
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
    } else if (hashId === '#experience') {
      setCanvasPosition({ x: -EXPERIENCE_POS_X, y: -EXPERIENCE_POS_Y, trigger });
    } else if (hashId === '#work') {
      setCanvasPosition({ x: -WORK_POS_X, y: -WORK_POS_Y, trigger });
    } else if (hashId === '#contact') {
      setCanvasPosition({ x: -CONTACT_POS_X, y: -CONTACT_POS_Y, trigger });
    } else {
      setCanvasPosition({ x: 0, y: 0, trigger });
    }
  };

  return (
    <div className="h-screen w-full relative selection:bg-yellow-200 selection:text-black overflow-hidden">
      {/* Fixed UI Overlays - Kept OUTSIDE the canvas so they don't move */}
      <Header onReset={resetToHero} />
      <BottomNavBar onNavigate={handleNavigation} />
      <HelicopterScene />

      <InfiniteCanvas targetPosition={canvasPosition}>
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
