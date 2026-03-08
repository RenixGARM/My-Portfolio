import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Briefcase, BrainCircuit, Cloud } from 'lucide-react';

const archiveData = [
    {
        id: 1,
        title: "10+ años de infraestructura IT",
        subtitle: "Getronics / Capgemini",
        icon: <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-moss" />,
        highlight: ["ServiceNow", "M365 (MD-102)"],
        description: "Sólida base en entornos enterprise IT, gestionando miles de endpoints, resolución de incidencias N2/N3, y orquestación de servicios en corporaciones de alto cumplimiento.",
        color: "bg-cream text-charcoal",
        borderColor: "border-moss/20"
    },
    {
        id: 2,
        title: "Especialización en IA y datos",
        subtitle: "Formación avanzada en IA generativa (UDIA)",
        icon: <BrainCircuit className="w-8 h-8 md:w-10 md:h-10 text-cream" />,
        highlight: ["LangChain", "Pinecone", "Chroma"],
        description: "Desarrollo de pipelines RAG avanzados, ingesta y vectorización de documentación técnica, e integración de LLMs para tareas complejas y consultoría automatizada.",
        color: "bg-clay text-cream",
        borderColor: "border-cream/20"
    },
    {
        id: 3,
        title: "Redes y cloud empresarial",
        subtitle: "Certificaciones y fundamentos sólidos",
        icon: <Cloud className="w-8 h-8 md:w-10 md:h-10 text-cream" />,
        highlight: ["AWS Fundamentals", "Azure Fundamentals", "CISCO CCNA"],
        description: "Conocimiento profundo de las capas de red y arquitectura cloud, permitiendo diseñar agentes AI que se desplieguen y consuman servicios de manera segura, escalable y resiliente.",
        color: "bg-moss text-cream",
        borderColor: "border-cream/20"
    }
];

export default function TheArchive() {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useGSAP(() => {
        // Stack cards animation
        cardsRef.current.forEach((card, i) => {
            if (i === 0) return; // Skip the first card as it sets the base

            const prevCards = cardsRef.current.slice(0, i);

            gsap.to(prevCards, {
                scale: 0.95 - (i * 0.02),
                y: -20 * i,
                filter: 'blur(4px)',
                opacity: 0.6,
                ease: 'none',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%', // when the next card enters 85% of viewport
                    end: 'top 20%',   // until it reaches 20%
                    scrub: true,
                    toggleActions: 'play reverse play reverse'
                }
            });
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-32 bg-cream text-charcoal relative min-h-screen">
            <div className="max-w-4xl mx-auto px-6">

                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight mb-4">
                        El <span className="font-serif italic text-clay">Archivo</span>
                    </h2>
                    <p className="text-charcoal/60 font-mono text-sm max-w-xl mx-auto uppercase tracking-widest">
                        Fundamentos & evolución
                    </p>
                </div>

                <div className="relative pb-32">
                    {archiveData.map((item, index) => (
                        <div
                            key={item.id}
                            ref={el => cardsRef.current[index] = el}
                            className={`sticky top-32 ${item.color} ${item.borderColor} border rounded-3xl p-8 md:p-12 mb-12 shadow-2xl`}
                            style={{ zIndex: index }}
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-8">
                                <div className="flex items-start gap-6">
                                    <div className="p-4 bg-charcoal/5 rounded-2xl shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold font-sans mb-2">{item.title}</h3>
                                        <p className="opacity-80 font-mono text-sm uppercase tracking-wider">{item.subtitle}</p>
                                    </div>
                                </div>

                                <div className="font-mono text-9xl font-bold opacity-10 leading-none">
                                    0{item.id}
                                </div>
                            </div>

                            <p className="text-lg md:text-xl opacity-90 max-w-2xl mb-10 leading-relaxed font-medium">
                                {item.description}
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {item.highlight.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 border border-current/20 rounded-full font-mono text-xs uppercase tracking-wider opacity-90 bg-current/5"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section >
    );
}
