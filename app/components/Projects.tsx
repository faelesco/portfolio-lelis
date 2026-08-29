'use client';

import { useState } from "react";
import { Project } from "../types/project";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const [filtroAtivo, setFiltroAtivo] = useState<string>("TODOS");

  const todasAsTags = Array.from(
    new Set(projects.flatMap((p) => p.tags.map((t) => t.toUpperCase())))
  );
  
  const tagsParaFiltro = ["TODOS", ...todasAsTags];

  const projetosFiltrados = filtroAtivo === "TODOS" 
    ? projects 
    : projects.filter(p => p.tags.some(t => t.toUpperCase() === filtroAtivo));

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-black mb-8 text-zinc-900 dark:text-white uppercase tracking-tight">
        Projetos <span className="text-cyan-400">.</span>
      </h2>

      {/* Filtros em Botões Adaptáveis ao Tema */}
      <div className="flex flex-wrap gap-2 mb-10">
        {tagsParaFiltro.map((tag) => (
          <button
            key={tag}
            onClick={() => setFiltroAtivo(tag)}
            className={`px-5 py-2 text-xs font-bold uppercase transition-all border ${
              filtroAtivo === tag
                ? "bg-cyan-400 text-black border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                : "bg-zinc-100 text-zinc-800 border-zinc-300 hover:border-zinc-400 dark:bg-black dark:text-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-500 dark:hover:text-white"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Cards de Projetos */}
      <div className="flex flex-col gap-4">
        {projetosFiltrados.map((projeto) => (
          <article 
            key={projeto.id} 
            className="p-6 bg-zinc-900 dark:bg-zinc-950 border border-zinc-800 hover:border-cyan-400/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-black uppercase text-white mb-2 tracking-wide">
                {projeto.title}
              </h3>
              <p className="text-zinc-400 text-sm mb-4 max-w-2xl font-normal">
                {projeto.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {projeto.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-0.5 text-[10px] font-bold uppercase bg-zinc-800 text-cyan-400 border border-zinc-700 dark:bg-zinc-900 dark:border-zinc-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-3 shrink-0">
              {projeto.linkGithub && (
                <a 
                  href={projeto.linkGithub} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-black border border-zinc-700 text-white text-xs font-bold uppercase hover:bg-zinc-800 transition-colors"
                >
                  GitHub
                </a>
              )}
              {projeto.linkDeploy && (
                <a 
                  href={projeto.linkDeploy} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-cyan-400 text-black text-xs font-bold uppercase hover:bg-cyan-300 transition-colors"
                >
                  Ver Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}