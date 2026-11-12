import { ReactNode } from "react";
import Link from "next/link";
import { PhotoStack } from "./PhotoStack";
import { CopyEmailButton } from "./CopyEmailButton";
import { SocialLinks } from "./SocialLinks";

interface HeroProps {
  name: string;
  title: ReactNode;
  bio: string;
  availableForTheMarket?: boolean;
}

export function Hero({ name, title, bio, availableForTheMarket = false }: HeroProps) {
  return (
    <section className="mx-auto grid w-full max-w-5xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-12 md:gap-12 md:py-24">
      <div className="order-2 flex flex-col items-start md:order-1 md:col-span-7">
        {availableForTheMarket && (
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            Disponível para oportunidades
          </span>
        )}

        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-white">
          {name}
        </h1>

        <p className="mt-4 text-base font-medium leading-relaxed text-accent sm:text-lg">{title}</p>

        <p className="mt-6 max-w-prose text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{bio}</p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link href="/projects" className="btn-primary">
            Ver projetos
          </Link>
          <Link href="/experience" className="btn-secondary">
            Trajetória profissional
          </Link>
        </div>

        <div className="mt-8 flex items-center gap-2">
          <SocialLinks />
          <CopyEmailButton iconOnly />
        </div>
      </div>

      <div className="order-1 flex justify-center md:order-2 md:col-span-5 md:justify-end">
        <PhotoStack />
      </div>
    </section>
  );
}
