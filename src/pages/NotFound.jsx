import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="ruled px-5 py-32 text-center">
      <p className="font-mono text-sm text-flag">Unmatched entry · 404</p>
      <h1 className="mt-4 font-display text-5xl">This page doesn’t reconcile.</h1>
      <p className="mt-4 text-ink/65">The address you followed has no matching record.</p>
      <Link to="/" className="mt-8 inline-block rounded-full bg-ink px-6 py-3 font-medium text-paper">Back to LedgerLens</Link>
    </section>
  );
}
