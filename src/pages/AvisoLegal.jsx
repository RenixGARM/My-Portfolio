import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomCursor from '../components/CustomCursor';
import ScrollToTop from '../components/ScrollToTop';
import ParticlesBackground from '../components/ParticlesBackground';

export default function AvisoLegal() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative w-full min-h-screen overflow-x-hidden pt-32 pb-24 px-6 bg-transparent text-foreground">
            <ParticlesBackground />
            <CustomCursor />
            <div className="max-w-4xl mx-auto bg-foreground/[0.03] backdrop-blur-xl border border-foreground/10 rounded-3xl p-8 md:p-12 shadow-2xl relative z-10">
                <Link to="/" className="inline-flex items-center text-accent hover:text-foreground transition-colors uppercase tracking-widest text-xs font-mono mb-12">
                    &larr; Volver al inicio
                </Link>

                <h1 className="text-4xl md:text-5xl font-display font-light uppercase tracking-tighter mb-12">Aviso Legal</h1>

                <div className="space-y-8 font-sans text-foreground/80 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-display font-light text-foreground mb-4">1. Identidad del Titular de la Web</h2>
                        <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios que el titular de este sitio web es:</p>
                        <ul className="list-disc pl-5 mt-4 space-y-2">
                            <li><strong>Nombre:</strong> Roberto Chamorro</li>
                            <li><strong>Correo Electrónico:</strong> Synaplynx@gmail.com</li>
                            <li><strong>Ubicación:</strong> Madrid, España</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-light text-foreground mb-4">2. Objeto del Sitio Web</h2>
                        <p>Este sitio web funciona como un portfolio profesional digital destinado a mostrar la trayectoria laboral, habilidades, proyectos y servicios técnicos que ofrezco como profesional independiente o experto técnico. El acceso a este sitio implica la aceptación de las presentes condiciones.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-light text-foreground mb-4">3. Propiedad Intelectual e Industrial</h2>
                        <p>Todos los textos, diseños, animaciones, código, interfaz y resto de elementos visuales (excluyendo logotipos de terceros o marcas mencionadas a título informativo) son propiedad de Roberto Chamorro. Queda prohibida la reproducción, distribución o modificación sin autorización previa, a excepción de código o recursos librerados explícitamente bajo licencias Open Source en los repositorios enlazados.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-light text-foreground mb-4">4. Exclusión de Responsabilidad</h2>
                        <p>El titular no garantiza la continuidad, disponibilidad y utilidad del sitio web, ni de los servicios o contenidos. Aunque se hace todo lo posible por evitar la presencia de errores informáticos o de seguridad, no se garantiza la ausencia de virus u otros elementos que puedan producir alteraciones en los sistemas físicos o lógicos de los usuarios.</p>
                    </section>
                </div>
            </div>
            <ScrollToTop />
        </div>
    );
}
