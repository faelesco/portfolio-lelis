// app/components/BentoGrid.tsx
import { PORTFOLIO_DATA } from "./constants/portfolio";

export function BentoGrid() {
  return (
    <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-black mb-8 text-zinc-900 dark:text-white uppercase tracking-tight">
        Impacto & Stack <span className="text-accent">.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {PORTFOLIO_DATA.impactMetrics.map((metric) => (
          <div
            key={metric.id}
            className={`${metric.colSpan} p-6 sm:p-8 transition-all flex flex-col justify-between ${
              metric.isHighlight
                ? "bg-accent border border-accent-hover"
                : "bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-accent"
            }`}
          >
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 ${
                    metric.isHighlight
                      ? "bg-black/20 text-white border border-white/20"
                      : "bg-zinc-200 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-800"
                  }`}
                >
                  {metric.objective}
                </span>
              </div>
              <h3
                className={`text-4xl font-black uppercase mb-2 ${
                  metric.isHighlight ? "text-white" : "text-accent"
                }`}
              >
                {metric.title}
              </h3>
              <p
                className={`text-sm font-bold uppercase tracking-wide mb-2 ${
                  metric.isHighlight ? "text-white" : "text-zinc-900 dark:text-white"
                }`}
              >
                {metric.keyResult}
              </p>
              <p
                className={`text-sm font-normal leading-relaxed ${
                  metric.isHighlight ? "text-white/90" : "text-zinc-600 dark:text-zinc-400"
                }`}
              >
                {metric.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {metric.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-2.5 py-1 text-[10px] font-bold uppercase ${
                    metric.isHighlight
                      ? "bg-black/20 text-white border border-white/20"
                      : "bg-zinc-200 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}