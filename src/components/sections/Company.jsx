import { Store, Calculator, Briefcase, Building2, Upload, Database, Cpu, Sparkles, MonitorSmartphone, Linkedin, Mail, Check } from 'lucide-react';
import { SectionHead } from './Story.jsx';
import Form from '../ui/Form.jsx';
import { company, pricing } from '../../data/company.js';

export function Audience() {
  const seg = [
    [Store, 'SMEs & retail / e-commerce', 'Card, POS and transfer payments arrive in volume and rarely carry the invoice number.', 'Upload the month’s statement and receipts; LedgerLens matches POS and transfer lines to sales and supplier records.', 'Duplicate supplier payments and unposted bank charges are caught before they compound.'],
    [Calculator, 'Accounting & bookkeeping firms', 'Each client means another statement, another folder of receipts and another evening of ticking.', 'One workspace per client; reviewers work a single queue of flagged items across all of them.', 'More clients closed per month with the same team, and a decision trail for every adjustment.'],
    [Briefcase, 'Financial consultants', 'Engagements start with messy, incomplete records and a short deadline.', 'Ingest historical statements and documents to surface gaps, duplicates and unusual patterns quickly.', 'Start the engagement with an anomaly report rather than a spreadsheet.'],
    [Building2, 'Finance teams in growing companies', 'Multiple accounts, approvers and payment runs outgrow manual reconciliation.', 'Connect accounting systems through the API and route exceptions to the right approver.', 'Faster month-end close with fewer surprises in audit.'],
  ];
  return (
    <section id="solutions" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionHead n="05" kicker="Who it’s for" title="Built for the people who sign off the books." />
      <div className="mt-14 divide-y divide-line border-y border-line">
        {seg.map(([I, who, prob, use, gain]) => (
          <article key={who} className="grid gap-4 py-8 md:grid-cols-[260px_1fr_1fr_1fr] md:gap-8" data-reveal>
            <h3 className="flex items-center gap-3 font-display text-xl"><I size={20} className="shrink-0 text-ochre" />{who}</h3>
            <p className="text-[15px] text-ink/70"><span className="block font-mono text-[10px] uppercase tracking-widest text-flag">Problem</span>{prob}</p>
            <p className="text-[15px] text-ink/70"><span className="block font-mono text-[10px] uppercase tracking-widest text-ink/45">How they use it</span>{use}</p>
            <p className="text-[15px] text-ink/70"><span className="block font-mono text-[10px] uppercase tracking-widest text-match">Benefit</span>{gain}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export const awsServices = [
  ['Amazon S3', 'Stores uploaded bank statements, invoices and receipts in encrypted, access-controlled buckets.'],
  ['Amazon Textract', 'Extracts totals, dates, VAT, line items and references from invoices, receipts and bank statements.'],
  ['AWS Lambda', 'Runs the matching engine and reconciliation workflows each time new documents or transactions arrive.'],
  ['Amazon DynamoDB', 'Holds transaction records, match results, review decisions and customer configurations.'],
  ['Amazon Bedrock', 'Generates plain-language explanations for flagged anomalies and drafts the period anomaly report.'],
  ['Amazon API Gateway', 'Exposes secure APIs between the LedgerLens web app, customers and external accounting systems.'],
];

export function Aws() {
  const stages = [
    [Upload, 'Data Collection', 'Amazon API Gateway', 'Receives uploads and accounting-system data'],
    [Database, 'Secure Storage', 'Amazon S3', 'Encrypted document storage'],
    [Cpu, 'Processing', 'Amazon Textract · AWS Lambda', 'Extraction and transaction matching'],
    [Sparkles, 'AI Intelligence', 'Amazon Bedrock', 'Anomaly explanations and reports'],
    [MonitorSmartphone, 'Application Experience', 'Amazon DynamoDB', 'Dashboard, review queue and audit trail'],
  ];
  return (
    <section id="aws" className="bg-ink py-24 text-paper">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead n="06" kicker="Technology" title="How We Use Amazon Web Services" light>
          LedgerLens is being built on a serverless AWS architecture: documents land in Amazon S3, Amazon Textract turns them into structured fields, AWS Lambda runs matching and discrepancy checks, Amazon DynamoDB keeps the reconciliation record, and Amazon Bedrock explains what was found — all exposed through Amazon API Gateway.
        </SectionHead>
        <ol className="mt-14 grid gap-3 md:grid-cols-5">
          {stages.map(([I, t, svc, d], i) => (
            <li key={t} className="relative rounded-2xl border border-paper/15 bg-ink-2 p-5" data-reveal>
              <div className="flex items-center justify-between"><I size={20} className="text-ochre" /><span className="font-mono text-[10px] text-paper/40">0{i + 1}</span></div>
              <p className="mt-4 font-display text-lg">{t}</p>
              <p className="mt-1 font-mono text-[11px] text-match">{svc}</p>
              <p className="mt-2 text-sm text-paper/65">{d}</p>
              {i < 4 && <span className="absolute -right-2.5 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-ochre text-[11px] text-ink md:flex" aria-hidden="true">→</span>}
            </li>
          ))}
        </ol>
        <ul className="mt-12 grid gap-x-10 gap-y-4 md:grid-cols-2">
          {awsServices.map(([n, p]) => <li key={n} className="border-t border-paper/15 pt-4 text-[15px] text-paper/75"><b className="font-semibold text-paper">{n}:</b> {p}</li>)}
        </ul>
      </div>
    </section>
  );
}

export function EarlyAccess() {
  return (
    <section id="access" className="ruled py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <div>
          <SectionHead n="07" kicker="Early access" title="Help shape LedgerLens before launch.">LedgerLens is in active development. We are working with a small group of businesses and accounting firms to test matching rules against real reconciliation workflows.</SectionHead>
          <ul className="mt-8 space-y-3 text-[15px] text-ink/75">
            {['Guided walkthrough of the product with the founding team', 'Input on matching rules, flags and reports for your industry', 'Early-access onboarding when the platform opens'].map((t) => <li key={t} className="flex gap-3"><Check size={18} className="mt-0.5 shrink-0 text-match" />{t}</li>)}
          </ul>
        </div>
        <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
          <Form formName="Early access" submitLabel="Request Early Access" fields={[
            { name: 'name', label: 'Full name', required: true, auto: 'name' },
            { name: 'email', label: 'Business email', type: 'email', required: true, auto: 'email' },
            { name: 'company', label: 'Company', required: true, auto: 'organization' },
            { name: 'size', label: 'Company size', required: true, options: ['1–10', '11–50', '51–200', '201–500', '500+'] },
            { name: 'useCase', label: 'Primary use case', required: true, wide: true, options: ['Bank-to-invoice reconciliation', 'Duplicate / overpayment detection', 'Receipt and invoice extraction', 'Multi-client reconciliation (accounting firm)', 'Anomaly reporting', 'Other'] },
            { name: 'message', label: 'Message', textarea: true, wide: true },
          ]} />
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionHead n="08" kicker="Pricing" title="Simple monthly plans in naira.">Plans apply when the platform opens to early-access customers.</SectionHead>
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {pricing.map((p) => (
          <article key={p.name} data-reveal className={`flex flex-col rounded-2xl border p-8 ${p.featured ? 'border-ink bg-ink text-paper' : 'border-line bg-white'}`}>
            <p className="font-mono text-xs uppercase tracking-widest text-ochre">{p.name}</p>
            <p className="mt-4 font-display text-5xl tabular">{p.price}<span className={`ml-1 font-sans text-base ${p.featured ? 'text-paper/60' : 'text-ink/50'}`}>/ month</span></p>
            <p className={`mt-3 text-sm ${p.featured ? 'text-paper/70' : 'text-ink/65'}`}>{p.fit}</p>
            <ul className="mt-6 space-y-2.5 text-sm">{p.points.map((x) => <li key={x} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-match" />{x}</li>)}</ul>
            <a href="#access" className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-medium ${p.featured ? 'bg-ochre text-ink' : 'border border-ink/25 hover:border-ink'}`}>Request Early Access</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Team() {
  const f = company.founder;
  return (
    <section id="team" className="bg-paper-2/60 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead n="09" kicker="Team" title="The Team Behind LedgerLens" />
        <article className="mt-12 flex max-w-2xl flex-col gap-6 rounded-2xl border border-line bg-white p-8 sm:flex-row" data-reveal>
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-ink font-display text-3xl text-ochre" aria-hidden="true">PL</div>
          <div>
            <h3 className="font-display text-2xl">{f.name}</h3>
            <p className="font-mono text-xs uppercase tracking-widest text-ink/55">{f.title}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/75">Peace founded LedgerLens in 2026 to give small businesses and the accountants who serve them a faster, evidence-backed way to reconcile their records. As founder, Peace leads the company and the development of the LedgerLens platform.</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1fr_1.2fr] lg:px-8">
      <div>
        <SectionHead n="10" kicker="Contact" title="Talk to the team.">Questions about the product, partnerships or the early-access program.</SectionHead>
        <div className="mt-8 space-y-3">
          <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-[15px] hover:text-match"><Mail size={18} className="text-ochre" />{company.email}</a>
          <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[15px] hover:text-match"><Linkedin size={18} className="text-ochre" />LedgerLens on LinkedIn</a>
        </div>
      </div>
      <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
        <Form formName="Contact" submitLabel="Send message" fields={[
          { name: 'name', label: 'Full name', required: true, auto: 'name' },
          { name: 'email', label: 'Email', type: 'email', required: true, auto: 'email' },
          { name: 'topic', label: 'Topic', required: true, wide: true, options: ['Product question', 'Early access', 'Accounting firm partnership', 'Pricing', 'Press', 'Other'] },
          { name: 'message', label: 'Message', required: true, textarea: true, wide: true },
        ]} />
      </div>
    </section>
  );
}
