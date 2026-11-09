import type { Education, Skill } from '@/data/portfolio';

const groups: { category: Skill['category']; label: string }[] = [
  { category: 'frontend', label: 'Frontend' },
  { category: 'backend', label: 'Backend' },
  { category: 'languages', label: 'Languages' },
  { category: 'tools', label: 'Platforms and tools' },
  { category: 'other', label: 'Other' },
];

const row = 'grid gap-x-8 gap-y-1 border-t border-border py-3 md:grid-cols-[232px_1fr]';

export default function Stack({ skills, education }: { skills: Skill[]; education: Education[] }) {
  return (
    <dl>
      {groups.map(({ category, label }) => {
        const names = skills.filter((skill) => skill.category === category).map((skill) => skill.name);
        if (names.length === 0) return null;
        return (
          <div key={category} className={row}>
            <dt className="text-[15.5px] text-muted-foreground">{label}</dt>
            <dd className="max-w-[44em]">{names.join(', ')}</dd>
          </div>
        );
      })}
      <div className={row}>
        <dt className="text-[15.5px] text-muted-foreground">Education</dt>
        <dd className="flex max-w-[44em] flex-col gap-1">
          {education.map((entry) => (
            <span key={entry.id}>
              {entry.degree}, {entry.institution}, {entry.endDate.slice(0, 4)}
            </span>
          ))}
        </dd>
      </div>
    </dl>
  );
}
