import { company } from './company.js';

export const routesMeta = {
  '/': {
    title: 'LedgerLens — AI Financial Reconciliation for SMEs and Accounting Firms',
    description:
      'LedgerLens matches bank transactions to invoices and receipts, flags duplicate payments, missing entries and incorrect amounts, and explains each anomaly for review. Request early access.',
  },
  '/privacy': { title: 'Privacy Policy — LedgerLens', description: 'How LedgerLens collects, uses and protects information submitted through ledgerlenss.site.' },
  '/terms': { title: 'Terms of Service — LedgerLens', description: 'Terms governing use of the LedgerLens website, demo and early-access program.' },
  '/app': { title: 'Application Kit — LedgerLens', description: 'Internal brand and application kit.', noindex: true },
  '/404': { title: 'Page not found — LedgerLens', description: 'This page does not exist.', noindex: true },
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

export function headTags(path) {
  const m = routesMeta[path] || routesMeta['/404'];
  const url = company.url + (path === '/' ? '/' : path);
  const img = company.url + '/assets/og-image.png';
  const tags = [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    m.noindex ? '<meta name="robots" content="noindex, nofollow" />' : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${company.name}" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${img}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(m.title)}" />`,
    `<meta name="twitter:description" content="${esc(m.description)}" />`,
    `<meta name="twitter:image" content="${img}" />`,
  ];
  if (path === '/') {
    const ld = {
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'Organization', name: company.name, url: company.url, logo: company.url + '/assets/logo.svg', email: company.email, foundingDate: String(company.founded), founder: { '@type': 'Person', name: company.founder.name }, sameAs: [company.linkedin] },
        { '@type': 'SoftwareApplication', name: company.name, applicationCategory: 'FinanceApplication', operatingSystem: 'Web', description: m.description, publisher: { '@type': 'Organization', name: company.name } },
      ],
    };
    tags.push(`<script type="application/ld+json">${JSON.stringify(ld)}</script>`);
  }
  return tags.join('\n    ');
}
