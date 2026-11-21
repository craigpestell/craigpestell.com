import Link from 'next/link';
import type { Metadata } from 'next';
import { portfolioData } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false },
};

export default function NotFound() {
  const { personalInfo } = portfolioData;

  return (
    <main className="flex min-h-screen flex-col">
      <div className="shell py-3">
        <Link href="/" className="font-display text-[22px] font-extrabold tracking-tight">
          {personalInfo.name}
        </Link>
      </div>
      <div className="shell flex flex-1 items-center py-10">
        <div className="w-full rounded-lg bg-secondary px-6 py-14 text-center text-secondary-foreground md:py-20">
          <p
            aria-hidden="true"
            className="neon-sign font-display text-[96px] font-extrabold leading-none tracking-tight md:text-[160px]"
          >
            404
          </p>
          <h1 className="mt-8 font-display text-3xl font-bold">Page not found</h1>
          <p className="mt-3 text-panel-muted">That link doesn&apos;t go anywhere on this site.</p>
          <Link href="/" className="btn btn-primary mt-8">
            Back to the homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
