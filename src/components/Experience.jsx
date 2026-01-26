import React, { useState } from 'react';
import './Experience.css';
import GADigitalLogo from '../assets/GA Digital.png';
import TechpixeLogo from '../assets/Techpixe.png';
import TGAFLogo from '../assets/TGAF.png';
import EdyGradLogo from '../assets/EDYGrad.png';


const experienceData = [
    {
        id: 1,
        company: "G A Digital Solutions",
        logo: GADigitalLogo,
        role: "UI/UX Designer",
        date: "Feb 2025 - Present",
        desc: "Led end-to-end UI/UX for AI-driven SaaS platforms like GA Grid and HireSync, focusing on complex workflow optimization. Built the Quantum Design System (QDS), reducing developer handoff time by 30%, and designed GradArena.ai using AI-assisted workflows."
    },
    {
        id: 2,
        company: "Techpixe",
        logo: TechpixeLogo,
        role: "UX/UI Designer Executive",
        date: "Jul 2024 - Feb 2025",
        desc: "Designed responsive dashboards and enterprise platforms for Smart AI HR and Asram. Conducted user research and usability testing to drive data-backed design decisions while ensuring pixel-perfect implementation."
    },
    {
        id: 3,
        company: "EdyGrade",
        logo: EdyGradLogo,
        role: "UIUX Designer Intern",
        date: "Apr 2024 - Jul 2024",
        desc: "Refined Android app UX through research-driven UI updates, boosting usability ratings by 25%. Created high-fidelity wireframes and interactive prototypes in Figma to enhance user engagement."
    },
    {
        id: 4,
        company: "Talentship Global Advisory Forum",
        logo: TGAFLogo,
        role: "UI/UX Designer",
        date: "Oct 2023 - Dec 2023",
        desc: "Designed the Krishitantrick platform and company website, improving accessibility and usability. Delivered client-centric design solutions and prototypes in a consulting environment."
    }
];

const Experience = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % experienceData.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + experienceData.length) % experienceData.length);
    };

    return (
        <section className="experience-section">
            <div className="flex flex-col items-center mb-1">
                <h2 className="exp-title mb-2">Work Experience</h2>
            </div>

            <p className="exp-subtitle">
                From understanding users to prototyping solutions, each step adds clarity and purpose.
                This process helps me design products that feel natural and work the way people expect.
            </p>

            <div className="carousel-container">
                <button onClick={handlePrev} className="nav-btn left-btn" aria-label="Previous">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                <div className="cards-stack">
                    {experienceData.map((item, index) => {
                        // Calculate relative position in the stack (0 = Front, 1 = Middle, 2 = Back/Hidden)
                        const length = experienceData.length;
                        const relativeIndex = (index - activeIndex + length) % length;

                        // Map relative index to specific positioning classes
                        let positionClass = '';
                        if (relativeIndex === 0) positionClass = 'card-front';
                        else if (relativeIndex === 1) positionClass = 'card-middle';
                        else if (relativeIndex === 2) positionClass = 'card-back';
                        else positionClass = 'card-hidden';

                        return (
                            <div
                                key={item.id}
                                className={`card ${positionClass}`}
                            >
                                <div className="card-header">
                                    {item.logo ? (
                                        <img src={item.logo} alt={item.company} className="company-logo" />
                                    ) : (
                                        <div className="company-logo bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-400" style={{ width: '48px', height: '48px' }}>?</div>
                                    )}
                                    <h3 className="company-title">{item.company}</h3>
                                </div>
                                <div className="role-description text-sm max-h-[220px] pr-0 md:pr-2">
                                    <p className="leading-relaxed text-[#393D40] text-left">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="card-footer mt-auto pt-1 md:pt-4 border-t border-gray-100">
                                    <span className="role-tag">{item.role}</span>
                                    <span className="date-tag">{item.date}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button onClick={handleNext} className="nav-btn right-btn" aria-label="Next">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default Experience;
