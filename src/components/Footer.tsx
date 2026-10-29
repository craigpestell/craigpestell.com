'use client';

import { ArrowUp } from 'lucide-react';
import { PersonalInfo } from '@/data/portfolio';

interface FooterProps {
  personalInfo: PersonalInfo;
}

export default function Footer({ personalInfo }: FooterProps) {
  const scrollToTop = () => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      aria-label="Contact"
      className="relative border-t border-border"
      style={{
        // Subtle lighter panel (not a primary tint — that dropped muted text
        // below the 4.5:1 contrast threshold). The primary accent lives on in
        // the top hairline below.
        background: 'color-mix(in srgb, var(--card) 55%, var(--background))',
      }}
    >
      {/* Primary hairline along the top edge — echoes the header's fade. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(to right, color-mix(in srgb, var(--primary) 70%, transparent), transparent 60%)',
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 xl:px-12">
        {/* Aligned to the same max-w-6xl column the page sections (e.g. Education) use. */}
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl pt-20 pb-10 md:pb-12">
            <h2 className="max-w-[24ch] text-2xl md:text-3xl font-semibold leading-snug text-foreground">
              Building something people need to rely on?
            </h2>
            <p className="mt-3 text-base md:text-lg text-muted-foreground">
              That&apos;s the work I do best. Send me the details.
            </p>

            <a
              href={`mailto:${personalInfo.email}`}
              className="font-jetbrains mt-8 inline-block text-foreground underline-offset-8 hover:underline focus-visible:underline focus-visible:outline-none"
              style={{ fontSize: 'clamp(1.25rem, 3vw, 1.6rem)' }}
            >
              {personalInfo.email}
            </a>

            <div className="mt-8 flex flex-col gap-1 text-sm text-muted-foreground">
              <span>Based in {personalInfo.location}. Working Pacific hours, open to remote.</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-primary underline-offset-4 hover:text-primary/80 hover:underline focus-visible:underline focus-visible:outline-none"
              >
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-primary underline-offset-4 hover:text-primary/80 hover:underline focus-visible:underline focus-visible:outline-none"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* The closing tag: bookends the header logo at the same size, flush with the container edge. */}
        <div className="flex items-center justify-between gap-4 pb-8">
          <p
            aria-hidden="true"
            className="font-jetbrains select-none text-xl font-bold leading-none text-foreground"
          >
            &lt;/CraigPestell&gt;
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
          >
            Back to top
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-3 border-t border-border py-6 font-jetbrains text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {year} {personalInfo.name}
            </span>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span>Built with Next.js and Tailwind CSS</span>
              <a
                href={`https://pagespeed.web.dev/analysis?url=${encodeURIComponent(personalInfo.website)}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Run a fresh PageSpeed Insights / Lighthouse audit"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1.5 text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:border-primary focus-visible:text-primary focus-visible:outline-none"
              >
                <span
                  aria-hidden="true"
                  className="inline-block h-1.5 w-1.5 rounded-full bg-success"
                />
                Lighthouse 100
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
