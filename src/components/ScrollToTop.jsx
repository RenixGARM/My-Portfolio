import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
            <button
                onClick={scrollToTop}
                className="w-12 h-12 rounded-full border border-foreground/50 text-foreground bg-background/80 backdrop-blur-md flex justify-center items-center transition-colors cursor-expand shadow-2xl btn-fill-hover hover:border-[#CB4E3D]"
                aria-label="Volver arriba"
            >
                <ArrowUp size={20} strokeWidth={1} />
            </button>
        </div>
    );
}
