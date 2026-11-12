"use client";

import { useState } from "react";
import { Project } from "../types/project";

interface ProjectsProps {
  projects: Project[];
}

const ALL = "Todos";

export function Projects({ projects }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<string>(ALL);

  const tags = Array.from(new Set(projects.flatMap((p) => p.tags)));
  const filters = [ALL, ...tags];

  const visibleProjects =
    activeFilter === ALL ? projects : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <div>
      {filters.length > 1 && (
        <div role="group" aria-label="Filtrar por tecnologia" className="mb-8 flex flex-wrap gap-2">
          {filters.map((tag) => {
            const isActive = activeFilter === tag;
            return (
              <button
                key={tag}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(tag)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  isActive
                    ? "border-accent bg-accent text-white"
                    : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      )}

      {visibleProjects.length === 0 ? (
        <p className="text-sm text-zinc-500 dark:text-zinc-400">Nenhum projeto encontrado para este filtro.</p>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <article key={project.id} className="card flex flex-col justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold capitalize tracking-tight text-zinc-900 dark:text-white">
                  {project.title}
                </h3>
                {project.description && (
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                )}
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.linkGithub && (
                  <a
                    href={project.linkGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary px-4 py-2 text-xs"
                  >
                    Código no GitHub
                  </a>
                )}
                {project.linkDeploy && (
                  <a
                    href={project.linkDeploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-4 py-2 text-xs"
                  >
                    Ver demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
