import type { Experience } from '@/data/portfolio';
import { formatShortMonthYear } from '@/lib/formatDate';

export default function Work({ roles }: { roles: Experience[] }) {
  return (
    <div>
      {roles.map((role) => (
        <article key={role.id} className="grid gap-x-8 gap-y-4 border-t border-border py-9 md:grid-cols-[232px_1fr]">
          <div className="text-[15px] text-muted-foreground">
            <p className="font-display text-[22px] font-bold leading-tight text-foreground">{role.company}</p>
            <p className="mt-1">{role.position}</p>
            <p>
              {formatShortMonthYear(role.startDate)} to{' '}
              {role.endDate ? formatShortMonthYear(role.endDate) : 'present'}
            </p>
          </div>
          <div className="flex max-w-[44em] flex-col gap-3.5">
            <h3 className="text-xl font-semibold leading-snug">{role.site!.heading}</h3>
            <p>{role.site!.summary}</p>
            <ul className="points flex flex-col gap-2">
              {role.site!.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="text-[14.5px] text-muted-foreground">{role.technologies.join(', ')}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
