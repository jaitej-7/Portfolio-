import React, { useState, useRef, useEffect } from 'react';

const BeforeAfterSlider = ({ beforeImage, afterImage, heightClass = "aspect-[16/9]" }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [containerWidth, setContainerWidth] = useState(0);
    const containerRef = useRef(null);

    // Update width on resize to prevent before-image width mismatch
    useEffect(() => {
        if (!containerRef.current) return;
        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setContainerWidth(entry.contentRect.width);
            }
        });
        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, []);

    const handleMove = (clientX) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
    };

    const handleTouchMove = (e) => {
        handleMove(e.touches[0].clientX);
    };

    const handleMouseMove = (e) => {
        if (e.buttons === 1) { // Left click held
            handleMove(e.clientX);
        }
    };

    return (
        <div 
            ref={containerRef}
            className={`relative w-full ${heightClass} select-none overflow-hidden rounded-lg border border-gray-200 shadow-sm cursor-ew-resize`}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={(e) => handleMove(e.clientX)}
        >
            {/* After Image (Background) */}
            <img 
                src={afterImage} 
                alt="After state" 
                className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
            />

            {/* Before Image (Clipping Container) */}
            <div 
                className="absolute inset-0 overflow-hidden pointer-events-none border-r border-white/20" 
                style={{ width: `${sliderPosition}%` }}
            >
                <img 
                    src={beforeImage} 
                    alt="Before state" 
                    className="absolute inset-0 h-full object-cover max-w-none pointer-events-none" 
                    style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}
                />
            </div>

            {/* Drag Handle Bar */}
            <div 
                className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize flex items-center justify-center shadow-lg"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
                <div className="w-7 h-7 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-500 font-bold text-sm select-none hover:scale-105 active:scale-95 transition-transform">
                    ↔
                </div>
            </div>

            {/* Before Label (Left Side) */}
            <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded shadow-sm pointer-events-none">
                Before
            </div>

            {/* After Label (Right Side) */}
            <div className="absolute top-3 right-3 bg-[#0077b6]/80 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded shadow-sm pointer-events-none">
                After
            </div>
        </div>
    );
};

export default BeforeAfterSlider;
