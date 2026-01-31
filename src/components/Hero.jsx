import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import VibeFolder from '../assets/Vibe Coding folder.png';
import DesignFolder from '../assets/Design Folder.png';
import BlueSticky from '../assets/Blue sticky.png';
import YellowSticky from '../assets/Yellow sticky.png';
import ResumePDF from '../assets/Resume.pdf';

// --- Animation Components ---
import FadeUpText from './FadeUpText';

const Hero = () => {
    const containerRef = useRef(null);

    return (
        <div ref={containerRef} className="relative w-full h-screen flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden">

            {/* Main Content Layer */}
            <div className="relative z-60 text-center pointer-events-auto mt-[15vh] lg:mt-[12vh]">
                <h1 className="sr-only">Jai Tej - Product Designer</h1>
                <FadeUpText
                    text="You’ll understand me better through <br/> work than words."
                    className="text-[24px] lg:text-[28px] xl:text-[36px] font-['Noto_Sans'] font-semibold text-[#292929] leading-[1.3] mb-4 md:mb-6 max-w-4xl mx-auto px-4"
                    delay={0.2}
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-[14px] lg:text-[15px] xl:text-[16px] font-['Noto_Sans'] text-[#393D40] leading-[1.6] font-normal mb-8 max-w-xl mx-auto px-6"
                >
                    Every choice I make in design comes from somewhere — and if you’re curious enough, you’ll see the pattern.
                </motion.p>

                <motion.a
                    href="https://www.linkedin.com/in/jai-tej-17b717262/"
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: 0.6 }}
                    className="inline-block bg-[#0077b6] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#006497] transition-colors shadow-lg cursor-pointer"
                >
                    LinkedIn
                </motion.a>
            </div>


            {/* Interactive Elements Layer - Folders and Stickies */}
            {/* Using widths to scale down on Laptop (lg) without hiding */}

            {/* Top Left: Vibe Coding Folder */}
            <motion.img
                src={VibeFolder}
                alt="Vibe Coding"
                drag
                initial={{ opacity: 0, scale: 0.1, x: -100 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                }}
                whileHover={{ scale: 1.1, rotate: 5, zIndex: 50 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                    opacity: { duration: 0.8, delay: 0.2 },
                    scale: { duration: 0.8, delay: 0.2 },
                    x: { duration: 0.8, delay: 0.2 }
                }}
                className="hidden lg:block absolute top-[15%] left-[8%] w-32 lg:w-24 xl:w-48 h-auto object-contain pointer-events-auto cursor-grab active:cursor-grabbing"
            />

            {/* Top Right: Blue Sticky */}
            <motion.img
                src={BlueSticky}
                alt="Blue Sticky Note"
                drag
                initial={{ opacity: 0, scale: 0.8, x: 100 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                }}
                whileHover={{ scale: 1.1, rotate: -5, zIndex: 50 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                    opacity: { duration: 0.8, delay: 0.4 },
                    scale: { duration: 0.8, delay: 0.4 },
                    x: { duration: 0.8, delay: 0.4 }
                }}
                className="hidden lg:block absolute top-[18%] right-[10%] w-28 lg:w-16 xl:w-40 h-auto object-contain pointer-events-auto origin-center rotate-3 cursor-grab active:cursor-grabbing"
            />

            {/* Bottom Left: Yellow Sticky */}
            <motion.img
                src={YellowSticky}
                alt="Yellow Sticky Note"
                drag
                initial={{ opacity: 0, scale: 0.8, x: -100 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                }}
                whileHover={{ scale: 1.1, rotate: 5, zIndex: 50 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                    opacity: { duration: 0.8, delay: 0.6 },
                    scale: { duration: 0.8, delay: 0.6 },
                    x: { duration: 0.8, delay: 0.6 }
                }}
                className="hidden lg:block absolute bottom-[15%] left-[8%] w-28 lg:w-16 xl:w-40 h-auto object-contain pointer-events-auto origin-center -rotate-6 cursor-grab active:cursor-grabbing"
            />

            {/* Bottom Right: Design Folder */}
            <motion.img
                src={DesignFolder}
                alt="Design Folder"
                drag
                initial={{ opacity: 0, scale: 0.8, x: 100 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0
                }}
                whileHover={{ scale: 1.1, rotate: -5, zIndex: 50 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                    opacity: { duration: 0.8, delay: 0.8 },
                    scale: { duration: 0.8, delay: 0.8 },
                    x: { duration: 0.8, delay: 0.8 }
                }}
                className="hidden lg:block absolute bottom-[12%] right-[8%] w-40 lg:w-32 xl:w-64 h-auto object-contain pointer-events-auto cursor-grab active:cursor-grabbing"
            />

        </div>
    );
};

export default Hero;
