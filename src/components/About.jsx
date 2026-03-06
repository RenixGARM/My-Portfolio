import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function About() {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo('.about-reveal',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                    toggleActions: 'play reverse play reverse'
                }
            }
        );
    }, { scope: containerRef });

    return (
        <section id="sobre-mi" ref={containerRef} className="py-32 bg-transparent text-foreground px-6 border-t border-container">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="about-reveal text-4xl md:text-6xl font-display font-light uppercase tracking-tighter">Sobre Mí</h2>
                </div>

                <div className="flex flex-col items-center max-w-4xl mx-auto gap-12 text-center relative">
                    <p className="about-reveal text-2xl md:text-3xl text-foreground font-display font-light">
                        ¡Hola! Soy <span className="text-accent">Roberto Chamorro</span>,
                    </p>

                    <div className="flex flex-col gap-8">
                        <p className="about-reveal text-xl font-sans text-foreground font-normal leading-relaxed">
                            mi historia con la tecnología empezó hace más de una década entre equipos, servidores y redes, asegurando que infraestructuras críticas en grandes empresas no dieran un paso en falso. Pero si algo define esos años no son solo los distintos sistemas que toqué, sino mi forma de afrontar los problemas: soy de los que no tiran la toalla. Si algo falla o un proceso se resiste, me quedo ahí hasta que vuelve a respirar. Esa persistencia es mi base.
                        </p>
                        <p className="about-reveal text-xl font-sans text-foreground font-normal leading-relaxed">
                            Esa misma curiosidad "cabezota" es la que me ha traído a la Inteligencia Artificial. Me fascina la velocidad a la que está cambiando todo; ver cómo pasamos de gestionar código estático a crear agentes que deciden por sí mismos o vídeos que parecen puro cine. Hoy, mi enfoque es unir esos dos mundos: aplicar toda mi experiencia en infraestructura para construir soluciones de IA, como arquitecturas de agentes y sistemas de recuperación de información, que sean tan innovadoras como robustas.
                        </p>
                        <p className="about-reveal text-xl font-sans text-foreground font-normal leading-relaxed">
                            Cuando cierro el portátil, esa energía no se apaga. Me la llevo a la pista de voley, donde la precisión y el trabajo en equipo lo son todo. Soy un apasionado de las buenas historias, ya sea en un videojuego, una serie de anime o una buena película.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
