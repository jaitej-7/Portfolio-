import React from 'react';
import { motion } from 'framer-motion';

const FadeUpText = ({ text, className, delay = 0 }) => {
    // Split text into lines based on <br/> (robust regex for various br formats)
    const lines = text.split(/<br\s*\/?>/i);

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: delay }
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", damping: 12, stiffness: 100 },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: { type: "spring", damping: 12, stiffness: 100 },
        },
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className={`flex flex-col items-center text-center ${className}`}
        >
            {lines.map((line, lineIdx) => (
                <div key={lineIdx} className="flex flex-wrap justify-center">
                    {line.trim().split(" ").map((word, wordIdx) => (
                        <motion.span variants={child} key={wordIdx} className="mr-2 last:mr-0 inline-block">
                            {word}
                        </motion.span>
                    ))}
                </div>
            ))}
        </motion.div>
    );
};

export default FadeUpText;
