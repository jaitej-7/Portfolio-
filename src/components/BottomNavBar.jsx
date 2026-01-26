import React, { useState, useEffect } from 'react';
import { User, Briefcase, PenTool, Phone } from 'lucide-react';

// Import your icons here
// Replace these imports with your actual active/inactive images
import aboutIcon from '../assets/About Link Container.svg'; // Placeholder if specific icon missing
import expIcon from '../assets/Experience.svg';
import workIcon from '../assets/work.svg';
import contactIcon from '../assets/Contact.svg';

const BottomNavBar = ({ onNavigate }) => {
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        const handleHashChange = () => {
            // If hash matches one of our items, set it. Otherwise (like empty hash), set to empty string.
            const hash = window.location.hash;
            if (['#home', '#about', '#experience', '#work', '#contact'].includes(hash)) {
                setActiveTab(hash);
            } else {
                setActiveTab('');
            }
        };

        // Set initial hash
        handleHashChange();

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const navItems = [
        { id: '#about', icon: aboutIcon, activeIcon: aboutIcon, label: 'About' },
        { id: '#experience', icon: expIcon, activeIcon: expIcon, label: 'Experience' },
        { id: '#work', icon: workIcon, activeIcon: workIcon, label: 'Work' },
        { id: '#contact', icon: contactIcon, activeIcon: contactIcon, label: 'Contact' },
    ];

    return (
        <div className="fixed bottom-4 md:bottom-6 left-0 right-0 z-[100] flex justify-center items-center gap-3 px-2 pointer-events-none transition-all duration-300">

            {/* Home Button - Side by Side */}
            <a
                href="#home"
                onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('#home');
                    if (window.location.hash !== '#home') window.location.hash = '#home';
                }}
                className="pointer-events-auto bg-white border border-gray-200 shadow-2xl rounded-full px-5 py-3 md:px-6 md:py-3 font-medium text-sm md:text-base text-gray-700 hover:text-black hover:bg-gray-50 transition-all duration-300 flex items-center justify-center shrink-0"
            >
                Home
            </a>

            {/* Nav Bar Pill */}
            <div className="pointer-events-auto bg-white border border-gray-200 shadow-2xl rounded-full flex items-center px-4 py-3 md:px-[20px] md:py-[12px] gap-5 md:gap-[52px] justify-center transition-all duration-300">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={item.id}
                        onClick={(e) => {
                            e.preventDefault();
                            if (onNavigate) onNavigate(item.id);
                            if (window.location.hash !== item.id) window.location.hash = item.id;
                        }}
                        className="transition-transform duration-300 relative group flex items-center justify-center"
                    >
                        {/* Tooltip (Hidden on Mobile) */}
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-sm hidden md:block">
                            {item.label}
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-800 rotate-45"></span>
                        </span>

                        <img
                            src={activeTab === item.id ? item.activeIcon : item.icon}
                            alt={item.label}
                            className={`w-6 h-6 md:w-10 md:h-10 object-contain transition-all duration-300 ${activeTab === item.id ? 'filter-primary scale-110' : 'opacity-60 hover:opacity-100'}`}
                        />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default BottomNavBar;
