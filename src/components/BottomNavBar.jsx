import React, { useState, useEffect } from 'react';
import { User, Briefcase, PenTool, Phone, Minus, Plus, HelpCircle, Home, RotateCcw } from 'lucide-react';

// Import your icons here
import aboutIcon from '../assets/About Link Container.svg';
import expIcon from '../assets/Experience.svg';
import workIcon from '../assets/work.svg';
import contactIcon from '../assets/Contact.svg';

const BottomNavBar = ({ onNavigate, onZoomIn, onZoomOut, onZoomReset, currentScale = 1 }) => {
    const [activeTab, setActiveTab] = useState('');
    const [showHelpTooltip, setShowHelpTooltip] = useState(true);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (['#home', '#about', '#experience', '#work', '#contact'].includes(hash)) {
                setActiveTab(hash);
            } else {
                setActiveTab('');
            }
        };

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    // Initial tooltip highlight timer
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowHelpTooltip(false);
        }, 4000); // Hide after 4 seconds
        return () => clearTimeout(timer);
    }, []);

    const navItems = [
        { id: '#home', label: 'Home', icon: Home, isLucide: true },
        { id: '#about', icon: aboutIcon, activeIcon: aboutIcon, label: 'About' },
        { id: '#experience', icon: expIcon, activeIcon: expIcon, label: 'Experience' },
        { id: '#work', icon: workIcon, activeIcon: workIcon, label: 'Work' },
        { id: '#contact', icon: contactIcon, activeIcon: contactIcon, label: 'Contact' },
    ];

    const percentage = Math.round(currentScale * 100);

    return (
        <div className="fixed bottom-6 w-full px-6 pointer-events-none z-[100] flex justify-center items-center">

            {/* Unified Toolbar Container (Center) */}
            <div className="pointer-events-auto bg-white border border-gray-200 shadow-xl rounded-full flex items-center px-2 py-2 gap-1 md:gap-2">

                {/* Navigation Items */}
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={item.id}
                        onClick={(e) => {
                            e.preventDefault();
                            if (onNavigate) onNavigate(item.id);
                            if (window.location.hash !== item.id) window.location.hash = item.id;
                        }}
                        className={`
                            relative group flex items-center justify-center rounded-full transition-all duration-200
                            w-10 h-10 md:w-12 md:h-12
                            hover:bg-gray-50
                        `}
                    >
                        {/* Tooltip */}
                        <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-sm">
                            {item.label}
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-800 rotate-45"></span>
                        </span>

                        {item.isLucide ? (
                            <item.icon size={20} className={`${activeTab === item.id ? 'text-[#0077b6]' : 'text-gray-500'} transition-colors`} />
                        ) : item.isText ? (
                            <span className={`font-medium text-sm ${activeTab === item.id ? 'text-[#0077b6]' : 'text-gray-500'}`}>
                                H
                            </span>
                        ) : (
                            <img
                                src={activeTab === item.id ? item.activeIcon : item.icon}
                                alt={item.label}
                                className={`w-5 h-5 md:w-6 md:h-6 object-contain transition-all duration-300 ${activeTab === item.id ? 'filter-primary scale-110' : 'opacity-60 grayscale'}`}
                            />
                        )}
                    </a>
                ))}
            </div>

            {/* Zoom Controls (Bottom Right) */}
            <div className="absolute right-6 bottom-0 pointer-events-auto bg-white border border-gray-200 shadow-xl rounded-full hidden md:flex items-center px-2 py-2 gap-0">
                {/* Reset Button */}
                <button
                    onClick={onZoomReset}
                    className="group relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-50 text-gray-500 hover:text-black transition-colors"
                >
                    <RotateCcw size={16} />
                    {/* Tooltip for Reset */}
                    <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-sm z-50">
                        Reset Zoom
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-800 rotate-45"></span>
                    </span>
                </button>

                <div className="w-px h-4 bg-gray-200 mx-1"></div>

                <button
                    onClick={onZoomOut}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-50 text-gray-500 hover:text-black transition-colors"
                >
                    <Minus size={16} />
                </button>

                <div
                    className="h-8 px-2 flex items-center justify-center text-gray-500 text-xs font-medium min-w-[3rem]"
                >
                    {percentage}%
                </div>

                <button
                    onClick={onZoomIn}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-50 text-gray-500 hover:text-black transition-colors"
                >
                    <Plus size={16} />
                </button>

                <button
                    className="group relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-50 text-gray-500 hover:text-black transition-colors"
                >
                    <HelpCircle size={16} />

                    {/* Rich Help Popover */}
                    <div
                        className={`absolute -top-[7.5rem] right-0 bg-white border border-gray-100 shadow-xl p-3 rounded-lg transition-all duration-200 pointer-events-none w-48 text-left z-50
                            ${showHelpTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}
                        `}
                    >
                        <h3 className="text-xs font-semibold text-black mb-1.5 flex items-center gap-1">
                            <HelpCircle size={10} /> Navigation Guide
                        </h3>
                        <ul className="text-[10px] text-gray-500 space-y-1 list-disc pl-4 leading-relaxed">
                            <li>Use the <strong>Menu</strong> to jump to specific sections.</li>
                            <li>Use <strong>Zoom</strong> controls to adjust your view.</li>
                        </ul>

                        {/* Arrow */}
                        <div className="absolute -bottom-1.5 right-3 w-3 h-3 bg-white border-b border-r border-gray-100 rotate-45"></div>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default BottomNavBar;
