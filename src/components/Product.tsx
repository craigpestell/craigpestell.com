import Image from 'next/image';
import type { Project } from '@/data/portfolio';

export default function Product({ project }: { project: Project }) {
  return (
    <div className="grid gap-10 border-t border-border pt-9 md:grid-cols-[1fr_1.2fr] md:items-center">
      <div className="flex flex-col gap-3.5">
        <h3 className="font-display text-[26px] font-bold leading-tight">{project.title}</h3>
        <p>{project.longDescription}</p>
        {project.highlights && (
          <ul className="points flex flex-col gap-2">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}
        <p className="text-[14.5px] text-muted-foreground">{project.technologies.join(', ')}</p>
        <p className="flex flex-wrap gap-5 font-medium">
          {project.projectUrl && (
            <a href={project.projectUrl} className="link" rel="noopener noreferrer">
              View on wordpress.org
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} className="link" rel="noopener noreferrer">
              Source on GitHub
            </a>
          )}
        </p>
      </div>
      <Image
        src={project.imageUrl}
        alt={`${project.title} admin screen`}
        width={1120}
        height={738}
        sizes="(min-width: 860px) 590px, calc(100vw - 40px)"
        className="h-auto w-full rounded-lg border border-border"
      />
    </div>
  );
}
