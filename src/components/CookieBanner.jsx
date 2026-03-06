import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if the user has already made a choice
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Add a small delay for smoother entrance
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        // Store explicit consent
        localStorage.setItem('cookieConsent', 'accepted');
        // Here you would initialize non-essential cookies (Analytics, etc.)
        setIsVisible(false);
    };

    const handleDecline = () => {
        // Store technical rejection (Allowed by GDPR as strictly necessary to remember the choice)
        localStorage.setItem('cookieConsent', 'declined');
        // Here you ensure no non-essential cookies are loaded
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-[100] p-4 md:p-6 animate-scale-fade">
            <div className="max-w-4xl mx-auto backdrop-blur-xl bg-background/90 border border-foreground/10 rounded-2xl md:rounded-full p-6 md:px-8 md:py-4 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">

                {/* Subtle gradient background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex-1 text-sm md:text-base font-sans leading-relaxed text-foreground/80 text-center md:text-left z-10">
                    <p>
                        Utilizamos cookies propias y de terceros para <strong>funcionamiento técnico</strong> y análisis estadístico.
                        Si haces clic en &ldquo;Rechazar&rdquo;, solo utilizaremos las cookies técnicas estrictamente necesarias.
                        Puedes consultar los detalles completos en nuestra{' '}
                        <Link to="/politica-cookies" className="text-foreground underline decoration-accent decoration-2 underline-offset-4 hover:text-accent transition-colors">
                            Política de Cookies
                        </Link>.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto z-10 shrink-0">
                    <button
                        onClick={handleDecline}
                        className="px-6 py-2.5 rounded-full border border-foreground/20 text-foreground/70 hover:text-foreground hover:bg-foreground/5 hover:border-foreground/50 transition-all text-xs font-mono uppercase tracking-widest cursor-expand"
                    >
                        Rechazar
                    </button>
                    <button
                        onClick={handleAccept}
                        className="px-6 py-2.5 rounded-full bg-accent text-white hover:bg-[#A33325] transition-colors border border-transparent shadow-[0_0_15px_rgba(203,78,61,0.3)] hover:shadow-[0_0_20px_rgba(203,78,61,0.5)] text-xs font-mono uppercase tracking-widest cursor-expand"
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    );
}
