// Sends form data to the endpoint configured in VITE_FORM_ENDPOINT (e.g. a Formspree form URL,
// or your own API Gateway + Lambda endpoint). No endpoint = an honest error, never a fake success.
export const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT || '';

export async function submitForm(data) {
  if (!formEndpoint) throw new Error('not-configured');
  const res = await fetch(formEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('failed');
  return true;
}

export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
