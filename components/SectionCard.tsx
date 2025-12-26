import type { ReactNode } from "react";

type SectionCardProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function SectionCard({ eyebrow, title, children }: SectionCardProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-agent-blue via-agent-teal to-agent-blue" />
      <div className="px-8 py-10 md:px-12 md:py-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-agent-blue/80">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 md:text-4xl">
          {title}
        </h2>
        <div className="mt-6 space-y-5 text-lg text-slate-600">{children}</div>
      </div>
    </section>
  );
}
