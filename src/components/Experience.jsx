import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const experiences = [
    {
        company: "GETRONICS",
        period: "2022 - ACTUALIDAD",
        role: "Onsite Support Engineer",
        description: [
            "Administración avanzada de sistemas en entornos corporativos utilizando ServiceNow para la gestión de incidencias críticas. Resolución de incidencias técnicas in situ y en remoto, asegurando la continuidad del negocio.",
            "Certificación MD-102 Microsoft 365 Certified: Endpoint Administrator Associate para la gestión profesional de dispositivos y usuarios.",
            "Diseño y propuesta técnica de arquitecturas de automatización de procesos internos mediante IA para la optimización de flujos operativos."
        ],
        tags: ["ServiceNow", "Microsoft 365", "IA Automatización", "Soporte IT"]
    },
    {
        company: "CAPGEMINI",
        period: "2018 - 2022",
        role: "Onsite Support Engineer",
        description: [
            "Soporte técnico avanzado de nivel 2 y 3 para infraestructuras nacionales de la empresa.",
            "Tratamiento, documentación y escalado de incidencias complejas bajo metodología ITIL utilizando herramientas como BMC Remedy y SNOW.",
            "Soporte integral en sistemas operativos Windows, hardware, software corporativo y sistemas de videoconferencia.",
            "Ejecución de tareas 'Hands and feet' en colaboración con equipos internacionales de ingeniería."
        ],
        tags: ["ITIL", "BMC Remedy", "Windows Sysadmin", "Videoconferencia"]
    }
];

export default function Experience() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const lines = gsap.utils.toArray('.exp-line');
        const items = gsap.utils.toArray('.exp-card');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 70%',
                toggleActions: 'play reverse play reverse'
            }
        });

        tl.fromTo('.exp-title',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
        )
            .fromTo(lines,
                { height: 0 },
                { height: '100%', duration: 1.2, ease: 'power2.inOut', stagger: 0.3 },
                "-=0.4"
            )
            .fromTo(items,
                { opacity: 0, x: 30 },
                { opacity: 1, x: 0, duration: 0.8, stagger: 0.3, ease: 'power3.out' },
                "-=1.2"
            );
    }, { scope: containerRef });

    return (
        <section id="experiencia" ref={containerRef} className="py-32 bg-transparent text-foreground px-6 border-t border-container overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 text-center">
                    <h2 className="exp-title text-4xl md:text-6xl font-display font-light uppercase tracking-tighter">
                        Experiencia<br />
                        <span className="text-2xl font-display font-light mt-4 block normal-case tracking-normal text-accent-dark">Mi trayectoria laboral</span>
                    </h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Main vertical center line for timeline */}
                    <div className="absolute top-0 bottom-0 left-[15px] md:left-1/2 md:-ml-px w-px bg-container">
                        <div className="exp-line w-full bg-accent origin-top" style={{ height: '0%' }} />
                    </div>

                    <div className="flex flex-col gap-12 md:gap-24">
                        {experiences.map((exp, idx) => {
                            const isEven = idx % 2 === 0;

                            return (
                                <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center w-full pl-12 md:pl-0 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                                    {/* Timeline dot */}
                                    <div className="absolute top-6 md:top-1/2 md:-translate-y-1/2 left-[11px] md:left-1/2 md:-ml-[4.5px] w-[9px] h-[9px] rounded-full bg-accent shadow-[0_0_10px_rgba(var(--color-accent),0.6)] z-10" />

                                    {/* Experience Card */}
                                    <div className={`exp-card w-full md:w-[45%] bg-foreground/[0.03] backdrop-blur-xl border border-foreground/10 rounded-2xl p-6 md:p-8 hover:border-accent/50 hover:bg-foreground/[0.05] transition-all duration-300 ${isEven ? 'md:mr-[55%]' : 'md:ml-[55%]'}`}>
                                        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
                                            <div>
                                                <h3 className="text-2xl font-display font-light text-foreground">{exp.company}</h3>
                                                <p className="font-sans text-accent-dark text-lg mt-1">{exp.role}</p>
                                            </div>
                                            <div className="text-secondary/70 text-sm font-mono bg-foreground/5 px-3 py-1 rounded-full whitespace-nowrap w-max mt-1 md:mt-0">
                                                {exp.period}
                                            </div>
                                        </div>

                                        <ul className="space-y-3 mb-6">
                                            {exp.description.map((desc, i) => (
                                                <li key={i} className="text-foreground leading-relaxed font-sans text-base flex items-start gap-3">
                                                    <span className="text-accent/50 mt-1.5">•</span>
                                                    <span>{desc}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-foreground/5">
                                            {exp.tags.map((tag, i) => (
                                                <span key={i} className="px-3 py-1 text-xs font-mono rounded-full bg-accent/10 text-accent/90 border border-accent/20">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
