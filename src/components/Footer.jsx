import React, { useState } from 'react';
import '../styles/Footer.css';
import FooterLogo from '../assets/Footer Logo_2.jpg';
import ContactIcon from '../assets/Contact Icon.png';
import MailIcon from '../assets/Mail.png';
import LinkedinIcon from '../assets/mingcute_linkedin-line.png';

const Footer = () => {
    const [status, setStatus] = useState(''); // '', 'submitting', 'success', 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        setStatus('submitting');

        // Using Formspree for handling the email submission
        // You need to create a form at https://formspree.io/ and replace 'YOUR_FORM_ID' with your actual form ID
        const data = new FormData(form);
        data.append('_subject', 'New Portfolio Contact Message');

        try {
            const response = await fetch("https://formspree.io/f/xyzrobdo", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
                // Clear success message after 3 seconds matching animation
                setTimeout(() => setStatus(''), 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <footer className="footer-section">
            <div className="container footer-container">
                <div className="footer-left">
                    <img src={FooterLogo} alt="Logo" className="footer-logo" />
                    <div className="footer-contact">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <img src={ContactIcon} alt="Phone" />
                            </div>
                            <span className="contact-text">+919392950368</span>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <img src={MailIcon} alt="Email" />
                            </div>
                            <a href="mailto:jaitej790@gmail.com" className="contact-text">jaitej790@gmail.com</a>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <img src={LinkedinIcon} alt="LinkedIn" />
                            </div>
                            <a href="https://www.linkedin.com/in/jai-tej-17b717262/" target="_blank" rel="noopener noreferrer" className="contact-text">Linked in</a>
                        </div>
                    </div>
                </div>

                <div className="footer-right">
                    <h2 className="footer-heading">Let's Connect</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" id="name" name="name" className="form-input" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" id="email" name="email" className="form-input" placeholder="name@example.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea id="message" name="message" className="form-textarea" placeholder="Tell me about your project..." required></textarea>
                        </div>
                        <button type="submit" className="submit-btn" disabled={status === 'submitting'}>
                            {status === 'submitting' ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>



            {status === 'success' && (
                <div className="snackbar">
                    Input submitted!
                </div>
            )}
        </footer>
    );
};

export default Footer;
