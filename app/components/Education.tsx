// app/components/Education.tsx
import { PORTFOLIO_DATA } from "./constants/portfolio";

export function EducationSection() {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 sm:mb-10 text-zinc-900 dark:text-white uppercase tracking-tight">
        Formação Acadêmica <span className="text-accent">.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {PORTFOLIO_DATA.education.map((item) => (
          <div
            key={item.id}
            className="p-5 sm:p-6 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-accent transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase px-2.5 py-1 bg-zinc-200 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800">
                  {item.period}
                </span>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase text-zinc-500 hover:text-accent dark:text-zinc-400 dark:hover:text-accent transition-colors flex items-center gap-1"
                  >
                    Website ↗
                  </a>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-black uppercase text-accent tracking-wide mb-1">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {item.institution}
                  </a>
                ) : (
                  item.institution
                )}
              </h3>

              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 uppercase mb-4">
                {item.degree}
              </p>
            </div>

            {item.technologies && item.technologies.length > 0 && (
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase bg-zinc-200 text-zinc-800 border border-zinc-300 dark:bg-zinc-900 dark:text-accent dark:border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}