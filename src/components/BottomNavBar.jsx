import React, { useState, useEffect } from 'react';
import { User, Briefcase, PenTool, Phone, Minus, Plus, HelpCircle, Home, RotateCcw, MessageSquare } from 'lucide-react';

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
        { id: '#about', icon: aboutIcon, label: 'About' },
        { id: '#experience', icon: expIcon, label: 'Experience' },
        { id: '#work', icon: workIcon, label: 'Work' },
        { id: '#contact', icon: contactIcon, label: 'Contact' },
    ];

    const percentage = Math.round(currentScale * 100);

    return (
        <div className="fixed md:bottom-6 bottom-0 w-full md:px-6 px-0 pointer-events-none z-[100] flex justify-center items-center">

            {/* Container: M3 on mobile, Figma on md+ */}
            <div className="pointer-events-auto w-full md:w-auto bg-[#F7F9FC] md:bg-white border-t border-gray-200 md:border md:shadow-[0_4px_24px_rgba(0,0,0,0.06)] md:rounded-xl flex items-center justify-between md:justify-center p-1 md:p-1.5 pb-safe md:pb-1.5 gap-0 md:gap-1">

                {/* Left Section: Navigation Items */}
                <div className="flex items-center justify-evenly w-full md:w-auto md:gap-1 md:px-1">
                    {navItems.map((item) => {
                        const isActive = activeTab === item.id;
                        return (
                            <a
                                key={item.id}
                                href={item.id}
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (onNavigate) onNavigate(item.id);
                                    if (window.location.hash !== item.id) window.location.hash = item.id;
                                }}
                                className={`
                                    relative group flex flex-col md:flex-row items-center justify-center transition-all duration-150
                                    flex-1 max-w-[4.5rem] md:flex-none md:max-w-none md:w-10 md:h-10 h-16 rounded-2xl md:rounded-lg
                                    ${isActive 
                                        ? 'md:bg-[#18A0FB] md:text-white md:shadow-sm' 
                                        : 'md:hover:bg-gray-100 text-gray-700'
                                    }
                                `}
                            >
                                {/* Mobile M3 Active Pill */}
                                <div className={`
                                    absolute md:hidden top-1.5 w-14 h-8 rounded-full transition-all duration-300 z-0
                                    ${isActive ? 'bg-[#C2E7FF] opacity-100 scale-100' : 'bg-transparent opacity-0 scale-90'}
                                `}></div>

                                {/* Tooltip (Desktop Only) */}
                                <span className="hidden md:block absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[11px] font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-50">
                                    {item.label}
                                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></span>
                                </span>

                                {/* Icon Wrapper */}
                                <div className="relative z-10 flex items-center justify-center w-8 h-8 md:w-full md:h-full mt-1.5 md:mt-0">
                                    {item.isLucide ? (
                                        <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} className={`md:w-[18px] md:h-[18px] transition-colors duration-200 ${isActive ? 'md:text-white text-[#001D35]' : 'md:text-gray-700 text-[#44474E]'}`} />
                                    ) : (
                                        <img
                                            src={item.icon}
                                            alt={item.label}
                                            className={`w-[22px] h-[22px] md:w-5 md:h-5 object-contain transition-all duration-200 ${
                                                isActive ? 'md:brightness-0 md:invert brightness-0 opacity-90' : 'opacity-60 grayscale'
                                            }`}
                                        />
                                    )}
                                </div>

                                {/* Label (Mobile Only) */}
                                <span className={`md:hidden relative z-10 text-[11px] mt-0.5 mb-1 transition-colors duration-200 tracking-tight ${isActive ? 'text-[#001D35] font-bold' : 'text-[#44474E] font-medium'}`}>
                                    {item.label}
                                </span>
                            </a>
                        );
                    })}
                </div>

                {/* Vertical Divider (Desktop Only) */}
                <div className="hidden md:block w-[1px] h-8 bg-gray-200 mx-1"></div>

                {/* Right Section: Zoom & Tools (Desktop Only) */}
                <div className="hidden md:flex items-center gap-1 bg-[#F4F4F4] rounded-lg p-0.5 mx-1">
                    <button
                        onClick={onZoomReset}
                        className="group relative w-8 h-8 flex items-center justify-center rounded-md hover:bg-white hover:shadow-sm text-gray-500 hover:text-gray-800 transition-all"
                    >
                        <RotateCcw size={16} strokeWidth={2} />
                        {/* Tooltip for Reset */}
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[11px] font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-50">
                            Reset Zoom
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></span>
                        </span>
                    </button>

                    <button
                        onClick={onZoomOut}
                        className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white hover:shadow-sm text-gray-500 hover:text-gray-800 transition-all"
                    >
                        <Minus size={16} strokeWidth={2} />
                    </button>

                    <div className="h-8 px-1 flex items-center justify-center text-gray-600 text-xs font-semibold tabular-nums min-w-[2.5rem]">
                        {percentage}%
                    </div>

                    <button
                        onClick={onZoomIn}
                        className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white hover:shadow-sm text-gray-500 hover:text-gray-800 transition-all"
                    >
                        <Plus size={16} strokeWidth={2} />
                    </button>
                </div>
                
                {/* Vertical Divider (Desktop Only) */}
                <div className="hidden md:block w-[1px] h-8 bg-gray-200 mx-1"></div>

                {/* Extra Tools (Help) (Desktop Only) */}
                <div className="hidden md:flex items-center pr-1">
                    <button
                        className="group relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 transition-all"
                    >
                        <HelpCircle size={18} strokeWidth={2} />

                        {/* Rich Help Popover */}
                        <div
                            className={`absolute -top-[7.5rem] right-0 bg-white border border-gray-200 shadow-xl p-3 rounded-xl transition-all duration-200 pointer-events-none w-48 text-left z-50
                                ${showHelpTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}
                            `}
                        >
                            <h3 className="text-xs font-semibold text-gray-800 mb-1.5 flex items-center gap-1.5">
                                <HelpCircle size={12} strokeWidth={2.5} /> Navigation Guide
                            </h3>
                            <ul className="text-[11px] text-gray-500 space-y-1 list-disc pl-4 leading-relaxed">
                                <li>Use the <strong>Menu</strong> to jump to specific sections.</li>
                                <li>Use <strong>Zoom</strong> controls to adjust your view.</li>
                            </ul>

                            {/* Arrow */}
                            <div className="absolute -bottom-1.5 right-4 w-3 h-3 bg-white border-b border-r border-gray-200 rotate-45"></div>
                        </div>
                    </button>
                </div>
                
            </div>
        </div>
    );
};

export default BottomNavBar;
