import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowUpRight, Play, Pause, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const works = [
    {
        id: 1,
        title: "FinFlow MVP",
        description: "Motor Financiero NLP via Google AI Studio",
        gradient: "from-blue-900/20 to-black",
        device: "mobile",
        images: ["/finflow/1.jpg", "/finflow/2.jpg", "/finflow/3.jpg", "/finflow/4.jpg", "/finflow/5.jpg"],
        modalContent: (
            <div className="flex flex-col gap-6 font-sans font-normal text-foreground">
                <p>
                    <strong>FinFlow</strong> no es solo un gestor de finanzas; es un experimento exitoso en la nueva frontera del desarrollo de software. Esta aplicación nace para resolver la fricción sistemática del registro manual de gastos, transformando una tarea tediosa en un flujo automatizado, inteligente y multiplataforma.
                </p>
                <div className="flex flex-col gap-2">
                    <h4 className="text-xl font-display font-light text-accent">El Problema: La Brecha de Datos Financieros</h4>
                    <p>La mayoría de los usuarios abandonan el seguimiento de sus finanzas debido a la complejidad de categorizar gastos y la falta de integración entre sus herramientas de uso diario. FinFlow elimina esta barrera mediante una interfaz minimalista y un motor de procesamiento cognitivo que entiende el contexto de cada transacción.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="text-xl font-display font-light text-accent">Stack Tecnológico de Vanguardia</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Frontend & PWA:</strong> Construida con React 19 y Tailwind CSS, la aplicación ofrece una experiencia nativa en cualquier dispositivo (iOS, Android, Desktop) gracias a su arquitectura de Progressive Web App, garantizando fluidez y acceso offline.</li>
                        <li><strong>Cerebro de IA (Gemini Flash):</strong> Integración directa con el modelo Gemini 2.5 Flash para la categorización inteligente de transacciones y procesamiento de tickets vía OCR. La IA no solo etiqueta, sino que extrae insights accionables de los hábitos de consumo.</li>
                        <li><strong>Ecosistema de Datos (Google Sheets API):</strong> A diferencia de las bases de datos cerradas, FinFlow utiliza Google Sheets como backend opcional. Esto otorga al usuario la soberanía total sobre sus datos, permitiendo auditorías externas y visualizaciones personalizadas en una herramienta que ya conocen y dominan.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="text-xl font-display font-light text-accent">Innovación en el Proceso: Vibe Coding</h4>
                    <p>Lo que hace a FinFlow verdaderamente disruptiva es su origen: ha sido desarrollada íntegramente mediante lenguaje natural (Vibe Coding).</p>
                    <p>Este proyecto demuestra que la barrera entre la idea y la ejecución se ha disuelto. Mediante una colaboración simbiótica entre el ingeniero y modelos de lenguaje avanzados, se ha logrado un ciclo de iteración ultrarrápido, donde la arquitectura, la lógica de negocio y el diseño UI/UX fueron esculpidos a través de diálogos técnicos de alto nivel, priorizando la intención y el flujo sobre la sintaxis tradicional.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="text-xl font-display font-light text-accent">Características Clave:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>OCR Inteligente:</strong> Captura de gastos mediante cámara con extracción automática de datos.</li>
                        <li><strong>Dashboard Analítico:</strong> Visualización dinámica de flujos de caja mediante Recharts.</li>
                        <li><strong>Sincronización en Tiempo Real:</strong> Persistencia híbrida entre almacenamiento local y la nube de Google.</li>
                        <li><strong>Privacidad por Diseño:</strong> Control total del usuario sobre sus credenciales y almacenamiento.</li>
                    </ul>
                </div>
                <p className="mt-4 text-accent italic font-serif">
                    FinFlow es el testimonio de cómo la Inteligencia Artificial está redefiniendo no solo qué construimos, sino cómo lo construimos.
                </p>
            </div>
        )
    },
    {
        id: 2,
        title: "Automatización y Agentes",
        description: "Orquestación n8n y Enjambres de Agentes Autónomos",
        gradient: "from-zinc-800/20 to-black",
        device: "laptop",
        images: ["/vps/1.png", "/vps/2.png", "/vps/3.png"],
        modalContent: (
            <div className="flex flex-col gap-6 font-sans font-normal text-foreground">
                <p>
                    <strong>Automatización y Agentes</strong> es la piedra angular de mis soluciones de productividad empresarial. A través de la orquestación avanzada de agentes y flujos de trabajo, transformo operaciones manuales en sistemas autónomos de alta eficiencia.
                </p>
                <div className="flex flex-col gap-2">
                    <h4 className="text-xl font-display font-light text-accent">Automatización con n8n y Agentes</h4>
                    <p>Diseño y construyo complejas canalizaciones de datos utilizando <strong>n8n</strong>. Estos flujos integran sistemas desconectados (CRMs, bases de datos, APIs de terceros, IA) para automatizar tareas repetitivas. Además, implemento enjambres de Inteligencia Artificial capaces de tomar decisiones, procesar lenguaje natural y ejecutar acciones contextualmente, multiplicando las capacidades de cualquier equipo humano.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="text-xl font-display font-light text-accent">Impacto en el Negocio</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Optimización de Procesos:</strong> Eliminación de cuellos de botella y reducción drástica de errores humanos en la operativa diaria.</li>
                        <li><strong>Recuperación de Tiempo:</strong> Devolución de miles de horas al equipo para que puedan concentrarse en trabajo creativo, estratégico y de alto valor.</li>
                        <li><strong>Aumento de Beneficios:</strong> Al minimizar los costes operativos y acelerar la entrega de valor, las automatizaciones impactan directa y positivamente en el ROI del cliente.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="text-xl font-display font-light text-accent">Infraestructura Propia y Gestionada</h4>
                    <p>La independencia tecnológica es clave. He desplegado mi propia instancia de n8n dentro de un <strong>Servidor Virtual Privado (VPS)</strong> dedicado.</p>
                    <p>Para la orquestación y despliegue rápido, administro toda la infraestructura a través de <strong>Easypanel</strong>. Esta capa de abstracción simplifica enormemente el mantenimiento de contenedores Docker y la gestión de redes, permitiéndome enfocar el 100% de mi energía y atención donde realmente importa: el diseño, funcionamiento y escalabilidad de los flujos de trabajo de mis clientes.</p>
                </div>
            </div>
        )
    }
];

