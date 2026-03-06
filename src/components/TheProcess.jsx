import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const steps = [
    { num: "01", title: "Auditoría", text: "Evaluación de deuda técnica, cuellos de botella operativos y detección de oportunidades para mayor impacto de IA." },
    { num: "02", title: "Arquitectura", text: "Generación del plano base para infraestructura fundacional sólida combinada con capacidades de flujos agénticos." },
    { num: "03", title: "Despliegue", text: "Paso a producción. Implementación de pipelines CI/CD, hosting securizado y configuración de dashboards de telemetría." }
];

export default function TheProcess() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const lines = gsap.utils.toArray('.process-line');
        const items = gsap.utils.toArray('.process-content');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 70%',
                toggleActions: 'play reverse play reverse'
            }
        });

        tl.fromTo(lines,
            { height: 0 },
            { height: '100%', duration: 1, ease: 'power2.inOut', stagger: 0.2 }
        )
            .fromTo(items,
                { opacity: 0, x: -20 },
                { opacity: 1, x: 0, duration: 0.6, stagger: 0.2 },
                "-=1"
            );
    }, { scope: containerRef });

    return (
        <section id="proceso" ref={containerRef} className="py-32 bg-transparent text-foreground px-6 border-t border-container overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 text-center">
                    <h2 className="text-4xl md:text-6xl font-display font-light uppercase tracking-tighter">El Proceso</h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Main vertical center line for timeline */}
                    <div className="absolute top-0 bottom-0 left-[15px] md:left-1/2 md:-ml-px w-px bg-container">
                        <div className="process-line w-full bg-accent origin-top" style={{ height: '0%' }} />
                    </div>

                    <div className="flex flex-col gap-12 md:gap-24">
                        {steps.map((step, idx) => {
                            const isEven = idx % 2 === 0;

                            return (
                                <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center w-full pl-12 md:pl-0 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>

                                    {/* Timeline dot */}
                                    <div className="absolute top-6 md:top-1/2 md:-translate-y-1/2 left-[11px] md:left-1/2 md:-ml-[4.5px] w-[9px] h-[9px] rounded-full bg-accent shadow-[0_0_10px_rgba(var(--color-accent),0.6)] z-10" />

                                    {/* Content Box */}
                                    <div className={`process-content w-full md:w-[45%] bg-foreground/[0.03] backdrop-blur-xl border border-foreground/10 rounded-2xl p-6 md:p-8 hover:border-accent/50 hover:bg-foreground/[0.05] transition-all duration-300 ${isEven ? 'md:mr-[55%]' : 'md:ml-[55%]'}`}>
                                        <div className="font-mono text-accent text-sm mb-2">{step.num}</div>
                                        <h3 className="text-2xl font-display font-light mb-4 text-accent">{step.title}</h3>
                                        <div className="text-accent-dark font-mono text-xl opacity-80 mt-1">
                                            {step.id}
                                        </div>
                                        <p className="text-foreground leading-relaxed font-sans font-normal">{step.text}</p>
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
