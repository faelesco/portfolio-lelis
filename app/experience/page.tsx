import { Header } from "../components/Header";
import { ExperienceSection } from "../components/Experiences";

export default function ExperienciaPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white selection:bg-cyan-400 selection:text-black transition-colors">
      <main className="py-8">
        <ExperienceSection />
      </main>
    </div>
  );
}