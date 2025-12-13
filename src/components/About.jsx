import React from 'react';
import { Linkedin, Twitter, Github, Instagram } from 'lucide-react';
import '../styles/About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container about-container">

                {/* Profile Image (Left) */}
                <div className="profile-image-wrapper">
                    <div className="profile-card">
                        <img
                            src="/src/assets/Jai Image.jpg"
                            alt="Jai"
                            className="profile-img"
                            onError={(e) => { e.target.src = 'https://via.placeholder.com/400x500?text=Profile+Photo'; }}
                        />
                    </div>
                </div>

                {/* Content (Right) */}
                <div className="about-content">
                    <div className="social-links">
                        {/* Tool Stack */}
                        <img src="/src/assets/Figma.png" alt="Figma" className="social-icon" title="Figma" />
                        <img src="/src/assets/Photoshop.png" alt="Photoshop" className="social-icon" title="Photoshop" />
                        <img src="/src/assets/Framer.png" alt="Framer" className="social-icon" title="Framer" />
                        <img src="/src/assets/Adobe XD.png" alt="Adobe XD" className="social-icon" title="Adobe XD" />
                    </div>

                    <h2 className="about-heading">
                        I'm Jai — shaped by tech, inspired by people, driven by design.
                    </h2>

                    <p className="about-description">
                        My approach to creating intuitive digital experiences involves a deep understanding of user needs combined with visual storytelling. I bridge the gap between complex engineering and human-centric design.
                    </p>

                    <div>
                        <a
                            href="https://www.linkedin.com/in/jai-tej-17b717262/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linkedin-button"
                            style={{ textDecoration: 'none', boxSizing: 'border-box' }}
                        >
                            <Linkedin size={18} /> LinkedIn
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
