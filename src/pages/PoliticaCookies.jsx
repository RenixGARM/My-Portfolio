import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomCursor from '../components/CustomCursor';
import ScrollToTop from '../components/ScrollToTop';
import ParticlesBackground from '../components/ParticlesBackground';

export default function PoliticaCookies() {
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

                <h1 className="text-4xl md:text-5xl font-display font-light uppercase tracking-tighter mb-12">Política de Cookies</h1>

                <div className="space-y-8 font-sans text-foreground/80 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-display font-light text-foreground mb-4">1. ¿Qué son las Cookies?</h2>
                        <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en su navegador cuando los visita. Se utilizan habitualmente para garantizar el funcionamiento técnico del sitio y, en algunos casos, recabar información sobre la navegación del usuario de forma anónima.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-light text-foreground mb-4">2. Cookies Utilizadas en este Sitio Web</h2>
                        <p><strong>Actualmente, este portfolio (roberto-portfolio) NO utiliza cookies analíticas, publicitarias ni de seguimiento.</strong></p>
                        <p className="mt-4">Nuestra arquitectura es estática y el servicio se basa en proporcionar información profesional sin la necesidad de rastrear ni crear perfiles de los visitantes. No hay implementados scripts de Google Analytics, Meta Pixel ni rastreadores análogos de otras empresas de métricas.</p>
                        <p className="mt-4">Ocasionalmente, el navegador podría almacenar cookies técnicas de sesión estrictamente necesarias (creadas inherentemente por la infraestructura de despliegue o librerías de interfaz de usuario) para fines de rendimiento (como el balanceo de carga o prevención de fraude), las cuales no almacenan información que permita identificarle personalmente y están exentas del requerimiento de consentimiento según el art. 22.2 de la LSSI.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-light text-foreground mb-4">3. Cómo Gestionar las Cookies</h2>
                        <p>Si bien no emitimos cookies de seguimiento, usted puede permitir, bloquear o eliminar cualquier cookie general instalada en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador:</p>
                        <ul className="list-disc pl-5 mt-4 space-y-2">
                            <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noreferrer" className="text-accent hover:underline">Chrome</a></li>
                            <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer" className="text-accent hover:underline">Safari</a></li>
                            <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noreferrer" className="text-accent hover:underline">Firefox</a></li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-light text-foreground mb-4">4. Actualizaciones de la Política</h2>
                        <p>Si la arquitectura de la web cambiase para añadir autenticación de clientes o analítica, esta política será actualizada y se solicitará en ese momento su consentimiento explícito mediante un banner informativo a su llegada, según estipula la Autoridad de Control pertinente.</p>
                    </section>
                </div>
            </div>
            <ScrollToTop />
        </div>
    );
}
