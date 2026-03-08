import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import MagneticButton from './MagneticButton';

export default function Contact() {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo('.contact-reveal',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
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
    }, { scope: containerRef });

    return (
        <section id="contact" ref={containerRef} className="py-32 bg-transparent text-foreground px-6 border-t border-container">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <h2 className="contact-reveal text-5xl md:text-7xl font-display font-light tracking-tighter mb-8 text-center">
                    ¿Tienes un sistema que <span className="font-serif italic font-light text-accent">optimizar</span>?
                </h2>
                <p className="contact-reveal text-xl font-sans text-foreground mb-16 max-w-2xl text-center">
                    Hablemos sobre cómo reducir tu deuda técnica y escalar operaciones mediante automatización e inteligencia artificial.
                </p>
                <div className="contact-reveal w-full max-w-xl">
                    <form action="https://formsubmit.co/Synaplynx@gmail.com" method="POST" className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-foreground text-sm font-sans tracking-wide uppercase">Nombre</label>
                            <input type="text" name="name" required className="bg-transparent border-b border-foreground/20 text-foreground px-2 py-3 focus:outline-none focus:border-accent transition-colors font-sans w-full" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-foreground text-sm font-sans tracking-wide uppercase">Correo electrónico</label>
                            <input type="email" name="email" required className="bg-transparent border-b border-foreground/20 text-foreground px-2 py-3 focus:outline-none focus:border-accent transition-colors font-sans w-full" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-foreground text-sm font-sans tracking-wide uppercase">Teléfono</label>
                            <input type="tel" name="phone" className="bg-transparent border-b border-foreground/20 text-foreground px-2 py-3 focus:outline-none focus:border-accent transition-colors font-sans w-full" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-foreground text-sm font-sans tracking-wide uppercase">Mensaje</label>
                            <textarea name="message" rows="4" required className="bg-transparent border-b border-foreground/20 text-foreground px-2 py-3 focus:outline-none focus:border-accent transition-colors font-sans resize-none w-full"></textarea>
                        </div>

                        {/* Honeypot & Setup FormSubmit */}
                        <input type="text" name="_honey" style={{ display: 'none' }} />
                        <input type="hidden" name="_subject" value="Nuevo contacto desde Portfolio Roberto Chamorro" />
                        <input type="hidden" name="_captcha" value="false" />

                        <button type="submit" className="mt-8 bg-transparent text-foreground border border-secondary hover:text-background px-10 py-5 rounded-none font-sans uppercase tracking-widest text-sm transition-colors cursor-pointer w-full btn-fill-hover">
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
