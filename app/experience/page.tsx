import type { Metadata } from "next";
import { ExperienceSection } from "../components/Experiences";
import { EducationSection } from "../components/Education";

export const metadata: Metadata = {
  title: "Experiência",
  description: "Trajetória profissional e formação acadêmica de Raphael Lelis.",
};

const SECTIONS = [
  { href: "#trajetoria", label: "Trajetória profissional" },
  { href: "#formacao", label: "Formação acadêmica" },
];

export default function ExperienciaPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <nav aria-label="Seções da página" className="mb-12 flex gap-2 overflow-x-auto pb-1">
        {SECTIONS.map((section) => (
          <a key={section.href} href={section.href} className="btn-secondary shrink-0 px-4 py-2 text-xs">
            {section.label}
          </a>
        ))}
      </nav>

      <div className="space-y-20">
        <ExperienceSection />
        <EducationSection />
      </div>
    </main>
  );
}
