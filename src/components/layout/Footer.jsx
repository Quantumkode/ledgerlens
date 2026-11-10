import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';
import Logo from './Logo.jsx';
import { company } from '../../data/company.js';

export default function Footer() {
  const cols = [
    ['Product', [['Product', '/#product'], ['Features', '/#features'], ['Interactive demo', '/#demo'], ['Pricing', '/#pricing']]],
    ['Solutions', [['Who it’s for', '/#solutions'], ['How it works', '/#how'], ['Technology', '/#aws']]],
    ['Company', [['Team', '/#team'], ['Contact', '/#contact'], ['Privacy Policy', '/privacy'], ['Terms of Service', '/terms']]],
  ];
  return (
    <footer className="bg-ink text-paper/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/65">AI-assisted financial reconciliation for small and mid-sized businesses and accounting firms. Match every transaction, catch every discrepancy.</p>
          <div className="mt-5 flex gap-3">
            <a href={company.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LedgerLens on LinkedIn" className="rounded-full border border-paper/20 p-2 hover:bg-paper/10"><Linkedin size={16} /></a>
            <a href={`mailto:${company.email}`} aria-label="Email LedgerLens" className="rounded-full border border-paper/20 p-2 hover:bg-paper/10"><Mail size={16} /></a>
          </div>
        </div>
        {cols.map(([h, links]) => (
          <div key={h}>
            <p className="font-mono text-xs uppercase tracking-widest text-ochre">{h}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {links.map(([l, to]) => (
                <li key={l}>{to.startsWith('/#') ? <a href={to} className="hover:text-paper">{l}</a> : <Link to={to} className="hover:text-paper">{l}</Link>}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-5 text-xs text-paper/50 sm:flex-row lg:px-8">
          <span>© 2026 {company.name}. All rights reserved.</span>
          <span>{company.domain}</span>
        </div>
      </div>
    </footer>
  );
}
