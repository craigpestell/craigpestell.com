'use client';

import { useEffect } from 'react';
import { sendGAEvent } from '@next/third-parties/google';

// Reports a GA `section_view` the first time each section reaches the top of
// the viewport. Renders nothing.
export default function SectionTracker({ ids }: { ids: string[] }) {
  useEffect(() => {
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (entry.isIntersecting && !seen.has(id)) {
            seen.add(id);
            sendGAEvent('event', 'section_view', { section_id: id });
          }
        }
      },
      { rootMargin: '-100px 0px -100% 0px' },
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);

  return null;
}
