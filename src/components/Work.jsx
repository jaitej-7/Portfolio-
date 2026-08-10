import React, { useRef, useState, useEffect } from 'react';
import './Work.css';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

import FadeUpText from './FadeUpText';

const Work = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const scrollPosition = scrollRef.current.scrollLeft;
        // Dynamically calculate item width based on the container to support responsive sizes
        const itemWidth = scrollRef.current.scrollWidth / projects.length;
        const newIndex = Math.round(scrollPosition / itemWidth);
        setActiveIndex(newIndex);
    };

    useEffect(() => {
        const currentRef = scrollRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', handleScroll);
            return () => currentRef.removeEventListener('scroll', handleScroll);
        }
    }, []);

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
                    {projects.map((item) => (

                        <Link
                            key={item.id}
                            to={`/project/${item.id}`}
                            className="work-card group cursor-pointer block"
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
                        </Link>
                    ))}
                </div>


                <button onClick={() => scroll('right')} className="nav-button right-btn" aria-label="Next project">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>

            <div className="flex justify-center items-center gap-2 mt-8 mb-24 md:mb-12">
                {projects.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            if (scrollRef.current) {
                                const itemWidth = scrollRef.current.scrollWidth / projects.length;
                                scrollRef.current.scrollTo({ left: idx * itemWidth, behavior: 'smooth' });
                            }
                        }}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-[#0077b6] w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Work;
