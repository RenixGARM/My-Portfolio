import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export default function Footer() {
    const marqueeRef = useRef(null);

    useGSAP(() => {
        // Infinite Marquee animation
        gsap.to(marqueeRef.current, {
            xPercent: -50,
            ease: "none",
            duration: 15,
            repeat: -1,
        });
    }, {});

    return (
        <footer className="bg-transparent text-foreground border-t border-container overflow-hidden pt-32 pb-12 relative">
            {/* The Marquee (Ticker Banner) */}
            <div className="w-screen bg-foreground/[0.03] backdrop-blur-xl border-y border-foreground/10 flex overflow-hidden -mx-6 mb-24 py-4 absolute top-0 left-0">
                <div ref={marqueeRef} className="flex whitespace-nowrap text-sm md:text-base font-sans font-bold tracking-widest text-marquee-text uppercase">
                    {[...Array(6)].map((_, i) => (
                        <span key={i} className="flex items-center">
                            <span className="px-8">CONSTRUYAMOS EL FUTURO</span>
                            <span className="px-8 text-marquee-text/50">+++</span>
                            <span className="px-8">DISPONIBLE PARA PROYECTOS</span>
                            <span className="px-8 text-marquee-text/50">+++</span>
                            <span className="px-8">HABLEMOS</span>
                            <span className="px-8 text-marquee-text/50">+++</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* Footer Bottom info */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center gap-8">
                <div className="flex flex-col md:items-start items-center">
                    <h3 className="font-display text-2xl font-light tracking-tight mb-4">ROBERTO CHAMORRO</h3>
                    <div className="flex gap-4">
                        <a
                            href="https://www.linkedin.com/in/roberto-chamorro-41034586"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground/20 bg-foreground/5 hover:bg-[#CB4E3D] hover:border-[#CB4E3D] transition-all duration-300 cursor-expand"
                        >
                            <span className="font-mono text-sm text-foreground uppercase tracking-widest">LinkedIn</span>
                            <svg
                                className="w-4 h-4 text-foreground/70 group-hover:text-foreground transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4">

                    <div className="flex flex-wrap justify-center gap-4 text-xs font-sans text-foreground/50 uppercase tracking-widest mt-4">
                        <Link to="/aviso-legal" className="hover:text-accent transition-colors">Aviso legal</Link>
                        <span>|</span>
                        <Link to="/politica-privacidad" className="hover:text-accent transition-colors">Política de privacidad</Link>
                        <span>|</span>
                        <Link to="/politica-cookies" className="hover:text-accent transition-colors">Política de cookies</Link>
                    </div>

                    <p className="text-foreground/30 text-xs font-mono mt-2">
                        &copy; {new Date().getFullYear()} Roberto Chamorro. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
