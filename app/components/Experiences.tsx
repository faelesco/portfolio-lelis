import { PORTFOLIO_DATA } from "./constants/portfolio";
import { Experience } from "../types/experience";
import { SectionHeading } from "./SectionHeading";

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
    <section id="trajetoria" aria-labelledby="trajetoria-titulo" className="scroll-mt-24">
      <SectionHeading id="trajetoria-titulo" title="Trajetória profissional" />

      <div className="space-y-6">
        {groupedExperiences.map((company) => (
          <div key={company.enterprise} className="card sm:p-8">
            <div className="flex flex-col gap-2 border-b border-zinc-200 pb-5 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800">
              <h3 className="text-xl font-bold tracking-tight text-accent sm:text-2xl">{company.enterprise}</h3>
              {company.roles[0].companyDuration && (
                <span className="tag w-fit">{company.roles[0].companyDuration}</span>
              )}
            </div>

            <ol className="relative mt-6 ml-2 space-y-8 border-l border-zinc-200 pl-6 sm:ml-3 sm:pl-8 dark:border-zinc-800">
              {company.roles.map((role) => (
                <li key={role.id} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-zinc-400 sm:-left-[37px] dark:border-zinc-950 dark:bg-zinc-600"
                  />

                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h4 className="text-base font-semibold text-zinc-900 sm:text-lg dark:text-white">{role.position}</h4>
                    <time className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{role.period}</time>
                  </div>

                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-400 dark:text-zinc-400">
                    {role.description.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {role.technologies.map((tech) => (
                      <li key={tech} className="tag">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}
