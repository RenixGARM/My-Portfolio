import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        // Disable custom cursor on touch devices (mobile/tablets)
        if (window.matchMedia('(pointer: coarse)').matches) {
            cursor.style.display = 'none';
            return;
        }

        // Move cursor with mouse
        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.15,
                ease: 'power2.out'
            });
        };

        // Expand cursor over interactive elements
        const handleMouseEnter = () => {
            gsap.to(cursor, { scale: 3, backgroundColor: 'rgba(203, 78, 61, 0.1)', borderColor: 'rgba(203, 78, 61, 0.8)', duration: 0.3 });
        };
        const handleMouseLeave = () => {
            gsap.to(cursor, { scale: 1, backgroundColor: 'transparent', borderColor: 'rgba(255, 255, 255, 0.5)', duration: 0.3 });
        };

        window.addEventListener('mousemove', moveCursor);

        // Reset cursor on click to prevent it sticking when anchor jumping
        const handleGlobalClick = () => {
            gsap.to(cursor, { scale: 1, backgroundColor: 'transparent', borderColor: 'rgba(255, 255, 255, 0.5)', duration: 0.3 });
        };
        window.addEventListener('click', handleGlobalClick);

        // Add event listeners to all interactive elements
        const iteractives = document.querySelectorAll('a, button, .cursor-expand');
        iteractives.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('click', handleGlobalClick);
            iteractives.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-3 h-3 rounded-full border border-foreground/50 pointer-events-none z-[9999] mix-blend-difference"
            style={{ transform: 'translate(-50%, -50%)' }}
        />
    );
}
