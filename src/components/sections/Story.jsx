import { FileSearch, GitCompareArrows, ScanText, LayoutDashboard, FileWarning, Copy, Upload, ShieldCheck, ListChecks } from 'lucide-react';

export function SectionHead({ n, kicker, title, children, light }) {
  return (
    <div className="max-w-3xl" data-reveal>
      <p className={`font-mono text-xs uppercase tracking-[.2em] ${light ? 'text-ochre' : 'text-ink/55'}`}><span className="text-flag">§{n}</span> &nbsp;{kicker}</p>
      <h2 className={`mt-4 font-display text-3xl leading-tight tracking-tight sm:text-[2.6rem] ${light ? 'text-paper' : ''}`}>{title}</h2>
      {children && <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-paper/70' : 'text-ink/70'}`}>{children}</p>}
    </div>
  );
}

export function Highlights() {
  const items = [
    ['Matches', 'Bank lines to invoices, receipts and payment records'],
    ['Detects', 'Duplicates, missing entries, wrong amounts, odd patterns'],
    ['Extracts', 'Totals, dates, VAT and references from documents'],
    ['Explains', 'Why each item was flagged, in plain language'],
  ];
  return (
    <section aria-label="Capabilities" className="border-y border-line bg-paper-2/60">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 divide-line px-5 lg:grid-cols-4 lg:divide-x lg:px-8">
        {items.map(([k, v]) => (
          <div key={k} className="px-2 py-7 lg:px-8">
            <dt className="font-display text-2xl">{k}</dt>
            <dd className="mt-1 text-sm text-ink/65">{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function Problem() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionHead n="01" kicker="The problem" title="Reconciliation still runs on spreadsheets, eyesight and the last week of the month." />
      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-2">
        <div className="bg-paper p-8 lg:p-10" data-reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-flag">Today</p>
          <ul className="mt-5 space-y-5 text-ink/80">
            <li><b className="font-semibold text-ink">Line-by-line ticking.</b> A bookkeeper exports a 200-line statement, opens the invoice folder and matches by amount and memory.</li>
            <li><b className="font-semibold text-ink">Errors hide in volume.</b> A ₦310,000 supplier invoice paid twice, a ₦275,500 transfer against a ₦257,500 receipt, a bank charge never posted.</li>
            <li><b className="font-semibold text-ink">Found too late.</b> Mistakes surface at audit, in a tax filing, or when a supplier refuses to refund — weeks after the money left.</li>
            <li><b className="font-semibold text-ink">It doesn’t scale.</b> Every new account, client or sales channel adds hours of manual matching to the same small team.</li>
          </ul>
        </div>
        <div className="bg-ink p-8 text-paper lg:p-10" data-reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-ochre">With LedgerLens</p>
          <ul className="mt-5 space-y-5 text-paper/80">
            <li><b className="font-semibold text-paper">Upload once.</b> Statements, invoices and receipts go into one workspace; fields are extracted automatically.</li>
            <li><b className="font-semibold text-paper">Matching happens first.</b> Clean matches clear themselves, so people only look at what doesn’t add up.</li>
            <li><b className="font-semibold text-paper">Every flag has a reason.</b> “Same payee, same invoice, four days apart” — not just a red cell.</li>
            <li><b className="font-semibold text-paper">Close with evidence.</b> Approvals, disputes and notes are kept with each transaction for your accountant or auditor.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: GitCompareArrows, name: 'Intelligent Transaction Matching', what: 'Pairs each bank line with the invoice, receipt or payment record it belongs to using amount, date, payee and reference — including partial and split payments.', why: 'Clean matches clear automatically, removing most of the manual ticking.', viz: 'match' },
  { icon: FileWarning, name: 'AI Discrepancy Detection', what: 'Flags duplicate payments, missing transactions, incorrect amounts and payment patterns that break from a business’s normal behaviour.', why: 'Catch overpayments while there is still time to recover them.', viz: 'flags' },
  { icon: ScanText, name: 'Automated Document Extraction', what: 'Reads invoices, receipts and bank statements — PDFs or photos — and pulls out totals, dates, VAT, line items and reference numbers.', why: 'No retyping; every figure links back to its source document.', viz: 'doc' },
  { icon: LayoutDashboard, name: 'Reconciliation Dashboard', what: 'One view of matched, unmatched and disputed transactions per account and period, with progress toward close.', why: 'Know exactly what is left before month-end.', viz: 'dash' },
  { icon: FileSearch, name: 'Financial Anomaly Reports', what: 'Periodic reports summarising unusual transactions, risk patterns and unresolved items, with explanations a non-accountant can read.', why: 'Give owners and auditors a clear record of what was found and done.', viz: 'report' },
  { icon: ListChecks, name: 'Review Queue', what: 'Flagged items are routed to a reviewer who can approve, dispute or annotate them; every decision is logged against the transaction.', why: 'Accountability without email threads.', viz: 'queue' },
];

function Viz({ kind }) {
  const base = 'mt-6 rounded-xl border border-line bg-paper p-4 font-mono text-[11px]';
  if (kind === 'match') return (<div className={base}><div className="flex justify-between"><span>TRF Kola Dist.</span><span>₦310,000</span></div><svg viewBox="0 0 200 20" className="my-1 h-5 w-full"><path className="draw" d="M2 10 H198" stroke="#1F9D6B" strokeWidth="2" fill="none" /></svg><div className="flex justify-between text-match"><span>INV-0422 ✓</span><span>99% match</span></div></div>);
  if (kind === 'flags') return (<div className={base + ' space-y-2'}>{[['Duplicate payment', 'flag'], ['Amount differs ₦18,000', 'flag'], ['Unusual merchant', 'ochre']].map(([t, c]) => <div key={t} className="flex items-center gap-2"><span className={`h-2 w-2 rounded-full ${c === 'flag' ? 'bg-flag' : 'bg-ochre'}`} />{t}</div>)}</div>);
  if (kind === 'doc') return (<div className={base + ' grid grid-cols-2 gap-1.5'}>{[['Invoice', 'INV-0419'], ['Date', '01 Oct'], ['VAT', '₦84,070'], ['Total', '₦1,205,000']].map(([k, v]) => <div key={k} className="rounded bg-white px-2 py-1.5"><span className="text-ink/45">{k}</span><br />{v}</div>)}</div>);
  if (kind === 'dash') return (<div className={base}><div className="flex h-3 overflow-hidden rounded-full"><span className="w-[78%] bg-match" /><span className="w-[14%] bg-ochre" /><span className="w-[8%] bg-flag" /></div><div className="mt-2 flex justify-between text-ink/60"><span>78% matched</span><span>14% open</span><span>8% disputed</span></div></div>);
  if (kind === 'report') return (<div className={base}><p className="text-ink/45">October anomaly summary</p><div className="mt-2 flex items-end gap-1.5">{[30, 45, 25, 70, 35, 50, 90].map((h, i) => <span key={i} style={{ height: h * 0.5 }} className={`w-full rounded-sm ${h > 65 ? 'bg-flag' : 'bg-ink/20'}`} />)}</div></div>);
  return (<div className={base + ' space-y-1.5'}>{[['TX-10240', 'Approve'], ['TX-10255', 'Disputed'], ['TX-10274', 'Ask cardholder']].map(([a, b]) => <div key={a} className="flex justify-between rounded bg-white px-2 py-1.5"><span>{a}</span><span className="text-ink/55">{b}</span></div>)}</div>);
}

export function Features() {
  return (
    <section id="features" className="bg-paper-2/50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead n="02" kicker="Core features" title="Six capabilities, one reconciliation workflow.">From the document upload to the reviewer’s sign-off, each feature hands its output to the next.</SectionHead>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <article key={f.name} data-reveal className={`flex flex-col rounded-2xl border border-line bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-lg ${i === 0 ? 'lg:col-span-2' : ''}`}>
              <div className="flex items-center gap-3"><span className="rounded-lg bg-ink p-2 text-ochre"><f.icon size={18} /></span><span className="font-mono text-xs text-ink/40">0{i + 1}</span></div>
              <h3 className="mt-5 font-display text-xl">{f.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{f.what}</p>
              <p className="mt-3 text-sm font-medium text-match">{f.why}</p>
              <div className="mt-auto"><Viz kind={f.viz} /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    [Upload, 'Submit records', 'Upload bank statements, invoices and receipts, or connect them through the API from your accounting system.'],
    [ScanText, 'Extract and validate', 'Document extraction reads every field; totals, dates and references are checked for completeness.'],
    [GitCompareArrows, 'Match and detect', 'Transactions are matched to records. What doesn’t match is classified: duplicate, missing, wrong amount or unusual.'],
    [ShieldCheck, 'Review and close', 'Reviewers approve or dispute each flag. The period closes with a full audit trail and an anomaly report.'],
  ];
  return (
    <section id="how" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionHead n="03" kicker="How it works" title="From a folder of PDFs to a closed month in four steps." />
      <ol className="relative mt-14 grid gap-8 lg:grid-cols-4">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-line lg:block" aria-hidden="true" />
        {steps.map(([Icon, t, d], i) => (
          <li key={t} className="relative" data-reveal>
            <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-paper text-ink"><Icon size={20} /></span>
            <p className="mt-5 font-mono text-xs text-flag">Step {i + 1}</p>
            <h3 className="mt-1 font-display text-xl">{t}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export { Copy };
