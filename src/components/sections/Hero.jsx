import { ArrowRight, Sparkles } from 'lucide-react';

const rows = [
  { bank: ['POS · Shoprite Ikeja', '₦48,200'], book: ['RCPT-1182', '₦48,200'], s: 'match' },
  { bank: ['TRF · Brightline Logistics', '₦1,250,000'], book: ['INV-0419', '₦1,205,000'], s: 'amount' },
  { bank: ['TRF · Kola Distribution', '₦310,000'], book: ['INV-0422', '₦310,000'], s: 'match' },
  { bank: ['TRF · Kola Distribution', '₦310,000'], book: ['Already paid', 'INV-0422'], s: 'dup' },
  { bank: ['SMS / maintenance', '₦2,150'], book: ['No ledger entry', '—'], s: 'missing' },
];
const tag = {
  match: ['Matched', 'bg-match/12 text-match border-match/30'],
  amount: ['Amount differs', 'bg-flag/10 text-flag border-flag/30'],
  dup: ['Duplicate', 'bg-flag/10 text-flag border-flag/30'],
  missing: ['Missing entry', 'bg-ochre/15 text-[#8a6418] border-ochre/40'],
};

function ReconTape() {
  return (
    <div className="relative rounded-2xl border border-line bg-white shadow-[0_30px_60px_-30px_rgba(14,47,44,.35)]">
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <p className="font-mono text-xs text-ink/60">Operating account ••4471 · Oct 2026</p>
        <span className="rounded-full bg-paper-2 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink/60">Sample data</span>
      </div>
      <div className="grid grid-cols-[1fr_auto_1fr] gap-x-3 px-5 pt-3 font-mono text-[10px] uppercase tracking-widest text-ink/45">
        <span>Bank statement</span><span className="w-24 text-center">Status</span><span className="text-right">Your records</span>
      </div>
      <ul className="divide-y divide-line/70 px-5 pb-2">
        {rows.map((r, i) => (
          <li key={i} className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-3 py-3 text-sm">
            <div className="min-w-0"><p className="truncate">{r.bank[0]}</p><p className="tabular font-mono text-xs text-ink/60">{r.bank[1]}</p></div>
            <span className={`w-24 rounded-full border px-2 py-1 text-center text-[11px] font-medium ${tag[r.s][1]}`}>{tag[r.s][0]}</span>
            <div className="min-w-0 text-right"><p className={`truncate ${r.s === 'missing' || r.s === 'dup' ? 'text-ink/45 italic' : ''}`}>{r.book[0]}</p><p className="tabular font-mono text-xs text-ink/60">{r.book[1]}</p></div>
          </li>
        ))}
      </ul>
      <div className="m-3 rounded-xl bg-ink p-4 text-paper">
        <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ochre"><Sparkles size={13} /> Explanation</p>
        <p className="mt-2 text-sm leading-relaxed text-paper/85">The Brightline transfer is ₦45,000 above INV-0419. That equals the waybill surcharge on the delivery note, which was never invoiced. Ask the supplier for a revised invoice before posting.</p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="product" className="ruled relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-14 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:pb-28 lg:pt-20">
        <div className="margin-rule pl-6 lg:pl-10">
          <p className="font-mono text-xs uppercase tracking-[.2em] text-ink/60">Financial reconciliation · Early access</p>
          <h1 className="mt-5 font-display text-[2.6rem] leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.2rem]">
            Every naira on the statement, <em className="text-match not-italic underline decoration-ochre decoration-4 underline-offset-[10px]">accounted for</em>.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/75">
            LedgerLens reads your bank statements, invoices and receipts, matches each transaction to its record, and shows you the duplicate payments, missing entries and wrong amounts — with a plain-language reason for each — before month-end close.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#access" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-medium text-paper transition hover:bg-ink-2">Request Early Access <ArrowRight size={17} /></a>
            <a href="#demo" className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3 font-medium hover:border-ink">Explore the Demo</a>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-ink/60"><span className="pulse-dot h-2 w-2 rounded-full bg-ochre" /> In development — onboarding early-access businesses and accounting firms.</p>
        </div>
        <div data-reveal><ReconTape /></div>
      </div>
    </section>
  );
}
