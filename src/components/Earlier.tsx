import type { Experience } from '@/data/portfolio';

function years(role: Experience) {
  const start = role.startDate.slice(0, 4);
  const end = role.endDate ? role.endDate.slice(0, 4) : 'present';
  return start === end ? start : `${start} to ${end}`;
}

export default function Earlier({ roles }: { roles: Experience[] }) {
  return (
    <ul>
      {roles.map((role) => (
        <li
          key={role.id}
          className="grid gap-x-8 gap-y-1 border-t border-border py-3 text-[17px] md:grid-cols-[232px_minmax(0,15em)_1fr]"
        >
          <span className="tabular-nums text-muted-foreground">{years(role)}</span>
          <span className="font-semibold">
            {role.company}
            <span className="block text-base font-normal text-muted-foreground">{role.position}</span>
          </span>
          <span>{role.description}</span>
        </li>
      ))}
    </ul>
  );
}
