// app/components/Experience.tsx
import { PORTFOLIO_DATA } from "./constants/portfolio";
import { Experience } from "../types/experience";

interface CompanyGroup {
  enterprise: string;
  roles: Experience[];
}

export function ExperienceSection() {
  const groupedExperiences = PORTFOLIO_DATA.experiences.reduce((acc, current) => {
    const company = acc.find((item) => item.enterprise === current.enterprise);
    if (company) {
      company.roles.push(current);
    } else {
      acc.push({ enterprise: current.enterprise, roles: [current] });
    }
    return acc;
  }, [] as CompanyGroup[]);

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 sm:mb-10 text-zinc-900 dark:text-white uppercase tracking-tight">
        Trajetória <span className="text-accent">.</span>
      </h2>

      <div className="space-y-6 sm:space-y-8">
        {groupedExperiences.map((company) => {
          const tempoTotal = company.roles[0].companyDuration || "Período N/A";

          return (
            <div 
              key={company.enterprise} 
              className="p-5 sm:p-8 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 transition-all hover:border-accent"
            >
              {/* Cabeçalho da Empresa */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-zinc-300 dark:border-zinc-800 gap-2">
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-accent tracking-wide">
                  {company.enterprise}
                </h3>
                <span className="text-xs font-bold uppercase px-3 py-1 bg-zinc-200 dark:bg-zinc-950 text-zinc-800 dark:text-accent border border-zinc-300 dark:border-zinc-800 w-fit">
                  {tempoTotal}
                </span>
              </div>

              {/* Linha do Tempo de Cargos */}
              <div className="relative border-l-2 border-zinc-300 dark:border-zinc-800 ml-2 md:ml-3 space-y-8 pl-6 md:pl-8">
                {company.roles.map((role) => (
                  <div key={role.id} className="relative group">
                    <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3 h-3 bg-zinc-400 dark:bg-zinc-700 group-hover:bg-accent transition-colors border-2 border-zinc-100 dark:border-zinc-900" />

                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-1">
                      <h4 className="text-lg md:text-xl font-black uppercase text-zinc-900 dark:text-white">
                        {role.position}
                      </h4>
                      <span className="text-xs font-bold uppercase text-zinc-500 dark:text-zinc-400 tracking-wider">
                        {role.period}
                      </span>
                    </div>

                    <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 mb-4 font-normal leading-relaxed">
                      {role.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {role.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase bg-zinc-200 text-zinc-800 border border-zinc-300 dark:bg-zinc-950 dark:text-accent dark:border-zinc-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}