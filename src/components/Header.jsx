import React from 'react';
import logo from '../assets/Logo.jpg';
import ResumePDF from '../assets/Resume.pdf';

const Header = ({ onReset }) => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] py-6 flex justify-center pointer-events-none">
            <div className="w-full max-w-5xl px-6 flex justify-between items-center">
                {/* Logo */}
                <a
                    href="#"
                    className="pointer-events-auto cursor-pointer"
                    onClick={(e) => {
                        // We do NOT prevent default, so the URL hash updates to '#'
                        if (onReset) onReset();
                    }}
                >
                    <img src={logo} alt="TU Logo" className="w-[64px] h-[64px] object-contain" />
                </a>

                {/* Resume Button */}
                <a
                    href={ResumePDF}
                    target="_blank"
                    rel="noreferrer"
                    className="pointer-events-auto bg-[#0077b6] text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-[#006497] transition-colors shadow-md"
                >
                    Resume
                </a>
            </div>
        </nav>
    );
};

export default Header;
