# Project profile

Both roles read this file first. It holds everything specific to craigpestell.com, so the shared Lite agents from [company-kit](https://github.com/craigpestell/company-kit) stay generic. `engineering-lead` keeps it current.

## Product

- **Name:** craigpestell.com, the founder's portfolio site.
- **What it is:** a single-page portfolio (hero, skills, projects, experience, contact) with a downloadable PDF resume, theme and font controls, and Edge Config driven hero experiments.
- **Owner:** the founder's own site, unbilled, on the Lite team.
- **Stage:** live at https://craigpestell.com.

## Stack

- Next.js (App Router, TypeScript, Turbopack dev), Tailwind CSS, `@react-pdf/renderer` for the resume, EmailJS for the contact form, Vercel Edge Config for experiments, Vercel Analytics and Speed Insights, Google Analytics through `@next/third-parties`.
- Code map: `src/data/` (the portfolio dataset: profile, skills, projects, experience, education), `src/components/` (one component per section, `ResumeGenerator.tsx`, `ThemeProvider.tsx`), `src/lib/` (`edgeConfig.ts`, `edgeExperiments.ts`, `conversionTracking.ts`, `resumeDocument.tsx`), `src/app/` (page, layout, `api/experiments`, `dashboard`, themes), `scripts/` (contrast checks).
- Domain words are defined in `CONTEXT.md`; use them. `AGENTS.md` says to read the bundled Next.js docs in `node_modules/next/dist/docs/` before writing Next.js code.

## Commands

| What | Command |
| --- | --- |
| Install | `npm ci` |
| Dev server | `npm run dev` |
| Build | `npm run build` |
| Lint | `npm run lint` |
| Contrast checks | `node scripts/check-all-themes-contrast.js` |
| Tests | none yet |

## Hosting and deploys

- **Host:** Vercel. Company skill: `vercel-hosting`.
- **How a change reaches production:** merge to `main`; Vercel deploys it. Every PR gets a preview URL.
- **Rollback:** promote the previous deployment in the Vercel dashboard, then revert the commit on `main`.
- **Where secrets live:** Vercel environment variables (`EDGE_CONFIG`, analytics keys, `NEXT_PUBLIC_GA_MEASUREMENT_ID`); names are listed in `.env.example`.

## Rules every role keeps

- Content comes from the portfolio dataset in `src/data/`, not hard-coded in components.
- Every claim about the founder's work must be true; don't invent projects, employers, dates or numbers.
- Keep every theme passing the contrast checks.
- Work is tracked as markdown files under `.scratch/`, not GitHub issues (see `docs/agents/issue-tracker.md`).

## Deploy gate

- `npm run build` and `npm run lint` pass on the exact commit (there is no CI yet; Vercel's build is the only automatic check).
- `qa-engineer` has checked the Vercel preview of the PR, including the resume download and a phone-width view.
- No role approves its own work.

## What only the founder approves

- Any change to what the site says about the founder (bio, experience, projects, resume)
- Spending money, and contacting anyone outside the project
- New analytics or tracking tools

## Analytics

Google Analytics 4 (`G-KCFTFCTSPW`, in `src/app/layout.tsx`), Vercel Analytics and Speed Insights, plus experiment conversion tracking in `src/lib/conversionTracking.ts`. GA loads without consent mode today; moving it onto the `google-analytics` skill's consent pattern is a candidate follow-up for the founder to approve.
