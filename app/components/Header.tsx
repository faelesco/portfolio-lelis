'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type Theme = 'light' | 'dark';

export function Header() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-zinc-900 dark:text-white uppercase tracking-wider">
          Lelis<span className="text-accent">.ts</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Projetos
          </Link>
          <Link
            href="/experience"
            className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Experiência
          </Link>

          <button
            onClick={toggleTheme}
            className="px-3.5 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            aria-label="Alternar tema"
          >
            {theme === 'light' ? '🌙 Escuro' : '☀️ Claro'}
          </button>
        </nav>
      </div>
    </header>
  );
}