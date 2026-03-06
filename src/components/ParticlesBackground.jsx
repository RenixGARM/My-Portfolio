import React, { useMemo } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // Load only the essential features to keep it lightweight
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = () => {
        // console.log(container);
    };

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "connect",
                    },
                },
                modes: {
                    push: {
                        quantity: 2,
                    },
                    connect: {
                        distance: 150,
                        links: {
                            opacity: 0.2
                        },
                        radius: 100
                    }
                },
            },
            particles: {
                color: {
                    value: "#CB4E3D",
                },
                links: {
                    color: "#CB4E3D",
                    distance: 120,
                    enable: true,
                    opacity: 0.05, // Very subtle lines
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce", // So they don't get lost outside constraints
                    },
                    random: true,
                    speed: 0.3, // Very slow movement
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        width: 800,
                        height: 800
                    },
                    value: 60, // Not too many to keep it clean
                },
                opacity: {
                    value: { min: 0.1, max: 0.3 }, // Subtle appearance
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 2 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
                className="fixed inset-0 z-[-1] pointer-events-none"
            />
        );
    }

    return null;
};

export default ParticlesBackground;
