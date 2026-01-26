import React, { useState, useRef, useEffect } from 'react';

const InfiniteCanvas = ({ children, targetPosition }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    // Dragging logic removed per request

    // Sync with targetPosition if provided
    useEffect(() => {
        if (targetPosition) {
            setPosition(targetPosition);
        }
    }, [targetPosition]);

    // Calculate background position based on canvas position
    const backgroundPosition = `${position.x}px ${position.y}px`;

    return (
        <div
            className="w-full h-screen overflow-hidden relative bg-white"
            style={{
                backgroundImage: 'radial-gradient(#bcbcbd 1.3px, transparent 1.3px)',
                backgroundSize: '32px 32px',
                backgroundPosition: backgroundPosition
            }}
        >
            <div
                className="absolute top-0 left-0 w-full h-full transform origin-top-left will-change-transform"
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
            >
                {children}
            </div>

            {/* Optional: Navigation Hint or Reset Button could go here */}
        </div>
    );
};

export default InfiniteCanvas;
