import { useMemo, useState } from 'react';
import { LayoutDashboard, Table2, ListChecks, FileText, Search, X, Sparkles, Check, Flag, CircleAlert } from 'lucide-react';
import { transactions as seed, weekly, activity, documents, workspace, naira } from '../../data/demo.js';

const statusStyle = {
  matched: 'bg-match/12 text-match',
  review: 'bg-ochre/15 text-[#8a6418]',
  unmatched: 'bg-flag/10 text-flag',
  disputed: 'bg-ink/10 text-ink',
  approved: 'bg-match/12 text-match',
};
const label = { matched: 'Matched', review: 'Needs review', unmatched: 'Unmatched', disputed: 'Disputed', approved: 'Approved' };

function Pill({ s }) {
  return <span className={`inline-block whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-medium ${statusStyle[s]}`}>{label[s]}</span>;
}

function Overview({ tx, go }) {
  const [hover, setHover] = useState(null);
  const c = (s) => tx.filter((t) => t.status === s).length;
  const open = tx.filter((t) => ['review', 'unmatched'].includes(t.status));
  const atRisk = open.reduce((a, t) => a + (t.bank || 0) - (t.book || 0), 0);
  const max = Math.max(...weekly.map((w) => w.matched + w.open));
  const cards = [
    ['Matched', c('matched') + c('approved'), 'text-match'],
    ['Needs review', c('review'), 'text-[#8a6418]'],
    ['Unmatched', c('unmatched'), 'text-flag'],
    ['Value under review', naira(atRisk), 'text-ink'],
  ];
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {cards.map(([k, v, cl]) => (
          <div key={k} className="rounded-xl border border-line bg-white p-4"><p className="text-xs text-ink/55">{k}</p><p className={`tabular mt-1 font-display text-2xl ${cl}`}>{v}</p></div>
        ))}
      </div>
      <div className="grid gap-4 xl:grid-cols-[1.4fr_1fr]">
        <div className="rounded-xl border border-line bg-white p-4">
          <div className="flex items-center justify-between"><p className="text-sm font-medium">Transactions processed by week</p><p className="flex gap-3 text-[11px] text-ink/55"><span className="flex items-center gap-1"><i className="h-2 w-2 rounded-sm bg-match" />Matched</span><span className="flex items-center gap-1"><i className="h-2 w-2 rounded-sm bg-ochre" />Open</span></p></div>
          <div className="mt-4 flex h-40 items-end gap-4" role="img" aria-label="Weekly matched versus open transactions">
            {weekly.map((w, i) => (
              <button key={w.wk} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} onFocus={() => setHover(i)} onBlur={() => setHover(null)} className="relative flex h-full flex-1 flex-col justify-end" aria-label={`${w.wk}: ${w.matched} matched, ${w.open} open`}>
                {hover === i && <span className="absolute -top-1 left-1/2 z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded bg-ink px-2 py-1 font-mono text-[10px] text-paper">{w.matched} ✓ · {w.open} open</span>}
                <span style={{ height: `${(w.open / max) * 100}%` }} className="rounded-t bg-ochre" />
                <span style={{ height: `${(w.matched / max) * 100}%` }} className={`bg-match transition ${hover === i ? 'opacity-100' : 'opacity-85'}`} />
                <span className="mt-1.5 text-center font-mono text-[10px] text-ink/50">{w.wk}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-ink p-4 text-paper">
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ochre"><Sparkles size={13} /> Insights</p>
          <ul className="mt-3 space-y-3 text-sm text-paper/85">
            <li>Two payments to <b>Kola Distribution</b> reference the same invoice (₦310,000). Recoverable if confirmed.</li>
            <li><b>Paperworks NG</b> transfer exceeds its receipt by ₦18,000 — digits 57/75 look transposed.</li>
            <li>One POS charge from an unrecognised merchant on a Sunday with no receipt.</li>
          </ul>
          <button onClick={() => go('queue')} className="mt-4 rounded-full bg-paper px-3 py-1.5 text-xs font-medium text-ink hover:bg-paper-2">Open review queue →</button>
        </div>
      </div>
      <div className="rounded-xl border border-line bg-white p-4">
        <p className="text-sm font-medium">Activity</p>
        <ul className="mt-3 divide-y divide-line/70 text-sm">
          {activity.map((a) => <li key={a.t + a.what} className="flex gap-4 py-2"><span className="font-mono text-xs text-ink/45">{a.t}</span><span><b className="font-medium">{a.who}</b> <span className="text-ink/70">{a.what}</span></span></li>)}
        </ul>
      </div>
    </div>
  );
}

function Transactions({ tx, open }) {
  const [q, setQ] = useState('');
  const [f, setF] = useState('all');
  const rows = useMemo(() => tx.filter((t) => (f === 'all' || t.status === f) && (t.desc + t.id + t.doc + t.cat).toLowerCase().includes(q.toLowerCase())), [tx, q, f]);
  return (
    <div className="rounded-xl border border-line bg-white">
      <div className="flex flex-col gap-3 border-b border-line p-3 sm:flex-row sm:items-center">
        <label className="flex flex-1 items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm"><Search size={15} className="text-ink/40" /><span className="sr-only">Search transactions</span><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search payee, ID, document…" className="w-full bg-transparent outline-none" /></label>
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by status">
          {['all', 'matched', 'review', 'unmatched', 'disputed', 'approved'].map((s) => (
            <button key={s} onClick={() => setF(s)} aria-pressed={f === s} className={`rounded-full px-2.5 py-1 text-xs ${f === s ? 'bg-ink text-paper' : 'bg-paper-2 text-ink/70 hover:bg-line'}`}>{s === 'all' ? 'All' : label[s]}</button>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="font-mono text-[10px] uppercase tracking-wider text-ink/45"><tr><th className="px-3 py-2">Date</th><th>Description</th><th className="text-right">Bank</th><th className="text-right">Records</th><th className="pl-4">Document</th><th>Status</th></tr></thead>
          <tbody className="divide-y divide-line/70">
            {rows.map((t) => (
              <tr key={t.id} onClick={() => open(t)} onKeyDown={(e) => e.key === 'Enter' && open(t)} tabIndex={0} className="cursor-pointer hover:bg-paper focus:bg-paper">
                <td className="px-3 py-2.5 font-mono text-xs text-ink/55">{t.date.slice(5)}</td>
                <td><span className="block">{t.desc}</span><span className="font-mono text-[10px] text-ink/40">{t.id}</span></td>
                <td className="tabular text-right font-mono text-xs">{naira(t.bank)}</td>
                <td className={`tabular text-right font-mono text-xs ${t.book !== t.bank ? 'text-flag' : ''}`}>{naira(t.book)}</td>
                <td className="pl-4 font-mono text-xs">{t.doc}</td>
                <td className="pr-3"><Pill s={t.status} /></td>
              </tr>
            ))}
            {!rows.length && <tr><td colSpan={6} className="px-3 py-10 text-center text-ink/50">No transactions match this search.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Queue({ tx, act }) {
  const items = tx.filter((t) => ['review', 'unmatched', 'disputed'].includes(t.status));
  if (!items.length) return <div className="rounded-xl border border-line bg-white p-10 text-center"><Check className="mx-auto text-match" /><p className="mt-2 font-medium">Queue cleared. Period ready to close.</p></div>;
  return (
    <ul className="space-y-3">
      {items.map((t) => (
        <li key={t.id} className="rounded-xl border border-line bg-white p-4">
          <div className="flex flex-wrap items-center justify-between gap-2"><p className="font-medium">{t.desc} <span className="font-mono text-xs text-ink/45">{t.id}</span></p><Pill s={t.status} /></div>
          <p className="mt-2 flex gap-2 text-sm text-ink/75"><Sparkles size={15} className="mt-0.5 shrink-0 text-ochre" />{t.note}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button onClick={() => act(t.id, 'approved')} className="inline-flex items-center gap-1 rounded-full bg-match px-3 py-1.5 text-xs font-medium text-white hover:opacity-90"><Check size={13} /> Approve</button>
            {t.status !== 'disputed' && <button onClick={() => act(t.id, 'disputed')} className="inline-flex items-center gap-1 rounded-full border border-line px-3 py-1.5 text-xs hover:bg-paper-2"><Flag size={13} /> Dispute</button>}
          </div>
        </li>
      ))}
    </ul>
  );
}

function Docs() {
  const [sel, setSel] = useState(documents[0]);
  return (
    <div className="grid gap-4 lg:grid-cols-[220px_1fr]">
      <ul className="space-y-1.5">
        {documents.map((d) => (
          <li key={d.id}><button onClick={() => setSel(d)} aria-pressed={sel.id === d.id} className={`w-full rounded-lg border px-3 py-2 text-left text-sm ${sel.id === d.id ? 'border-ink bg-white' : 'border-line hover:bg-white'}`}><span className="block font-medium">{d.id}</span><span className="text-xs text-ink/55">{d.type} · {d.from}</span></button></li>
        ))}
      </ul>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-line bg-white p-5 font-mono text-[11px] leading-relaxed text-ink/70">
          <p className="text-sm font-semibold text-ink">{sel.from}</p>
          <p>{sel.type.toUpperCase()} · {sel.id}</p>
          <div className="my-3 space-y-1.5">{[1, 2, 3, 4].map((i) => <div key={i} className="h-2 rounded bg-paper-2" style={{ width: `${90 - i * 12}%` }} />)}</div>
          {sel.fields.map(([k, v]) => <div key={k} className="flex justify-between border-b border-dashed border-line py-1"><span>{k}</span><mark className="rounded bg-ochre/20 px-1 text-ink">{v}</mark></div>)}
        </div>
        <div className="rounded-xl border border-line bg-white p-5">
          <p className="text-sm font-medium">Extracted fields</p>
          <dl className="mt-3 space-y-2 text-sm">{sel.fields.map(([k, v]) => <div key={k} className="flex justify-between"><dt className="text-ink/55">{k}</dt><dd className="tabular font-mono text-xs">{v}</dd></div>)}</dl>
          {sel.flag ? <p className="mt-4 flex gap-2 rounded-lg bg-flag/10 p-3 text-sm text-flag"><CircleAlert size={16} className="shrink-0" />{sel.flag}</p> : <p className="mt-4 flex gap-2 rounded-lg bg-match/10 p-3 text-sm text-match"><Check size={16} />All fields reconciled</p>}
        </div>
      </div>
    </div>
  );
}

export default function Demo() {
  const [view, setView] = useState('overview');
  const [tx, setTx] = useState(seed);
  const [detail, setDetail] = useState(null);
  const act = (id, status) => { setTx((p) => p.map((t) => (t.id === id ? { ...t, status } : t))); setDetail(null); };
  const reviewCount = tx.filter((t) => ['review', 'unmatched', 'disputed'].includes(t.status)).length;
  const navs = [['overview', 'Overview', LayoutDashboard], ['tx', 'Transactions', Table2], ['queue', 'Review queue', ListChecks], ['docs', 'Documents', FileText]];
  return (
    <div className="overflow-hidden rounded-2xl border border-ink/20 bg-paper shadow-[0_40px_80px_-40px_rgba(14,47,44,.5)]">
      <div className="flex flex-wrap items-center justify-between gap-2 bg-ink px-4 py-3 text-paper">
        <div className="flex items-center gap-3 text-sm"><span className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-flag" /><i className="h-2.5 w-2.5 rounded-full bg-ochre" /><i className="h-2.5 w-2.5 rounded-full bg-match" /></span><span className="font-medium">{workspace.client}</span><span className="hidden text-paper/55 sm:inline">· {workspace.period} · {workspace.account}</span></div>
        <div className="flex items-center gap-2"><span className="rounded-full border border-ochre/50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ochre">Sample data</span><button onClick={() => { setTx(seed); setView('overview'); }} className="rounded-full px-2 py-0.5 text-xs text-paper/70 hover:text-paper">Reset</button></div>
      </div>
      <div className="grid md:grid-cols-[190px_1fr]">
        <nav className="flex gap-1 overflow-x-auto border-b border-line p-2 md:flex-col md:border-b-0 md:border-r" aria-label="Demo workspace">
          {navs.map(([k, l, I]) => (
            <button key={k} onClick={() => setView(k)} aria-current={view === k} className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm ${view === k ? 'bg-white font-medium shadow-sm' : 'text-ink/65 hover:bg-white/60'}`}>
              <I size={16} /> {l}{k === 'queue' && reviewCount > 0 && <span className="ml-auto rounded-full bg-flag px-1.5 text-[10px] text-white">{reviewCount}</span>}
            </button>
          ))}
        </nav>
        <div className="min-h-[520px] p-4">
          {view === 'overview' && <Overview tx={tx} go={setView} />}
          {view === 'tx' && <Transactions tx={tx} open={setDetail} />}
          {view === 'queue' && <Queue tx={tx} act={act} />}
          {view === 'docs' && <Docs />}
        </div>
      </div>
      {detail && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/50 p-4" role="dialog" aria-modal="true" aria-label={`Transaction ${detail.id}`} onClick={() => setDetail(null)}>
          <div className="w-full max-w-md rounded-2xl bg-paper p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between"><div><p className="font-mono text-xs text-ink/50">{detail.id} · {detail.date}</p><h3 className="mt-1 font-display text-xl">{detail.desc}</h3></div><button onClick={() => setDetail(null)} aria-label="Close" className="rounded p-1 hover:bg-paper-2"><X size={18} /></button></div>
            <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {[['Bank amount', naira(detail.bank)], ['Recorded amount', naira(detail.book)], ['Document', detail.doc], ['Category', detail.cat], ['Match confidence', detail.conf ? detail.conf + '%' : '—'], ['Status', label[detail.status]]].map(([k, v]) => <div key={k} className="rounded-lg bg-white p-2.5"><dt className="text-xs text-ink/50">{k}</dt><dd className="tabular font-mono text-xs">{v}</dd></div>)}
            </dl>
            {detail.note && <p className="mt-4 flex gap-2 rounded-lg bg-ink p-3 text-sm text-paper/85"><Sparkles size={15} className="mt-0.5 shrink-0 text-ochre" />{detail.note}</p>}
            {['review', 'unmatched', 'disputed'].includes(detail.status) && (
              <div className="mt-4 flex gap-2"><button onClick={() => act(detail.id, 'approved')} className="rounded-full bg-match px-4 py-2 text-sm font-medium text-white">Approve</button>{detail.status !== 'disputed' && <button onClick={() => act(detail.id, 'disputed')} className="rounded-full border border-line px-4 py-2 text-sm">Dispute</button>}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
