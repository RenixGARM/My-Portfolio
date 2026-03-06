import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Manifesto() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const lines = gsap.utils.toArray('.manifesto-line');

        gsap.fromTo(lines,
            { opacity: 0, y: 50, rotateX: -20 },
            {
                opacity: 1,
                y: 0,
                rotateX: 0,
                duration: 1.2,
                stagger: 0.3,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    toggleActions: 'play reverse play reverse'
                }
            }
        );
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-40 bg-charcoal text-cream text-center relative overflow-hidden">

            {/* Background large text element to give depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none opacity-5">
                <h2 className="text-[20vw] font-bold font-sans whitespace-nowrap text-center leading-none">
                    MANIFESTO
                </h2>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col gap-8 md:gap-12">
                <p className="manifesto-line text-3xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight text-cream/50">
                    Lo normal es preguntar:<br />
                    <span className="font-serif italic text-cream">¿qué va mal?</span>
                </p>

                <div className="manifesto-line w-px h-16 bg-gradient-to-b from-transparent via-clay to-transparent mx-auto"></div>

                <p className="manifesto-line text-4xl md:text-6xl lg:text-7xl font-sans font-bold leading-tight">
                    Yo me pregunto:<br />
                    <span className="font-serif italic text-clay">¿qué se puede optimizar?</span>
                </p>
            </div>
        </section>
    );
}
