import { company } from '../data/company.js';

export function LegalPage({ title, updated, children }) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
      <p className="font-mono text-xs uppercase tracking-widest text-ink/50">Last updated {updated}</p>
      <h1 className="mt-3 font-display text-4xl">{title}</h1>
      <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-ink/80 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1.5">
        {children}
        <h2>Contact</h2>
        <p>{company.name} · <a className="underline" href={`mailto:${company.email}`}>{company.email}</a> · {company.domain}</p>
      </div>
    </article>
  );
}
