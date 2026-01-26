import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section">


            <div className="contact-content">
                <h1 className="contact-title">
                    Let’s build something that actually works.
                </h1>

                <p className="contact-subtitle">
                    I’m always open to meaningful conversations — whether it’s a product challenge, a design
                    collaboration, or just a thoughtful discussion about UX and systems.
                </p>

                <a href="mailto:jaitej790@gmail.com" className="contact-cta">
                    Let’s talk product <span aria-hidden="true">→</span>
                </a>
            </div>

            <footer className="contact-footer">
                <a href="https://www.linkedin.com/in/jai-tej-17b717262" target="_blank" rel="noopener noreferrer" className="footer-link linkedin">LinkedIn</a>
                <a href="mailto:jaitej790@gmail.com" className="footer-link email">jaitej790@gmail.com</a>
            </footer>
        </section>
    );
};

export default Contact;
