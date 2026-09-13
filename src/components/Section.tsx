import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="border-b-4 border-foreground pb-1 font-display text-3xl font-black uppercase leading-none sm:text-4xl">
        {title}
      </h2>
      <div className="flex flex-col gap-2 text-lg leading-relaxed">{children}</div>
    </section>
  );
}
