import React from 'react';
import './AboutMe.css';
import JaiImage from '../assets/jai.png';

const AboutMe = () => {
  return (
    <section className="about-container">

      {/* Left Column: Polaroid */}
      <div className="polaroid-wrapper w-[150px] md:w-[300px]">
        <div>
          <img
            src={JaiImage}
            alt="Jai Tej"
            className="polaroid-img"
          />
        </div>
      </div>

      {/* Right Column: Content */}
      <div className="content-wrapper">
        <h2 className="about-headline">
          I’m Jai — shaped by tech, <br className="hidden md:block" />
          inspired by people, driven by <br className="hidden md:block" />
          design.
        </h2>
        <p className="about-description">
          I’m someone who believes in calm interfaces, intentional choices,
          and designs that guide without noise. Every project I take on carries
          a piece of my journey — and if you look closely, you’ll see it.
        </p>
      </div>

      {/* 
                The reference image showed a drone/radio here. 
                Use 'soi_bot.glb' or similar if intended, but user asked to remove the folder.
                Leaving this space clean for now as requested.
             */}

    </section>
  );
};

export default AboutMe;
