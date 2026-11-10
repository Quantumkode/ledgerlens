import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';

const nav = [
  ['Product', '/#product'],
  ['Features', '/#features'],
  ['How It Works', '/#how'],
  ['Technology', '/#aws'],
  ['Pricing', '/#pricing'],
  ['Team', '/#team'],
  ['Contact', '/#contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" aria-label="LedgerLens home" onClick={() => setOpen(false)}><Logo /></Link>
        <nav className="hidden items-center gap-7 text-sm text-ink/75 lg:flex" aria-label="Primary">
          {nav.map(([l, h]) => <a key={h} href={h} className="hover:text-ink">{l}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <a href="/#access" className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition hover:bg-ink-2 sm:inline-block">Request Early Access</a>
          <button className="rounded-md p-2 lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-line bg-paper px-5 pb-5 lg:hidden" aria-label="Mobile">
          {nav.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="block border-b border-line/70 py-3 text-ink/85">{l}</a>
          ))}
          <a href="/#access" onClick={() => setOpen(false)} className="mt-4 block rounded-full bg-ink px-4 py-3 text-center font-medium text-paper">Request Early Access</a>
        </nav>
      )}
    </header>
  );
}
