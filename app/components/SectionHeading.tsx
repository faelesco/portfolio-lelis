import { ReactNode } from "react";

type Props = {
  title: ReactNode;
  description?: string;
  id?: string;
};

export function SectionHeading({ title, description, id }: Props) {
  return (
    <header className="mb-8 sm:mb-10">
      <h2 id={id} className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
          {description}
        </p>
      )}
    </header>
  );
}
