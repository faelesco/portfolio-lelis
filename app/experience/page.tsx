import { ExperienceSection } from "../components/Experiences";
import { EducationSection } from "../components/Education";

export default function ExperienciaPage() {
  return (
    <main className="min-h-screen pb-16">
      {/* Mini Header / Navegação Rápida Ancorada */}
      <div className="pt-8 sm:pt-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 pb-6 border-b border-zinc-200 dark:border-zinc-800 overflow-x-auto">
          <a
            href="#trajetoria"
            className="flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-wider bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border border-zinc-900 dark:border-white hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all shrink-0"
          >
            <span>💼</span> Trajetória Profissional
          </a>
          <a
            href="#formacao"
            className="flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-wider bg-zinc-100 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800 hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-all shrink-0"
          >
            <span>🎓</span> Formação Acadêmica
          </a>
        </div>
      </div>

      {/* Seções com ancoragem e margem de rolagem */}
      <div id="trajetoria" className="scroll-mt-20">
        <ExperienceSection />
      </div>

      <div id="formacao" className="scroll-mt-20">
        <EducationSection />
      </div>
    </main>
  );
}