'use client';

import { useState } from "react";
import { PORTFOLIO_DATA } from "./constants/portfolio";

export function Projects() {
  const [filtroAtivo, setFiltroAtivo] = useState<string>("Todos");

  const todasAsTags = Array.from(
    new Set(PORTFOLIO_DATA.projects.flatMap((projeto) => projeto.tags))
  );
  
  const tagsParaFiltro = ["Todos", ...todasAsTags];

  const projetosFiltrados = filtroAtivo === "Todos" 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(projeto => projeto.tags.includes(filtroAtivo));

  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
        Projetos em Destaque
      </h2>

      <div className="flex flex-wrap gap-2 mb-8">
        {tagsParaFiltro.map((tag) => (
          <button
            key={tag}
            onClick={() => setFiltroAtivo(tag)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              filtroAtivo === tag
                ? "bg-blue-600 text-white dark:bg-blue-500"
                : "bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projetosFiltrados.map((projeto) => (
          <article 
            key={projeto.id} 
            className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between shadow-sm"
          >
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                {projeto.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                {projeto.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {projeto.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm font-medium">
              {projeto.linkGithub && (
                <a 
                  href={projeto.linkGithub} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  GitHub →
                </a>
              )}
              {projeto.linkDeploy && (
                <a 
                  href={projeto.linkDeploy} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500 dark:text-blue-400 transition-colors"
                >
                  Demo Ao Vivo →
                </a>
              )}
            </div>
          </article>
        ))}
        
        {projetosFiltrados.length === 0 && (
          <p className="text-slate-500 col-span-full text-center py-8">
            Nenhum projeto encontrado com essa tecnologia.
          </p>
        )}
      </div>
    </section>
  );
}