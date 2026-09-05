'use client';

import { ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  name: string;
  title: ReactNode;
  bio: string;
  availableForTheMarket?: boolean;
}

export function Hero({ name, title, bio, availableForTheMarket = false }: HeroProps) {
  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("raphalelis@outlook.com");
      setShowToast(true);
      
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      console.error("Falha ao copiar o e-mail: ", err);
    }
  };

  return (
    <section className="py-8 sm:py-12 md:py-20 px-4 sm:px-6 max-w-5xl mx-auto relative">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
        {/* Lado Esquerdo: Informações */}
        <div className="md:col-span-7 flex flex-col items-start order-2 md:order-1 text-left">
          {availableForTheMarket && (
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Disponível para oportunidades
            </div>
          )}

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-900 dark:text-white uppercase mb-2 break-words w-full">
            {name}
          </h1>

          <h2 className="text-base sm:text-lg md:text-xl font-bold text-accent uppercase tracking-wide mb-4 sm:mb-6">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed mb-6 sm:mb-8">
            {bio}
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4 mb-6">
            <Link
              href="/experience"
              className="w-full sm:w-auto text-center px-6 py-3 bg-zinc-900 text-white dark:bg-white dark:text-black font-black uppercase text-xs tracking-wider hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all"
            >
              Trajetória
            </Link>
            <Link
              href="/projects"
              className="w-full sm:w-auto text-center px-6 py-3 bg-accent text-white font-black uppercase text-xs tracking-wider hover:bg-accent-hover transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
            >
              Projetos →
            </Link>
          </div>

          {/* Ícones de Redes Sociais / Contato */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/raphael-lelis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-all"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <button
              onClick={handleCopyEmail}
              aria-label="Copiar E-mail"
              className="p-2.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-all cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </button>
            <a
              href="https://instagram.com/faelesco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-all"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Lado Direito: Foto Responsiva */}
        <div className="md:col-span-5 flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative group w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72">
            <div className="absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 bg-accent border-2 border-zinc-900 dark:border-white transition-transform group-hover:translate-x-4 group-hover:translate-y-4" />
            
            <div className="relative w-full h-full border-2 border-zinc-900 dark:border-white bg-zinc-900 overflow-hidden">
              <Image
                src="/profile.png"
                alt={name}
                fill
                sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 288px"
                priority
                className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification (Flutuante no canto inferior direito) */}
      <div 
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 font-bold text-xs sm:text-sm uppercase tracking-wide transition-all duration-300 transform 
        bg-accent text-white border-2 border-zinc-900 dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]
        ${showToast ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"}`}
      >
        <span>✅</span>
        MANDA BALA NO E-mail!
      </div>
    </section>
  );
}