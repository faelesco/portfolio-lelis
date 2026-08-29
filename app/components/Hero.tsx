import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  name: string;
  title: string;
  bio: string;
}

export function Hero({ name, title, bio}: HeroProps) {
  return (
    <section className="py-12 md:py-20 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        
        {/* Lado Esquerdo: Informações Pessoais */}
        <div className="md:col-span-7 flex flex-col items-start order-2 md:order-1">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-zinc-900 dark:text-white uppercase mb-2">
            {name}
          </h1>

          <h2 className="text-lg sm:text-xl font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wide mb-6">
            {title}
          </h2>

          <p className="text-base text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed mb-8">
            {bio}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/experiencia"
              className="px-6 py-3 bg-zinc-900 text-white dark:bg-white dark:text-black font-black uppercase text-xs tracking-wider hover:bg-cyan-400 hover:text-black dark:hover:bg-cyan-400 dark:hover:text-black transition-all"
            >
              Trajetória
            </Link>
            <Link
              href="/projetos"
              className="px-6 py-3 bg-cyan-400 text-black font-black uppercase text-xs tracking-wider hover:bg-cyan-300 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
            >
              Projetos →
            </Link>
          </div>
        </div>

        <div className="md:col-span-5 flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative group w-60 h-60 sm:w-72 sm:h-72">
            {/* Blocos de Sombra Deslocada Neon */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-cyan-400 border-2 border-zinc-900 dark:border-white transition-transform group-hover:translate-x-4 group-hover:translate-y-4" />
            
            {/* Moldura Principal da Foto */}
            <div className="relative w-full h-full border-2 border-zinc-900 dark:border-white bg-zinc-900 overflow-hidden">
              <Image
                src="/profile.png"
                alt={name}
                fill
                sizes="(max-width: 768px) 240px, 288px"
                priority
                className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}