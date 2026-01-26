import React, { useRef } from 'react';
import './Work.css';
import GridImg from '../assets/Grid.jpg';
import QuantumImg from '../assets/Quantum Design system.jpg';
import GradArenaImg from '../assets/GradArena.jpg';

const workData = [
    {
        id: 1,
        image: GridImg,
        title: "The Grid",
        description: "GRID is a centralized operations management system designed to help teams manage tasks, approvals, and timesheets in one unified platform.",
        link: "https://www.figma.com/proto/SFp3cT2KQ3c9Hhx30Y0OhV/Untitled?page-id=0%3A1&node-id=96-22&viewport=-1120%2C607%2C0.14&t=qM3rViuSerdAlKHZ-8&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=16%3A2&hide-ui=1"
    },
    {
        id: 2,
        image: QuantumImg,
        title: "Quantum Design System",
        description: "Quantum Design System is a scalable design foundation created to ensure consistency, speed, and clarity across digital products.",
        link: "https://www.figma.com/proto/SFp3cT2KQ3c9Hhx30Y0OhV/Portfolio?page-id=0%3A1&node-id=100-193&viewport=-2073%2C633%2C0.19&t=LlwNGzH1rwfBGEUC-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=16%3A2"
    },
    {
        id: 3,
        image: GradArenaImg,
        title: "GradArena",
        description: "GradArena is an AI-based proctored assessment platform designed to conduct secure, scalable online tests for students and graduates.",
        link: "https://www.figma.com/proto/SFp3cT2KQ3c9Hhx30Y0OhV/Portfolio?page-id=0%3A1&node-id=110-399&viewport=-2073%2C633%2C0.19&t=LlwNGzH1rwfBGEUC-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=16%3A2"
    }
];

import FadeUpText from './FadeUpText';

const Work = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 344; // 320px card + 24px gap
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="work-section">
            <div className="work-header">
                <FadeUpText
                    text="How I Turn Ideas Into Experiences"
                    className="text-[24px] md:text-[36px] font-['Noto_Sans'] font-semibold text-[#292929] leading-[1.2] mb-2 max-w-4xl mx-auto px-4"
                    delay={0.2}
                />
                <p className="work-subtitle">
                    Every project I take on follows a five-step process—empathy, definition, ideation, design, and prototyping—<br className="hidden md:block" />
                    that helps me uncover insights, shape concepts, and build intuitive digital products.
                </p>
            </div>

            <div className="carousel-container">
                <button onClick={() => scroll('left')} className="nav-button left-btn" aria-label="Previous project">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                <div className="carousel-track" ref={scrollRef}>
                    {workData.map((item) => (
                        <a
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="work-card group cursor-pointer"
                        >
                            <div className="card-image-container relative overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="card-image transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="card-content mt-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="font-bold text-lg text-[#111] group-hover:text-[#0077b6] transition-colors">{item.title}</h3>
                                    <span className="case-study-tag">Case Study</span>
                                </div>
                                <p className="card-description text-sm text-gray-500 leading-relaxed line-clamp-3">
                                    {item.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>

                <button onClick={() => scroll('right')} className="nav-button right-btn" aria-label="Next project">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default Work;