function MobileSlider({ images, onZoom }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        let timer;
        if (isPlaying) {
            timer = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
            }, 5000);
        }
        return () => clearInterval(timer);
    }, [images.length, isPlaying, currentIndex]);

    const handleNext = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const togglePlay = (e) => {
        e.stopPropagation();
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="relative w-[260px] h-[540px] md:w-[320px] md:h-[660px] mx-auto border-[8px] md:border-[12px] border-[#161616] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-background transform transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-auto group/slider">
            {/* Camera / Notch */}
            <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                <div className="w-1/3 h-full bg-[#161616] rounded-b-[1rem]"></div>
            </div>

            <div className="relative w-full h-full flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((src, i) => (
                    <img key={i} src={src} alt={`Screenshot ${i + 1}`} className="w-full h-full object-cover shrink-0 pointer-events-none" />
                ))}
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-0 w-full flex justify-center gap-2 z-20">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                        className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? 'bg-foreground' : 'bg-foreground/30 hover:bg-foreground/60'}`}
                        aria-label={`Go to screenshot ${i + 1}`}
                    />
                ))}
            </div>

            {/* Controls Overlay */}
            <button onClick={handlePrev} className="absolute left-2 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-8 h-8 bg-background/80 backdrop-blur-md rounded-full border border-foreground/10 shadow-lg text-foreground/70 hover:text-foreground transition-all opacity-100 md:opacity-0 group-hover/slider:opacity-100 pointer-events-auto" aria-label="Previous image">
                <ChevronLeft size={18} />
            </button>
            <button onClick={handleNext} className="absolute right-2 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-8 h-8 bg-background/80 backdrop-blur-md rounded-full border border-foreground/10 shadow-lg text-foreground/70 hover:text-foreground transition-all opacity-100 md:opacity-0 group-hover/slider:opacity-100 pointer-events-auto" aria-label="Next image">
                <ChevronRight size={18} />
            </button>
            <div className="absolute top-4 right-4 z-30 flex flex-col gap-2 opacity-100 md:opacity-0 group-hover/slider:opacity-100 transition-all pointer-events-auto">
                <button onClick={(e) => { e.stopPropagation(); onZoom(); }} className="flex items-center justify-center w-8 h-8 bg-background/80 backdrop-blur-md rounded-full border border-foreground/10 shadow-lg text-foreground/70 hover:text-foreground" aria-label="Zoom image">
                    <ZoomIn size={16} />
                </button>
                <button onClick={togglePlay} className="flex items-center justify-center w-8 h-8 bg-background/80 backdrop-blur-md rounded-full border border-foreground/10 shadow-lg text-foreground/70 hover:text-foreground" aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}>
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>
            </div>
        </div>
    );
}

