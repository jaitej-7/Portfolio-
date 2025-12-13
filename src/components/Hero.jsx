import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="section" style={{
            position: 'relative',
            paddingTop: '24px', // 100px navbar + 24px gap
            paddingBottom: '48px',
            background: 'var(--bg-color)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            minHeight: '100vh'
        }}>
            <div className="container">

                {/* Text Content */}
                <div style={{ marginBottom: '16px', width: '100%', textAlign: 'left' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ marginBottom: '8px' }}
                    >
                        You’ll understand me better through the work than the words.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            // Inherit global styles (16px, 400, #393D40)
                        }}
                    >
                        <p>Every choice I make in design comes from somewhere — <br />
                        and if you’re curious enough, you’ll see the pattern.</p>
                    </motion.p>
                </div>

                {/* Hero Video - Standard (No Scroll Animation) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <div style={{ width: '100%' }}>
                        <video
                            width="100%"
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{
                                borderRadius: '1.5rem',
                                display: 'block',
                                maxWidth: '100%',
                            }}
                        >
                            <source src="/src/assets/06c399ebea97b406b4d31f3ffb5b3d14.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </motion.div>

            </div>
        </div>

    );
};

export default Hero;
