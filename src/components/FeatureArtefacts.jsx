import React, { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Activity, Bot, ChevronRight, Share2, Server, Terminal, Radio } from 'lucide-react';

export default function FeatureArtefacts() {
    const containerRef = useRef(null);
    const [terminalText, setTerminalText] = useState("");
    const fullText = `> Analizando flujo de datos...
> [{ "tx_id": 8921, "amount": 450.00, "merchant": "AWS" }]
> Modelo NLP Aplicado: distilbert-base-uncased
> Categorizando...
> Resultado: "Infraestructura Cloud" (Confianza 0.98)
> Sincronizando con dashboard...
> ÉXITO.`;

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTerminalText(fullText.substring(0, i));
            i++;
            if (i > fullText.length) {
                setTimeout(() => { i = 0; }, 2000); // restart after delay
            }
        }, 50);
        return () => clearInterval(interval);
    }, [fullText]);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 85%',
                toggleActions: 'play reverse play reverse'
            }
        });

        tl.fromTo('.fa-title', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
            .fromTo('.fa-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-32 bg-charcoal text-cream relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="fa-title mb-20 md:w-2/3">
                    <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight mb-6">
                        Artefactos <span className="font-serif italic text-clay">Desplegados</span>
                    </h2>
                    <p className="text-cream/60 text-lg">
                        Sistemas tangibles que demuestran la transición entre infraestructura clásica y agentes autónomos inteligentemente orquestados.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Artefact 1: FinFlow MVP */}
                    <div className="fa-card bg-cream/5 border border-cream/10 rounded-2xl overflow-hidden flex flex-col group">
                        <div className="p-4 border-b border-cream/10 flex items-center justify-between bg-cream/5">
                            <div className="flex items-center gap-2">
                                <Terminal className="w-4 h-4 text-clay" />
                                <span className="font-mono text-xs uppercase tracking-wider text-cream/70">FinFlow MVP</span>
                            </div>
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                            </div>
                        </div>
                        <div className="p-6 grow flex flex-col justify-end min-h-[240px] -background/40 font-mono text-sm text-green-400">
                            <pre className="whitespace-pre-wrap leading-relaxed">
                                {terminalText}
                                <span className="animate-pulse">_</span>
                            </pre>
                        </div>
                    </div>

                    {/* Artefact 2: VPS Automation Hub */}
                    <div className="fa-card bg-cream/5 border border-cream/10 rounded-2xl overflow-hidden flex flex-col relative">
                        <div className="p-4 border-b border-cream/10 flex items-center gap-2 bg-cream/5">
                            <Share2 className="w-4 h-4 text-clay" />
                            <span className="font-mono text-xs uppercase tracking-wider text-cream/70">VPS Automation Hub</span>
                        </div>
                        <div className="p-6 grow flex items-center justify-center min-h-[240px] relative">
                            {/* Nodes visualization */}
                            <div className="flex items-center gap-4 relative z-10 w-full justify-between">
                                <div className="w-12 h-12 rounded-xl bg-charcoal border border-cream/20 flex items-center justify-center z-10">
                                    <span className="font-bold text-xs">Webhook</span>
                                </div>
                                <div className="h-[2px] grow bg-gradient-to-r from-cream/20 to-clay/50 relative">
                                    <div className="absolute top-0 left-0 h-full w-1/2 bg-clay animate-[translate_2s_linear_infinite]" style={{ transform: 'translateX(-100%)' }}></div>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-charcoal border border-clay flex items-center justify-center shadow-[0_0_15px_rgba(204,88,51,0.3)] z-10">
                                    <Bot className="w-6 h-6 text-clay" />
                                </div>
                                <div className="h-[2px] grow bg-gradient-to-r from-clay/50 to-green-500/50 relative"></div>
                                <div className="w-12 h-12 rounded-xl bg-charcoal border border-green-500/40 flex items-center justify-center z-10">
                                    <Server className="w-5 h-5 text-green-400" />
                                </div>
                            </div>

                            {/* Status footer */}
                            <div className="absolute bottom-4 left-6 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="font-mono text-[10px] text-cream/50 uppercase">Workers n8n Activos</span>
                            </div>
                        </div>
                    </div>

                    {/* Artefact 3: Technical Reliability */}
                    <div className="fa-card bg-cream/5 border border-cream/10 rounded-2xl overflow-hidden flex flex-col">
                        <div className="p-4 border-b border-cream/10 flex items-center gap-2 bg-cream/5">
                            <Activity className="w-4 h-4 text-clay" />
                            <span className="font-mono text-xs uppercase tracking-wider text-cream/70">Fiabilidad Técnica</span>
                        </div>
                        <div className="p-6 grow flex flex-col justify-center min-h-[240px]">

                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <Radio className="w-4 h-4 text-clay animate-pulse" />
                                    <span className="font-mono text-sm">Telemetría en vivo</span>
                                </div>
                                <span className="font-mono text-2xl font-bold">99.9%</span>
                            </div>

                            {/* Grid of squares simulating uptime/commits */}
                            <div className="grid grid-cols-12 gap-1.5">
                                {Array.from({ length: 60 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-full aspect-square rounded-sm ${Math.random() > 0.1
                                            ? (Math.random() > 0.5 ? 'bg-moss' : 'bg-moss/60')
                                            : 'bg-cream/10'
                                            }`}
                                    ></div>
                                ))}
                            </div>
                            <div className="flex justify-between items-center mt-4 text-[10px] uppercase font-mono text-cream/40">
                                <span>Hace 30 Días</span>
                                <span>Hoy</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
}
