import { useState } from 'react';
import { Copy, Check, Download, AlertTriangle } from 'lucide-react';
import { linkedin, activate, businessDetails, flags } from '../data/kit.js';
import { company } from '../data/company.js';
import { awsServices } from '../components/sections/Company.jsx';

function CopyBtn({ text }) {
  const [ok, setOk] = useState(false);
  return (
    <button onClick={() => navigator.clipboard?.writeText(text).then(() => { setOk(true); setTimeout(() => setOk(false), 1500); })} className="inline-flex shrink-0 items-center gap-1 rounded-full border border-line bg-white px-2.5 py-1 text-xs hover:bg-paper-2" aria-label="Copy to clipboard">
      {ok ? <Check size={13} className="text-match" /> : <Copy size={13} />} {ok ? 'Copied' : 'Copy'}
    </button>
  );
}

function Block({ id, title, children }) {
  return (
    <section id={id} className="rounded-2xl border border-line bg-white p-6 sm:p-8">
      <h2 className="font-display text-2xl">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Asset({ src, png, name, w, h, dark }) {
  return (
    <figure className="rounded-xl border border-line p-4">
      <div className={`flex items-center justify-center rounded-lg p-4 ${dark ? 'bg-paper-2' : 'bg-paper'}`}><img src={src} alt={name} className="max-h-64 w-auto max-w-full" /></div>
      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm">
        <span><b>{name}</b> <span className="text-ink/50">{w} × {h}px</span></span>
        <span className="flex gap-2">
          <a href={png} download className="inline-flex items-center gap-1 rounded-full bg-ink px-3 py-1 text-xs text-paper"><Download size={13} /> PNG</a>
          <a href={src} download className="inline-flex items-center gap-1 rounded-full border border-line px-3 py-1 text-xs"><Download size={13} /> SVG</a>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Kit() {
  const nav = [['flags', 'Check first'], ['assets', 'Logo & banner'], ['linkedin', 'LinkedIn'], ['activate', 'AWS Activate'], ['details', 'Business details'], ['aws', 'AWS services']];
  return (
    <div className="mx-auto max-w-5xl px-5 py-14 lg:px-8">
      <p className="font-mono text-xs uppercase tracking-widest text-ink/50">Internal · not linked from the site · noindex</p>
      <h1 className="mt-2 font-display text-4xl">LedgerLens application kit</h1>
      <p className="mt-3 text-ink/70">Everything needed for the LinkedIn company page and the AWS Activate application, in one place. Every answer derives from the same record the website uses.</p>
      <a href="/ledgerlens-website.zip" download className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm text-paper"><Download size={15} /> Download full project ZIP</a>
      <nav className="mt-6 flex flex-wrap gap-2" aria-label="Kit sections">{nav.map(([h, l]) => <a key={h} href={`#${h}`} className="rounded-full bg-paper-2 px-3 py-1.5 text-sm hover:bg-line">{l}</a>)}</nav>

      <div className="mt-10 space-y-8">
        <Block id="flags" title="Check before submitting">
          <ul className="space-y-3">{flags.map((f) => <li key={f} className="flex gap-3 text-[15px] text-ink/80"><AlertTriangle size={17} className="mt-0.5 shrink-0 text-flag" />{f}</li>)}</ul>
        </Block>

        <Block id="assets" title="Logo & banner">
          <div className="grid gap-4 md:grid-cols-[1fr_2fr]">
            <Asset src="/assets/logo.svg" png="/assets/logo-400.png" name="Logo (LinkedIn profile)" w={400} h={400} />
            <Asset src="/assets/logo-wordmark.svg" png="/assets/logo-wordmark.png" name="Wordmark" w={960} h={240} dark />
          </div>
          <div className="mt-4"><Asset src="/assets/linkedin-banner.svg" png="/assets/linkedin-banner.png" name="LinkedIn banner" w={1584} h={396} /></div>
          <p className="mt-4 text-sm text-ink/60">Banner keeps the left ~420px and bottom band clear for LinkedIn’s logo overlay. Colours: Ink #0E2F2C · Paper #F6F3EC · Match #1F9D6B · Ochre #C8932F · Flag #D8482F. Type: Fraunces (display), Inter Tight (text), IBM Plex Mono (figures).</p>
        </Block>

        <Block id="linkedin" title="LinkedIn company profile">
          <dl className="divide-y divide-line">
            {linkedin.info.map(([k, v]) => <div key={k} className="flex items-center justify-between gap-4 py-2.5 text-sm"><dt className="text-ink/55">{k}</dt><dd className="flex items-center gap-3 text-right">{v}<CopyBtn text={v} /></dd></div>)}
          </dl>
          <div className="mt-6">
            <div className="flex items-center justify-between"><h3 className="font-medium">Tagline <span className="text-xs text-ink/50">({linkedin.tagline.length}/120 chars)</span></h3><CopyBtn text={linkedin.tagline} /></div>
            <p className="mt-2 rounded-lg bg-paper p-3 text-[15px]">{linkedin.tagline}</p>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-between"><h3 className="font-medium">Overview <span className="text-xs text-ink/50">({linkedin.overview.length}/2,000 chars)</span></h3><CopyBtn text={linkedin.overview} /></div>
            <p className="mt-2 whitespace-pre-line rounded-lg bg-paper p-4 text-[15px] leading-relaxed">{linkedin.overview}</p>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-between"><h3 className="font-medium">Specialties ({linkedin.specialties.length}/20)</h3><CopyBtn text={linkedin.specialties.join(', ')} /></div>
            <div className="mt-2 flex flex-wrap gap-2">{linkedin.specialties.map((s) => <span key={s} className="rounded-full bg-paper-2 px-3 py-1 text-sm">{s}</span>)}</div>
          </div>
        </Block>

        <Block id="activate" title="AWS Activate answers (Q1–Q14)">
          <ol className="divide-y divide-line">
            {activate.map(([q, name, ans, why]) => {
              const text = ans.join(q === 'Q9' ? '' : ', ');
              return (
                <li key={q} className="py-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-medium"><span className="font-mono text-flag">{q}.</span> {name}{q === 'Q9' && <span className="ml-2 text-xs text-ink/50">({text.length} chars)</span>}</p>
                    <CopyBtn text={text} />
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">{ans.map((a) => <span key={a} className={`rounded-md bg-ink px-2.5 py-1 text-sm text-paper ${q === 'Q9' ? 'leading-relaxed' : ''}`}>{a}</span>)}</div>
                  <p className={`mt-2 text-sm ${why.startsWith('ASSUMED') ? 'text-flag' : 'text-ink/60'}`}>{why}</p>
                </li>
              );
            })}
          </ol>
        </Block>

        <Block id="details" title="Business details (source record)">
          <dl className="divide-y divide-line text-sm">{businessDetails.map(([k, v]) => <div key={k} className="grid gap-1 py-2.5 sm:grid-cols-[220px_1fr]"><dt className="text-ink/55">{k}</dt><dd>{v}</dd></div>)}</dl>
          <p className="mt-4 text-sm text-ink/60">Contact on file: {company.email} · {company.linkedin}</p>
        </Block>

        <Block id="aws" title="AWS services (same wording as the website)">
          <ul className="space-y-2 text-[15px]">{awsServices.map(([n, p]) => <li key={n} className="flex items-start justify-between gap-3"><span><b>{n}:</b> {p}</span><CopyBtn text={`${n}: ${p}`} /></li>)}</ul>
          <p className="mt-4 text-sm text-ink/60">Status: proposed architecture — none of these services are deployed yet. Do not describe them as live on the application.</p>
        </Block>
      </div>
    </div>
  );
}
