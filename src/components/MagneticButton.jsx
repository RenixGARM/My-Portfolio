import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper to merge tailwind classes
function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export default function MagneticButton({ children, className, onClick, href, download, ...props }) {
    const buttonRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const handleMouseMove = (e) => {
            const { left, top, width, height } = button.getBoundingClientRect();
            const x = e.clientX - left - width / 2;
            const y = e.clientY - top - height / 2;

            // Subtle movement within limits
            gsap.to(button, {
                x: x * 0.4,
                y: y * 0.4,
                duration: 0.6,
                ease: 'power3.out',
            });
        };

        const handleMouseLeave = () => {
            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.6,
                ease: 'elastic.out(1, 0.3)',
            });
        };

        button.addEventListener('mousemove', handleMouseMove);
        button.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            button.removeEventListener('mousemove', handleMouseMove);
            button.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const Tag = href ? 'a' : 'button';

    return (
        <Tag
            href={href}
            download={download}
            ref={buttonRef}
            className={cn(
                "relative inline-flex items-center justify-center gap-2 overflow-hidden px-8 py-4 font-sans font-medium hover:scale-[1.02] transition-transform",
                className
            )}
            onClick={onClick}
            {...props}
        >
            {children}
        </Tag>
    );
}