function LaptopSlider({ images, onZoom }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        let timer;
        if (isPlaying) {
            timer = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
            }, 3000);
        }
        return () => clearInterval(timer);
    }, [images.length, isPlaying, currentIndex]);

    const handleNext = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const togglePlay = (e) => {
        e.stopPropagation();
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="relative w-[340px] md:w-[500px] lg:w-[600px] mx-auto pointer-events-auto transform transition-transform duration-700 ease-out group-hover:scale-105 group/slider">
            {/* Screen Bezel */}
            <div className="relative aspect-[16/10] bg-[#161616] border-[4px] border-[#222] rounded-t-xl overflow-hidden shadow-2xl p-2 md:p-3">
                {/* Screen Content Wrapper */}
                <div className="relative w-full h-full rounded bg-background overflow-hidden flex">
                    <div className="relative w-full h-full flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {images.map((src, i) => (
                            <img key={i} src={src} alt={`Screenshot ${i + 1}`} className="w-full h-full object-cover object-left-top shrink-0 pointer-events-none" />
                        ))}
                    </div>
                    {/* Pagination Dots */}
                    <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 z-20">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                                className={`w-2 h-2 rounded-full transition-colors drop-shadow-md ${i === currentIndex ? 'bg-foreground' : 'bg-foreground/30 hover:bg-foreground/60'}`}
                                aria-label={`Go to screenshot ${i + 1}`}
                            />
                        ))}
                    </div>

                    {/* Controls Overlay */}
                    <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 bg-background/80 backdrop-blur-md rounded-full border border-foreground/10 shadow-lg text-foreground/70 hover:text-foreground transition-all opacity-100 md:opacity-0 group-hover/slider:opacity-100 pointer-events-auto" aria-label="Previous image">
                        <ChevronLeft size={20} />
                    </button>
                    <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 bg-background/80 backdrop-blur-md rounded-full border border-foreground/10 shadow-lg text-foreground/70 hover:text-foreground transition-all opacity-100 md:opacity-0 group-hover/slider:opacity-100 pointer-events-auto" aria-label="Next image">
                        <ChevronRight size={20} />
                    </button>
                    <div className="absolute top-4 right-4 z-30 flex gap-2 opacity-100 md:opacity-0 group-hover/slider:opacity-100 transition-all pointer-events-auto">
                        <button onClick={(e) => { e.stopPropagation(); onZoom(); }} className="flex items-center justify-center w-10 h-10 bg-background/80 backdrop-blur-md rounded-full border border-foreground/10 shadow-lg text-foreground/70 hover:text-foreground" aria-label="Zoom image">
                            <ZoomIn size={18} />
                        </button>
                        <button onClick={togglePlay} className="flex items-center justify-center w-10 h-10 bg-background/80 backdrop-blur-md rounded-full border border-foreground/10 shadow-lg text-foreground/70 hover:text-foreground" aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}>
                            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Base */}
            <div className="w-[110%] -ml-[5%] h-3 md:h-4 bg-[#2a2a2a] rounded-b-2xl shadow-[0_10px_20px_rgba(0,0,0,0.5)] relative flex justify-center border-t border-[#444]">
                <div className="w-1/5 h-[3px] bg-[#1a1a1a] rounded-b-md"></div>
            </div>
        </div>
    );
}

