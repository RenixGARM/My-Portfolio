import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import MagneticButton from './MagneticButton';

const words = ["Piensan", "Construyen", "Actúan"];

export default function Hero() {
    const containerRef = useRef(null);


    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    useGSAP(() => {
        const lines = gsap.utils.toArray('.hero-reveal');
        gsap.fromTo(lines,
            { y: '100%', opacity: 0 },
            {
                y: '0%',
                opacity: 1,
                duration: 1.2,
                stagger: 0.15,
                ease: 'power4.out',
                delay: 0.2
            }
        );

        gsap.fromTo('.hero-avatar',
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.5, ease: 'elastic.out(1, 0.7)' }
        );

        gsap.fromTo('.hero-fade',
            { opacity: 0 },
            { opacity: 1, duration: 1.5, delay: 1, ease: 'power2.out' }
        );
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative min-h-screen bg-transparent text-foreground flex flex-col justify-center items-center px-6 overflow-hidden">

            <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center mt-20">

                {/* Profile Image */}
                <div className="hero-avatar flex items-center justify-center relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-[0_0_40px_rgba(203,78,61,0.15)] border border-foreground/10 mb-8 mt-10 filter grayscale brightness-110 contrast-125 transition-all duration-500 hover:filter-none">
                    <img
                        src="/portrait traje.jpeg"
                        alt="Roberto Chamorro"
                        className="w-full h-full object-cover object-[center_30%]"
                    />
                </div>

                {/* Headline with Fade-and-Slide Overflow Hidden Containers */}
                <h1 className="text-5xl md:text-[6rem] lg:text-[8rem] font-display font-light tracking-tighter leading-[0.95] mb-8 w-full flex flex-col items-center">
                    <div className="overflow-hidden pb-2">
                        <div className="hero-reveal">Diseñando sistemas que</div>
                    </div>
                    <div className="overflow-hidden pb-4 md:mt-2 h-[1.2em] flex items-center justify-center">
                        <div className="hero-reveal font-serif italic text-accent font-light min-w-[200px] md:min-w-[400px]">
                            {text}<span className="animate-pulse">|</span>
                        </div>
                    </div>
                </h1>

                {/* Subheadline & CTA */}
                <div className="w-full flex flex-col items-center gap-10 pt-12 mt-4 hero-fade">
                    <p className="text-xl md:text-2xl font-sans text-foreground max-w-2xl font-normal leading-relaxed text-center">
                        Implemento arquitecturas RAG y agentes autónomos con el respaldo de 10 años gestionando infraestructura técnica crítica.
                    </p>

                    <div className="flex justify-center">
                        <MagneticButton href="/Roberto_Chamorro_AI_Engineer.pdf" target="_blank" rel="noopener noreferrer" className="bg-transparent text-foreground border border-secondary rounded-none uppercase tracking-widest text-sm px-8 py-4 transition-colors cursor-expand btn-fill-hover">
                            Descargar CV
                        </MagneticButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
