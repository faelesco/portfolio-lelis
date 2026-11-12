import { PORTFOLIO_DATA } from "./constants/portfolio";
import { SectionHeading } from "./SectionHeading";

export function EducationSection() {
  return (
    <section id="formacao" aria-labelledby="formacao-titulo" className="scroll-mt-24">
      <SectionHeading id="formacao-titulo" title="Formação acadêmica" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {PORTFOLIO_DATA.education.map((item) => (
          <article key={item.id} className="card flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center justify-between gap-3">
                <time className="tag">{item.period}</time>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-zinc-500 hover:text-accent dark:text-zinc-400 transition-colors"
                  >
                    Site da instituição ↗
                  </a>
                )}
              </div>

              <h3 className="mt-4 text-lg font-semibold tracking-tight text-accent sm:text-xl">
                {item.institution}
              </h3>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{item.degree}</p>
            </div>

            {item.technologies && item.technologies.length > 0 && (
              <ul className="flex flex-wrap gap-1.5 border-t border-zinc-200 pt-4 dark:border-zinc-800">
                {item.technologies.map((tech) => (
                  <li key={tech} className="tag">
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
