import { Bricolage_Grotesque, IBM_Plex_Sans } from 'next/font/google';

// Both families are downloaded at build time and self-hosted by next/font,
// so the CSP's `font-src 'self'` holds and the browser never calls Google.

// Body text.
export const bodyFont = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex',
  display: 'swap',
});

// Headlines, company names and the figures in the readout panel.
export const displayFont = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});
