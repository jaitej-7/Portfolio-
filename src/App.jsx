import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Experience from './components/Experience';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <div className="about-process-wrapper">
          <About />
          <Process />
        </div>
        <Experience />
        <Work />
      </main>
      <Footer />
    </div>
  );
}

export default App;