export default function SelectedWork() {
    const containerRef = useRef(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [zoomedImages, setZoomedImages] = useState(null);
    const [zoomedIndex, setZoomedIndex] = useState(0);

    useGSAP(() => {
        const cards = gsap.utils.toArray('.work-card');
        gsap.fromTo(cards,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
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

        gsap.fromTo('.ai-footer-card',
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.ai-footer-card',
                    start: 'top 85%',
                    toggleActions: 'play reverse play reverse'
                }
            }
        );
    }, { scope: containerRef });

    return (
        <section id="proyectos" ref={containerRef} className="py-32 bg-transparent text-foreground px-6 border-t border-container">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-6xl font-display font-light uppercase tracking-tighter">Proyectos</h2>
                </div>

                <div className="flex flex-col gap-12">
                    {works.map((work) => {
                        const hasMockup = !!work.images && work.images.length > 0;

                        if (hasMockup) {
                            return (
                                <div key={work.id} className="work-card group relative block w-full py-20 cursor-pointer overflow-hidden" onClick={() => setSelectedProject(work)}>
                                    {/* Mockup Frame (Directly on Background) */}
                                    <div className="relative z-10 w-full h-full flex justify-center items-center">
                                        {work.device === "mobile" ? (
                                            <MobileSlider images={work.images} onZoom={() => { setZoomedImages(work.images); setZoomedIndex(0); }} />
                                        ) : (
                                            <LaptopSlider images={work.images} onZoom={() => { setZoomedImages(work.images); setZoomedIndex(0); }} />
                                        )}
                                    </div>

                                    {/* Hover Titles */}
                                    <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center items-center pointer-events-none z-20">
                                        <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-background/80 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-foreground/5 mt-auto flex flex-col items-center pointer-events-auto">
                                            <h3 className="text-3xl font-display font-light text-center">{work.title}</h3>
                                            <p className="text-foreground font-sans font-normal text-center mt-2 mb-4">{work.description}</p>
                                            <button onClick={(e) => { e.stopPropagation(); setSelectedProject(work); }} className="px-6 py-2 bg-foreground text-background text-sm font-medium rounded-full hover:scale-105 transition-transform">
                                                Saber más
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <div key={work.id} className="work-card group cursor-expand relative block w-full overflow-hidden bg-container rounded-2xl md:rounded-3xl aspect-[16/9] md:aspect-[21/9]">
                                {/* Background Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${work.gradient} transition-transform duration-700 ease-out group-hover:scale-105`} />

                                {/* Subtle Overlay Grid */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none" />

                                {/* Hover / Status Overlay */}
                                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end pointer-events-none z-20">
                                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                                        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mt-8 pointer-events-auto">
                                            <h3 className="text-3xl font-display font-light">{work.title}</h3>
                                            <div className="flex flex-col items-start gap-4">
                                                <p className="text-foreground font-sans font-normal md:max-w-xs">{work.description}</p>
                                                <button onClick={(e) => { e.stopPropagation(); setSelectedProject(work); }} className="px-6 py-2 bg-foreground text-background text-sm font-medium rounded-full hover:scale-105 transition-transform">
                                                    Saber más
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-20 border-t border-foreground/5 pt-12 flex flex-col items-center justify-center text-center ai-footer-card">
                    <p className="text-foreground/70 font-sans text-sm md:text-base max-w-2xl leading-relaxed">
                        <span className="block mb-2 font-mono uppercase tracking-widest text-accent text-xs">P.D. (Y por si te lo preguntabas...)</span>
                        Este portfolio ha sido programado desde cero <strong>sin escribir ni una sola línea de código a mano</strong>. Sin embargo, toda la arquitectura web, la lógica de animación, la paleta de colores y el diseño UX/UI han sido dirigidos y conceptualizados aportando mi expertise técnico y creatividad. Todo el código fue generado conversando "mano a algoritmo" a través de <span className="text-foreground font-medium">Antigravity</span>, el asistente Coder impulsado por IA. <span className="block mt-2 font-display italic text-lg text-foreground">Welcome to the future. 🚀</span>
                    </p>
                </div>
            </div>

            {/* Modal Overlay */}
            {selectedProject && selectedProject.modalContent && (
                <div
                    className="fixed inset-0 z-[100] flex justify-center items-center p-4 md:p-8 bg-background/80 backdrop-blur-sm cursor-pointer animate-scale-fade"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="bg-background border border-foreground/10 rounded-2xl md:rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto cursor-auto shadow-2xl relative"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-6 right-6 text-foreground/50 hover:text-foreground transition-colors z-10 bg-background/50 w-10 h-10 rounded-full flex justify-center items-center"
                            onClick={() => setSelectedProject(null)}
                            aria-label="Cerrar modal"
                        >
                            ✕
                        </button>

                        <div className="p-8 md:p-12">
                            <h3 className="text-4xl md:text-5xl font-display font-light mb-8">{selectedProject.title}</h3>
                            {selectedProject.modalContent}
                        </div>
                    </div>
                </div>
            )}

            {/* Zoom Slider Modal Overlay */}
            {zoomedImages && (
                <div
                    className="fixed inset-0 z-[110] flex justify-center items-center p-4 md:p-8 bg-black/95 backdrop-blur-xl cursor-pointer animate-scale-fade"
                    onClick={() => setZoomedImages(null)}
                >
                    {/* Close button */}
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-20 bg-white/10 w-12 h-12 rounded-full flex justify-center items-center"
                        onClick={() => setZoomedImages(null)}
                        aria-label="Cerrar zoom"
                    >
                        ✕
                    </button>

                    <div
                        className="relative w-full max-w-6xl h-full max-h-[85vh] flex items-center justify-center cursor-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={zoomedImages[zoomedIndex]}
                            alt={`Zoomed image ${zoomedIndex + 1}`}
                            className="w-full h-full object-contain"
                        />

                        {/* Pagination Dots */}
                        <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 z-20">
                            {zoomedImages.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={(e) => { e.stopPropagation(); setZoomedIndex(i); }}
                                    className={`w-3 h-3 rounded-full transition-colors drop-shadow-md border border-white/20 ${i === zoomedIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/60'}`}
                                    aria-label={`Go to screenshot ${i + 1}`}
                                />
                            ))}
                        </div>

                        {/* Controls */}
                        <button
                            onClick={(e) => { e.stopPropagation(); setZoomedIndex((prev) => (prev - 1 + zoomedImages.length) % zoomedImages.length); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/10 shadow-lg text-white transition-all"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); setZoomedIndex((prev) => (prev + 1) % zoomedImages.length); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/10 shadow-lg text-white transition-all"
                            aria-label="Next image"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
