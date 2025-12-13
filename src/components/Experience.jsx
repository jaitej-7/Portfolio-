import React from 'react';
import '../styles/Experience.css';
import GAIcon from '../assets/GA Digital.png';
import TechpixeIcon from '../assets/Techpixe.png';
import EdyIcon from '../assets/EDYGrad.png';
import TGAFIcon from '../assets/TGAF.png';

const ExperienceCard = ({ company, location, role, date, description, logoIcon, logoColor }) => {
    return (
        <div className="experience-card">
            <div className="exp-card-header">
                <div className="exp-logo" style={{ backgroundColor: logoColor || '#f4f4f5' }}>
                    <img src={logoIcon} alt={company} style={{ width: '28px', height: 'auto' }} />
                </div>
                <h3 className="exp-company">
                    {company}, <span className="exp-location">{location}</span>
                </h3>
            </div>

            <p className="exp-description">{description}</p>

            <div className="exp-footer">
                <span className="exp-role">{role}</span>
                <span className="exp-date">{date}</span>
            </div>
        </div>
    );
};

const Experience = () => {
    const experiences = [
        {
            company: "G A Digital Solutions",
            location: "Hyderabad",
            logoIcon: GAIcon,
            logoColor: "#FFFFFF",
            role: "UI/UX Designer",
            date: "FEB 2025 - Present",
            description: "At GA Digital Solutions, I'm leading the UI/UX design efforts for two enterprise-level platforms: Hiresync and Digital Operations Management System (DOMS). My role revolves around transforming complex systems into seamless user experiences that drive clarity, efficiency, and adoption across corporate environments."
        },
        {
            company: "Techpixe",
            location: "Hyderabad",
            logoIcon: TechpixeIcon,
            logoColor: "#FFFFFF",
            role: "UI/UX Designer Executive",
            date: "JULY 2024 - FEB 2025",
            description: "As a UI/UX Designer, I lead high-impact projects using design thinking to create intuitive dashboards and AI tools. My work involves user research, wireframes, and ensuring brand alignment. Achievements include reducing timelines by 15% and enhancing client engagement."
        },
        {
            company: "Edygrade",
            location: "Visakhapatnam",
            logoIcon: EdyIcon,
            logoColor: "#FFFFFF",
            role: "UI/UX Designer Intern",
            date: "APR 2024 - JULY 2024",
            description: "During my internship as a UI/UX Designer, I improved EdyGrade's Android app usability. By applying design strategies, I developed prototypes that enhanced accessibility and user satisfaction, leading to a 25% increase in usability ratings."
        },
        {
            company: "TGAF",
            location: "Noida",
            logoIcon: TGAFIcon,
            logoColor: "#FFFFFF",
            role: "UI/UX Designer Intern",
            date: "OCT 2023 - DEC 2023",
            description: "At Talentship, I worked as a UI/UX Designer, creating user-friendly interfaces for the Krishitantrick platform and the landing page. My designs improved usability, accessibility, and client retention."
        }
    ];

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title">Work Experience</h2>
                <p className="section-subtitle">
                    From understanding users to prototyping solutions, each step adds clarity and purpose.
                    This process helps me design products that feel natural and work the way people expect.
                </p>

                <div className="experience-list">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
