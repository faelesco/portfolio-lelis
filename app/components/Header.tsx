'use client';

import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export function Header() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-lg text-slate-900 dark:text-white">
          Portfolio<span className="text-blue-600 dark:text-blue-400">.ts</span>
        </span>

        <button
          onClick={toggleTheme}
          className="px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          aria-label="Alternar tema"
        >
          {theme === 'light' ? '🌙 Escuro' : '☀️ Claro'}
        </button>
      </div>
    </header>
  );
}