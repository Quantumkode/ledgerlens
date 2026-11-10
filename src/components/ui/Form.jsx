import { useState } from 'react';
import { Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';
import { submitForm, isEmail } from '../../lib/submit.js';
import { company } from '../../data/company.js';

const inputCls = 'mt-1.5 w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm outline-none transition focus:border-ink aria-[invalid=true]:border-flag';

export default function Form({ fields, formName, submitLabel, dark }) {
  const init = Object.fromEntries(fields.map((f) => [f.name, '']));
  const [v, setV] = useState(init);
  const [err, setErr] = useState({});
  const [state, setState] = useState('idle');

  const validate = () => {
    const e = {};
    fields.forEach((f) => {
      if (f.required && !v[f.name].trim()) e[f.name] = `${f.label} is required.`;
      else if (f.type === 'email' && v[f.name] && !isEmail(v[f.name])) e[f.name] = 'Enter a valid email address.';
    });
    setErr(e);
    return !Object.keys(e).length;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setState('loading');
    try {
      await submitForm({ form: formName, ...v, _subject: `LedgerLens · ${formName}` });
      setState('success');
      setV(init);
    } catch (e) {
      setState(e.message === 'not-configured' ? 'unconfigured' : 'error');
    }
  };

  const lbl = dark ? 'text-paper/80' : 'text-ink/80';
  if (state === 'success')
    return (
      <div className="rounded-2xl border border-match/30 bg-match/10 p-8 text-center" role="status">
        <CheckCircle2 className="mx-auto text-match" size={32} />
        <p className={`mt-3 font-display text-xl ${dark ? 'text-paper' : ''}`}>Thank you — your message was received.</p>
        <p className={`mt-1 text-sm ${dark ? 'text-paper/70' : 'text-ink/65'}`}>The LedgerLens team will reply to the email you provided.</p>
      </div>
    );

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      {fields.map((f) => (
        <div key={f.name} className={f.wide ? 'sm:col-span-2' : ''}>
          <label htmlFor={`${formName}-${f.name}`} className={`text-sm font-medium ${lbl}`}>{f.label}{f.required && <span className="text-flag"> *</span>}</label>
          {f.options ? (
            <select id={`${formName}-${f.name}`} value={v[f.name]} onChange={(e) => setV({ ...v, [f.name]: e.target.value })} aria-invalid={!!err[f.name]} className={inputCls}>
              <option value="">Select…</option>
              {f.options.map((o) => <option key={o}>{o}</option>)}
            </select>
          ) : f.textarea ? (
            <textarea id={`${formName}-${f.name}`} rows={4} value={v[f.name]} onChange={(e) => setV({ ...v, [f.name]: e.target.value })} aria-invalid={!!err[f.name]} className={inputCls} />
          ) : (
            <input id={`${formName}-${f.name}`} type={f.type || 'text'} autoComplete={f.auto} value={v[f.name]} onChange={(e) => setV({ ...v, [f.name]: e.target.value })} aria-invalid={!!err[f.name]} className={inputCls} />
          )}
          {err[f.name] && <p className="mt-1 text-xs text-flag" role="alert">{err[f.name]}</p>}
        </div>
      ))}
      <div className="sm:col-span-2">
        {(state === 'error' || state === 'unconfigured') && (
          <p className="mb-3 flex gap-2 rounded-lg bg-flag/10 p-3 text-sm text-flag" role="alert">
            <AlertTriangle size={16} className="mt-0.5 shrink-0" />
            <span>Your message could not be sent{state === 'unconfigured' ? ' from this page right now' : ''}. Please email <a className="underline" href={`mailto:${company.email}`}>{company.email}</a> directly.</span>
          </p>
        )}
        <button type="submit" disabled={state === 'loading'} className="inline-flex items-center gap-2 rounded-full bg-ochre px-6 py-3 font-medium text-ink transition hover:brightness-105 disabled:opacity-60">
          {state === 'loading' && <Loader2 size={16} className="animate-spin" />} {state === 'loading' ? 'Sending…' : submitLabel}
        </button>
      </div>
    </form>
  );
}
