import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const [isLight, setIsLight] = useState(() => {
        if (typeof document !== 'undefined') {
            return document.documentElement.classList.contains('light');
        }
        return false;
    });

    const toggleTheme = () => {
        if (isLight) {
            document.documentElement.classList.remove('light');
            localStorage.setItem('theme', 'dark');
            setIsLight(false);
        } else {
            document.documentElement.classList.add('light');
            localStorage.setItem('theme', 'light');
            setIsLight(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 sm:px-4 sm:py-2 rounded-full bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-all cursor-pointer text-foreground flex items-center justify-center gap-2 group"
            aria-label="Toggle theme"
            title="Toggle Light/Dark Mode"
        >
            {isLight ? (
                <>
                    <Moon size={16} className="text-foreground group-hover:scale-110 transition-transform" />
                    <span className="text-xs uppercase tracking-widest text-foreground/90 hidden sm:block">Oscuro</span>
                </>
            ) : (
                <>
                    <Sun size={16} className="text-foreground group-hover:scale-110 transition-transform" />
                    <span className="text-xs uppercase tracking-widest text-foreground/90 hidden sm:block">Claro</span>
                </>
            )}
        </button>
    );
}
