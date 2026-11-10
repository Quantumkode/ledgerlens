# LedgerLens — marketing website

Website for **LedgerLens** (https://www.ledgerlenss.site), an AI-assisted financial reconciliation platform for SMEs and accounting firms. Stage: **building initial product**. The interactive demo runs on fictional sample data in the browser; no AWS services are deployed yet.

Stack: Vite · React 18 · JavaScript · Tailwind CSS v4 · Lucide icons · React Router (static prerendered).

## Routes
| Route | Purpose |
|---|---|
| `/` | Home — all marketing sections + interactive demo |
| `/privacy`, `/terms` | Legal pages |
| `/app` | Internal application kit: logo, banner, LinkedIn profile, AWS Activate answers (noindex, not linked anywhere) |
| anything else | 404 |

## Setup
```bash
npm install
cp .env.example .env    # set VITE_FORM_ENDPOINT
npm run dev             # http://localhost:5173
npm run build           # client build + SSR prerender into dist/
npm run preview         # serve dist/ on :4173
```

## Environment variables
| Name | Required | Description |
|---|---|---|
| `VITE_FORM_ENDPOINT` | For working forms | URL that accepts a JSON `POST` (e.g. a Formspree form, or an AWS API Gateway + Lambda endpoint that sends via Amazon SES). Without it, forms validate input and then show an error with the contact email — they never report a fake success. |

No secrets belong in the frontend. Anything prefixed `VITE_` is public.

## Crawlability / SEO
`npm run build` renders every route to static HTML (`scripts/prerender.mjs`) with per-route title, description, canonical, Open Graph, Twitter card and JSON-LD (Organization + SoftwareApplication). `public/robots.txt` and `public/sitemap.xml` are included; `/app` is `noindex` and excluded from the sitemap.

## Deploy
Any static host. Build command `npm run build`, output directory `dist`.
- **Netlify:** `public/_redirects` serves `404.html` for unknown paths.
- **Vercel:** `vercel.json` enables clean URLs; Vercel serves `404.html` automatically.
- **AWS Amplify Hosting / S3 + CloudFront:** set the error document to `404.html`.
Point `www.ledgerlenss.site` at the host and set `VITE_FORM_ENDPOINT` in the host's environment settings before building.

## Brand
Ink `#0E2F2C` · Paper `#F6F3EC` · Match `#1F9D6B` · Ochre `#C8932F` · Flag `#D8482F`. Fonts: Fraunces, Inter Tight, IBM Plex Mono (Google Fonts). Assets in `public/assets/`.

## Browser support
Last two versions of Chrome, Edge, Firefox and Safari (iOS 15+).

See `docs/` for the LinkedIn kit, AWS Activate answers and the pre-deployment checklist.
