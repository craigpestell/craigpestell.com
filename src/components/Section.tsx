import type { ReactNode } from 'react';

// A titled page section: hairline rule, heading in the left rail, intro
// beside it, content below.
export default function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-border">
      <div className="shell py-11 md:py-16">
        <div className="grid gap-x-8 gap-y-2 md:grid-cols-[232px_1fr] md:items-baseline">
          <h2 id={`${id}-title`} className="font-display text-[2rem] font-extrabold leading-tight tracking-[-0.02em]">
            {title}
          </h2>
          <p className="max-w-[40em] text-muted-foreground">{intro}</p>
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
