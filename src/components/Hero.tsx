import type { Measure, PersonalInfo, SiteCopy } from '@/data/portfolio';

function Bar({ label, percent, after = false }: { label: string; percent: number; after?: boolean }) {
  return (
    <>
      <span className="text-sm text-panel-muted">{label}</span>
      <span className="block h-[18px]" aria-hidden="true">
        <span
          className={`bar-fill block h-full min-w-1 rounded-[3px] ${after ? 'bar-fill-after bg-primary' : 'bg-panel-track'}`}
          style={{ width: `${percent}%` }}
        />
      </span>
    </>
  );
}

function MeasureRows({ measure }: { measure: Measure }) {
  const max = Math.max(measure.before.amount, measure.after.amount);
  const value = 'col-start-2 font-display text-[22px] font-bold leading-tight tabular-nums';

  return (
    <div>
      <h3 className="text-base font-semibold">
        {measure.label}
        <span className="block text-sm font-normal text-panel-muted">{measure.context}</span>
      </h3>
      <div className="mt-3 grid grid-cols-[52px_1fr] items-center gap-x-3 gap-y-1">
        <Bar label="Before" percent={(measure.before.amount / max) * 100} />
        <span className={value}>{measure.before.value}</span>
        <span className="col-span-2 h-1" />
        <Bar label="After" percent={(measure.after.amount / max) * 100} after />
        <span className={value}>
          {measure.after.value}
          {measure.after.note && (
            <small className="ml-2 font-sans text-sm font-normal text-panel-muted">
              {measure.after.note}
            </small>
          )}
        </span>
      </div>
    </div>
  );
}

export default function Hero({ personalInfo, site }: { personalInfo: PersonalInfo; site: SiteCopy }) {
  return (
    <section id="top" className="shell grid gap-9 py-10 pb-12 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:items-center md:gap-14 md:pt-[72px] md:pb-20">
      <div className="flex flex-col items-start gap-5">
        <h1 className="text-[17px] font-medium text-muted-foreground">
          {personalInfo.name}, {personalInfo.title.toLowerCase()}
        </h1>
        <p className="text-balance font-display text-[clamp(2.3rem,5.2vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.025em]">
          {site.headline}
        </p>
        <p className="max-w-[34em] text-[19px] leading-[1.55]">{site.lede}</p>
        <p className="flex max-w-[34em] gap-2.5 text-[15.5px] text-muted-foreground">
          <span className="mt-[0.5em] size-[9px] shrink-0 rounded-full bg-available" aria-hidden="true" />
          {personalInfo.availability}
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#contact" className="btn btn-primary">Get in touch</a>
          <a href="#work" className="btn btn-quiet">See the work</a>
        </div>
      </div>

      <figure className="flex flex-col gap-7 rounded-[10px] bg-secondary p-[22px] text-secondary-foreground md:p-7">
        {site.measures.map((measure) => (
          <MeasureRows key={measure.label} measure={measure} />
        ))}
        <p className="border-t border-panel-track pt-6 text-[15.5px]">
          <b className="mr-2 font-display text-3xl font-extrabold text-primary">{site.adoption.figure}</b>
          {site.adoption.text}
        </p>
        <figcaption className="text-sm text-panel-muted">{site.measuresNote}</figcaption>
      </figure>
    </section>
  );
}
