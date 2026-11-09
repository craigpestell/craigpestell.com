import CopyEmail from './CopyEmail';
import type { PersonalInfo, SiteCopy } from '@/data/portfolio';

export default function Footer({ personalInfo, site }: { personalInfo: PersonalInfo; site: SiteCopy }) {
  const pageSpeedUrl = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(personalInfo.website)}`;

  return (
    <>
      <section id="contact" aria-labelledby="contact-title" className="bg-secondary text-secondary-foreground">
        <div className="shell flex flex-col items-start gap-[18px] py-[72px]">
          <h2
            id="contact-title"
            className="max-w-[16em] text-balance font-display text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.02em]"
          >
            {site.contactHeading}
          </h2>
          <p className="max-w-[38em] text-panel-muted">
            {site.contactBody} Based in {personalInfo.location}. {site.workingHours}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="select-all font-display text-[clamp(1.25rem,3vw,1.75rem)] font-bold underline underline-offset-4"
            >
              {personalInfo.email}
            </a>
            <CopyEmail email={personalInfo.email} />
          </div>
          <p className="flex flex-wrap gap-5 font-medium">
            <a href={personalInfo.linkedin} className="underline underline-offset-[3px]" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={personalInfo.github} className="underline underline-offset-[3px]" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </section>
      <footer className="shell flex flex-wrap justify-between gap-x-6 gap-y-1 py-5 text-base text-muted-foreground">
        <span>
          © {new Date().getFullYear()} {personalInfo.name}
        </span>
        <span>
          Built with Next.js and Tailwind CSS.{' '}
          <a href={pageSpeedUrl} className="link" rel="noopener noreferrer">
            Lighthouse 100
          </a>
        </span>
      </footer>
    </>
  );
}
