import { PORTFOLIO_DATA } from "./constants/portfolio";
import { SectionHeading } from "./SectionHeading";

export function BentoGrid() {
  return (
    <section aria-labelledby="impacto" className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <SectionHeading
        id="impacto"
        title="Impacto & stack"
        description="Resultados e áreas de atuação ao longo da carreira."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        {PORTFOLIO_DATA.impactMetrics.map((metric) => (
          <article
            key={metric.id}
            className={`${metric.colSpan} flex flex-col justify-between rounded-2xl border p-6 sm:p-8 ${
              metric.isHighlight
                ? "border-accent bg-accent text-white"
                : "border-zinc-200 bg-zinc-50 hover:border-accent/60 dark:border-zinc-800 dark:bg-zinc-900/40"
            } transition-colors`}
          >
            <div>
              <p
                className={`text-xs font-semibold uppercase tracking-wider ${
                  metric.isHighlight ? "text-white/80" : "text-zinc-500 dark:text-zinc-400"
                }`}
              >
                {metric.objective}
              </p>

              <h3
                className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${
                  metric.isHighlight ? "text-white" : "text-accent"
                }`}
              >
                {metric.title}
              </h3>

              <p
                className={`mt-2 text-sm font-semibold ${
                  metric.isHighlight ? "text-white" : "text-zinc-900 dark:text-white"
                }`}
              >
                {metric.keyResult}
              </p>

              <p
                className={`mt-3 text-sm leading-relaxed ${
                  metric.isHighlight ? "text-white/90" : "text-zinc-600 dark:text-zinc-400"
                }`}
              >
                {metric.description}
              </p>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2">
              {metric.technologies.map((tech) => (
                <li
                  key={tech}
                  className={`rounded-md px-2.5 py-1 text-xs font-medium ${
                    metric.isHighlight
                      ? "bg-white/15 text-white"
                      : "border border-zinc-200 bg-white text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                  }`}
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
