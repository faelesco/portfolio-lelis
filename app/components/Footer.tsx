'use client';

import { useState } from "react";

export function Footer() {
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
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 mt-12 sm:mt-20 overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col">
        
        {/* Tipografia Massiva */}
        <h2 className="text-[3rem] sm:text-[5rem] md:text-[6.5rem] font-black uppercase text-zinc-900 dark:text-white leading-[0.85] tracking-tighter mb-10 md:mb-16 w-full">
          Vamos construir <br className="hidden sm:block" />
          algo <span className="text-accent">incrível.</span>
        </h2>

        {/* Ações e Links */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-zinc-200 dark:border-zinc-800 pt-8">
          
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Botão interativo que copia o e-mail */}
            <button 
              onClick={handleCopyEmail}
              className="px-6 py-3.5 bg-zinc-900 text-white dark:bg-white dark:text-black font-black uppercase text-xs sm:text-sm tracking-wider hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] cursor-pointer"
            >
              Copiar E-mail ↗
            </button>
            <a
              href="https://www.linkedin.com/in/raphael-lelis"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white font-black uppercase text-xs sm:text-sm tracking-wider border border-zinc-300 dark:border-zinc-800 hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-all"
            >
              LinkedIn
            </a>
          </div>

          {/* Copyright e Sociais Extra */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            <span>© {new Date().getFullYear()} Raphael Lelis</span>
            <span className="hidden sm:inline-block">/</span>
            <div className="flex items-center gap-4 mt-2 sm:mt-0">
              <a href="https://github.com/faelesco" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                GitHub
              </a>
              <a href="https://instagram.com/faelesco" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                Instagram
              </a>
            </div>
          </div>
          
        </div>
      </div>

      {/* Toast Notification para o Footer */}
      <div 
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 font-bold text-xs sm:text-sm uppercase tracking-wide transition-all duration-300 transform 
        bg-accent text-white border-2 border-zinc-900 dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]
        ${showToast ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"}`}
      >
        <span>✅</span>
        MANDA BALA NESSE E-MAIL!
      </div>
    </footer>
  );
}