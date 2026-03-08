import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const services = [
    {
        id: "01",
        title: "IA generativa",
        description: "Arquitecturas RAG, agentes autónomos y LLMs integrados en flujos empresariales."
    },
    {
        id: "02",
        title: "Infraestructura",
        description: "Gestión de sistemas críticos, cloud (Azure, AWS) y networking seguro."
    },
    {
        id: "03",
        title: "Automatización",
        description: "Orquestación con n8n, scripts de Python y eliminación de deuda técnica manual."
    }
];

export default function Services() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const items = gsap.utils.toArray('.service-item');
        gsap.fromTo(items,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
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
        <section id="skills" ref={containerRef} className="py-32 bg-transparent text-foreground px-6 border-t border-container">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-6xl font-display font-light uppercase tracking-tighter">Skills</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12 md:gap-8">
                    {services.map((svc) => (
                        <div key={svc.id} className="service-item flex flex-col gap-6 group">
                            <div className="text-accent-dark font-mono text-5xl md:text-6xl font-light opacity-80 group-hover:opacity-100 transition-opacity">
                                {svc.id}
                            </div>
                            <div className="h-px w-full bg-container group-hover:bg-accent-dark transition-colors duration-500" />
                            <div>
                                <h3 className="text-2xl font-light font-sans mb-3 text-accent">{svc.title}</h3>
                                <p className="text-foreground/60 leading-relaxed font-sans font-normal">{svc.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
