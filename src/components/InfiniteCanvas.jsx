import React, { useState, useEffect } from 'react';

const InfiniteCanvas = ({ children, targetPosition, scale = 1 }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // Sync with targetPosition if provided
    useEffect(() => {
        if (targetPosition) {
            setPosition(targetPosition);
        }
    }, [targetPosition]);

    // Calculate background position based on canvas position
    // The dots are made using a CSS radial-gradient.
    // 'radial-gradient(#bcbcbd 1.3px, transparent 1.3px)' creates a 1.3px circle of color #bcbcbd.
    // 'backgroundSize: 32px 32px' repeats this pattern every 32px.
    const backgroundPosition = `${position.x}px ${position.y}px`;

    return (
        <div className="w-full h-screen overflow-hidden relative bg-white">

            {/* Background Layer - Independent of Scale to avoid pixelation/distortion if desired, 
                OR scale it if we want the grid to zoom too. 
                Usually, infinite canvas grids PAN but don't ZOOM (or zoom independently).
                For now, applying pan but NO zoom to background to keep it clean, 
                OR moving it inside to zoom with content. 
                Based on previous code, it was on the wrapper.
            */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#bcbcbd 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    backgroundPosition: backgroundPosition,
                    /* Optional: Apply scale to background too? 
                       transform: `scale(${scale})`, transformOrigin: 'center' 
                       If users want grid to zoom, uncomment. Currently keeping fixed size dots for clarity.
                    */
                }}
            />

            {/* Scale Layer - Handles Zooming around the Center */}
            <div
                className="absolute top-0 left-0 w-full h-full transform origin-center will-change-transform"
                style={{
                    transform: `scale(${scale})`,
                    transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
            >
                {/* Translate Layer - Handles Panning */}
                <div
                    className="absolute top-0 left-0 w-full h-full will-change-transform"
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px)`,
                        transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default InfiniteCanvas;
