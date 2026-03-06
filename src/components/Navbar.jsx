import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import MagneticButton from './MagneticButton';

import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const navRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(navRef.current,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power3.out' }
        );
    }, []);

    return (
        <nav ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-6">
            <div className="bg-foreground/5 backdrop-blur-md border border-foreground/10 rounded-full px-6 py-3 flex items-center justify-between">
                <a href="#sobre-mi" className="font-mono text-xs uppercase tracking-widest text-foreground/90 hidden sm:block hover:text-foreground transition-colors cursor-pointer">
                    Roberto Chamorro
                </a>
                <div className="flex items-center gap-6">
                    <a href="#proyectos" className="font-sans text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors cursor-pointer">Proyectos</a>
                    <a href="#experiencia" className="font-sans text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors cursor-pointer hidden md:block">Experiencia</a>
                    <a href="#skills" className="font-sans text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors cursor-pointer hidden lg:block">Skills</a>
                    <a href="#proceso" className="font-sans text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors cursor-pointer hidden md:block">El Proceso</a>
                    <a href="https://www.linkedin.com/in/roberto-chamorro-41034586" target="_blank" rel="noreferrer" className="font-sans text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors cursor-pointer">LinkedIn</a>
                </div>
                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <MagneticButton href="#contact" className="px-6 py-2 text-xs uppercase tracking-wider bg-foreground text-background rounded-full transition-colors cursor-pointer btn-fill-hover">
                        Hablemos
                    </MagneticButton>
                </div>
            </div>
        </nav>
    );
}
