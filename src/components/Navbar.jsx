import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';
import MagneticButton from './MagneticButton';

import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const navRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        gsap.fromTo(navRef.current,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power3.out' }
        );
    }, []);

    return (
        <nav ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-6">
            <div className="bg-background/80 backdrop-blur-md border border-foreground/10 rounded-full px-4 sm:px-6 py-3 flex items-center justify-between shadow-sm relative z-50">
                <a href="#sobre-mi" className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-foreground/90 hover:text-foreground transition-colors cursor-pointer shrink-0" onClick={() => setIsOpen(false)}>
                    Roberto Chamorro
                </a>
                <div className="hidden md:flex items-center gap-4 sm:gap-6">
                    <a href="#proyectos" className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors cursor-pointer">Proyectos</a>
                    <a href="#experiencia" className="font-sans text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors cursor-pointer hidden md:block">Experiencia</a>
                    <a href="#skills" className="font-sans text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors cursor-pointer hidden lg:block">Skills</a>
                    <a href="#proceso" className="font-sans text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors cursor-pointer hidden md:block">El Proceso</a>
                    <a href="https://www.linkedin.com/in/roberto-chamorro-41034586" target="_blank" rel="noreferrer" className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors cursor-pointer hidden sm:block">LinkedIn</a>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <ThemeToggle />
                    <MagneticButton href="#contact" className="px-4 py-2 sm:px-6 text-[10px] sm:text-xs uppercase tracking-wider bg-foreground text-background rounded-full transition-colors cursor-pointer btn-fill-hover shrink-0">
                        <span className="hidden sm:inline">Hablemos</span>
                        <span className="sm:hidden">CV</span>
                    </MagneticButton>
                    <button
                        className="md:hidden p-2 -mr-2 text-foreground/80 hover:text-foreground transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-6 right-6 mt-2 bg-background/95 backdrop-blur-xl border border-foreground/10 rounded-2xl p-6 flex flex-col gap-6 shadow-xl z-40 animate-scale-fade">
                    <div className="flex flex-col gap-4">
                        <a href="#proyectos" onClick={() => setIsOpen(false)} className="font-sans text-sm uppercase tracking-widest text-foreground/80 hover:text-foreground transition-colors cursor-pointer">Proyectos</a>
                        <a href="#experiencia" onClick={() => setIsOpen(false)} className="font-sans text-sm uppercase tracking-widest text-foreground/80 hover:text-foreground transition-colors cursor-pointer">Experiencia</a>
                        <a href="#skills" onClick={() => setIsOpen(false)} className="font-sans text-sm uppercase tracking-widest text-foreground/80 hover:text-foreground transition-colors cursor-pointer">Skills</a>
                        <a href="#proceso" onClick={() => setIsOpen(false)} className="font-sans text-sm uppercase tracking-widest text-foreground/80 hover:text-foreground transition-colors cursor-pointer">El Proceso</a>
                        <a href="https://www.linkedin.com/in/roberto-chamorro-41034586" target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)} className="font-sans text-sm uppercase tracking-widest text-foreground/80 hover:text-foreground transition-colors cursor-pointer">LinkedIn</a>
                    </div>
                </div>
            )}
        </nav>
    );
}
