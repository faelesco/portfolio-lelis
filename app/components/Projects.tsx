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
    <section className="py-8 sm:py-12 px-4 sm:px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 text-zinc-900 dark:text-white uppercase tracking-tight">
        Projetos <span className="text-accent">.</span>
      </h2>

      {/* Filtros */}
      <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
        {tagsParaFiltro.map((tag) => (
          <button
            key={tag}
            onClick={() => setFiltroAtivo(tag)}
            className={`px-3 py-1.5 sm:px-5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase transition-all border ${
              filtroAtivo === tag
                ? "bg-accent text-white border-accent shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                : "bg-zinc-100 text-zinc-800 border-zinc-300 hover:border-zinc-400 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:text-white"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Lista de Cards */}
      <div className="flex flex-col gap-4">
        {projetosFiltrados.map((projeto) => (
          <article
            key={projeto.id}
            className="p-5 sm:p-6 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-accent transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-black uppercase text-zinc-900 dark:text-white mb-2 tracking-wide break-words">
                {projeto.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm mb-4 max-w-2xl font-normal leading-relaxed">
                {projeto.description}
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {projeto.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase bg-zinc-200 text-zinc-800 border border-zinc-300 dark:bg-zinc-900 dark:text-accent dark:border-zinc-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 shrink-0">
              {projeto.linkGithub && (
                <a
                  href={projeto.linkGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center px-4 py-2.5 bg-black border border-zinc-700 text-white text-xs font-bold uppercase hover:bg-zinc-800 transition-colors"
                >
                  GitHub
                </a>
              )}
              {projeto.linkDeploy && (
                <a
                  href={projeto.linkDeploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center px-4 py-2.5 bg-accent text-white text-xs font-bold uppercase hover:bg-accent-hover transition-colors"
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