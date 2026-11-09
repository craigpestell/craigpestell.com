import DarkThemeToggleSimple from './DarkThemeToggleSimple';
import { portfolioData } from '@/data/portfolio';

export const sections = [
  { id: 'work', label: 'Work' },
  { id: 'product', label: 'Product' },
  { id: 'earlier', label: 'Earlier' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const { personalInfo } = portfolioData;

  return (
    <header className="top-0 z-40 border-b border-border bg-background md:sticky">
      <div className="shell flex flex-wrap items-center gap-x-7 gap-y-3 py-3">
        <a href="#top" className="font-display text-xl font-extrabold tracking-tight">
          {personalInfo.name}
        </a>
        <nav
          aria-label="Sections"
          className="order-3 flex w-full flex-wrap gap-x-[22px] gap-y-1 text-[15px] md:order-none md:w-auto"
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="py-1 text-muted-foreground hover:text-foreground"
            >
              {section.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <DarkThemeToggleSimple variant="ghost" />
          <a href="/api/resume" className="btn btn-quiet" aria-label="Download resume" data-ga-label="Download resume">
            <span className="sm:hidden">Resume</span>
            <span className="hidden sm:inline">Download resume</span>
          </a>
        </div>
      </div>
    </header>
  );
}
