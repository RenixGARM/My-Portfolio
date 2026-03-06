import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ServerCrash, DatabaseZap, GitBranch, Cpu, Network, Zap } from 'lucide-react';

export default function ProblemSolution() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 85%',
                end: 'bottom bottom',
                toggleActions: 'play reverse play reverse'
            }
        });

        tl.fromTo('.ps-header', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 })
            .fromTo('.ps-gap-card', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.8 }, '-=0.4')
            .fromTo('.ps-bridge-card', { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.8 }, '-=0.6')
            .fromTo('.ps-arrow', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.4');
    }, { scope: containerRef });

    return (
        <section id="portfolio" ref={containerRef} className="py-32 bg-cream text-charcoal relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="ps-header text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight mb-4">
                        De la Gestión al <span className="font-serif italic text-clay">Automatismo</span>
                    </h2>
                    <p className="text-charcoal/60 font-mono text-sm max-w-xl mx-auto uppercase tracking-widest">
                        Trascendiendo la ineficiencia
                    </p>
                </div>

                <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-center relative">

                    {/* THE GAP (Left) */}
                    <div className="ps-gap-card bg-charcoal/5 border border-charcoal/10 p-10 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-2 h-full bg-charcoal/20"></div>
                        <h3 className="text-2xl font-bold font-sans mb-6 text-charcoal flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-charcoal/10 flex items-center justify-center text-sm font-mono tracking-tighter">01</span>
                            La Brecha (Pasado)
                        </h3>

                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <ServerCrash className="w-6 h-6 text-charcoal/40 mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg">Deuda Técnica</h4>
                                    <p className="text-charcoal/60 text-sm mt-1">Sistemas legacy fragmentados y difíciles de escalar.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <GitBranch className="w-6 h-6 text-charcoal/40 mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg">Workflows Manuales</h4>
                                    <p className="text-charcoal/60 text-sm mt-1">Procesos operativos dependientes de intervención humana constante.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <DatabaseZap className="w-6 h-6 text-charcoal/40 mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg">Datos Silenciados</h4>
                                    <p className="text-charcoal/60 text-sm mt-1">Información valiosa atrapada en silos sin posibilidad de explotación.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* ARROW */}
                    <div className="ps-arrow flex justify-center py-8 md:py-0">
                        <div className="w-16 h-16 rounded-full bg-clay text-cream flex items-center justify-center shadow-2xl shadow-clay/20 z-10 hidden md:flex">
                            <Zap className="w-6 h-6" />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-clay text-cream flex items-center justify-center shadow-2xl shadow-clay/20 z-10 md:hidden">
                            <Zap className="w-5 h-5" />
                        </div>
                    </div>

                    {/* THE BRIDGE (Right) */}
                    <div className="ps-bridge-card bg-moss text-cream border border-moss/80 p-10 rounded-2xl relative overflow-hidden shadow-2xl shadow-moss/10 group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-clay blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                        <div className="absolute top-0 left-0 w-2 h-full bg-clay"></div>
                        <h3 className="text-2xl font-bold font-sans mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center text-sm font-mono tracking-tighter text-clay">02</span>
                            El Puente (Futuro)
                        </h3>

                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <Network className="w-6 h-6 text-clay mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg text-cream">Arquitecturas RAG</h4>
                                    <p className="text-cream/60 text-sm mt-1">Sistemas de recuperación aumentada para dar contexto real a LLMs.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <Cpu className="w-6 h-6 text-clay mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg text-cream">Enjambres Autónomos</h4>
                                    <p className="text-cream/60 text-sm mt-1">Agentes orquestados (CrewAI / n8n) para resolución compleja sin supervisión.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <Zap className="w-6 h-6 text-clay mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg text-cream">AI-Ops Robusto</h4>
                                    <p className="text-cream/60 text-sm mt-1">Infraestructura monitorizada y predictiva impulsada por IA.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
