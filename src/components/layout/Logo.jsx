export function Mark({ className = 'h-8 w-8' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#0E2F2C" />
      <path d="M13 20h24M13 30h14M13 40h20" stroke="#F6F3EC" strokeWidth="4" strokeLinecap="round" />
      <circle cx="40" cy="36" r="11" fill="none" stroke="#C8932F" strokeWidth="4" />
      <path d="M35.5 36.5l3 3 6-6.5" fill="none" stroke="#1F9D6B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M48 44.5l6.5 6.5" stroke="#C8932F" strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ light = false }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Mark />
      <span className={`font-display text-xl font-semibold tracking-tight ${light ? 'text-paper' : 'text-ink'}`}>
        Ledger<span className="text-ochre">Lens</span>
      </span>
    </span>
  );
}
