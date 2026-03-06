import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomCursor from '../components/CustomCursor';
import ScrollToTop from '../components/ScrollToTop';
import ParticlesBackground from '../components/ParticlesBackground';

export default function PoliticaPrivacidad() {
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

                <h1 className="text-4xl md:text-5xl font-display font-light uppercase tracking-tighter mb-12">Política de Privacidad</h1>

                <div className="space-y-8 font-sans text-foreground/80 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-display font-light text-foreground mb-4">1. Tratamiento de los Datos Personales</h2>
                        <p>En el marco del cumplimiento del Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), le informo de que al utilizar el formulario de contacto de este sitio, sus datos personales serán procesados de forma confidencial.</p>
                        <p className="mt-4"><strong>Responsable del Tratamiento:</strong> Roberto Chamorro (Synaplynx@gmail.com).</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-light text-foreground mb-4">2. Finalidad y Legitimación</h2>
                        <p><strong>Finalidad:</strong> Los datos proporcionados a través del formulario (Nombre, Email, Teléfono, Mensaje) se recaban única y exclusivamente con la finalidad de gestionar la consulta técnica, contacto profesional o propuestas de colaboración generadas por el propio usuario.</p>
                        <p className="mt-4"><strong>Legitimación:</strong> La base legal es el consentimiento explícito brindado al enviar el formulario (Art. 6.1.a RGPD).</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-light text-foreground mb-4">3. Conservación y Destinatarios</h2>
                        <p>Los datos se conservarán durante el tiempo estrictamente necesario para cumplir con la finalidad para la que fueron recabados. No se cederán a terceros, salvo obligación legal. Los envíos se gestionan mediante el proveedor de enrutamiento de correos electrónicos FormSubmit, cuyos servidores de tránsito actúan únicamente como vía de transmisión hacia mi bandeja de entrada.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-light text-foreground mb-4">4. Derechos del Usuario</h2>
                        <p>Usted puede ejercer en cualquier momento los derechos de:</p>
                        <ul className="list-disc pl-5 mt-4 space-y-2">
                            <li><strong>Acceso</strong> a los datos que poseo sobre usted.</li>
                            <li><strong>Rectificación</strong> o <strong>Supresión</strong> (Derecho al olvido).</li>
                            <li><strong>Limitación</strong> del tratamiento o <strong>Oposición</strong> al mismo.</li>
                        </ul>
                        <p className="mt-4">Para ejercer sus derechos, póngase en contacto a través de Synaplynx@gmail.com aportando identificación adecuada.</p>
                    </section>
                </div>
            </div>
            <ScrollToTop />
        </div>
    );
}
