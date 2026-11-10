// Single source of truth for every business fact shown on the site, LinkedIn kit and AWS answers.
export const company = {
  name: 'LedgerLens',
  domain: 'ledgerlenss.site',
  url: 'https://www.ledgerlenss.site',
  email: 'peace@ledgerlens.site',
  tagline: 'Turning Financial Records into Clear Business Decisions.',
  founded: 2026,
  stage: 'Ideating/building initial product',
  linkedin: 'https://www.linkedin.com/company/ledgerlenss',
  industry: 'Financial Services',
  founder: { name: 'Peace Lasisi', title: 'Founder' },
  positioning:
    'LedgerLens is an AI-assisted reconciliation platform for small and mid-sized businesses and the accounting firms that serve them. It reads bank statements, invoices and receipts, matches every transaction to its record, and puts duplicates, missing entries and wrong amounts in front of a reviewer before they reach the books.',
};

export const pricing = [
  {
    name: 'Starter',
    price: '₦5,000',
    fit: 'For owner-run businesses reconciling one bank account each month.',
    points: ['Bank statement, invoice and receipt upload', 'Automatic transaction matching', 'Discrepancy flags with explanations', 'Monthly reconciliation summary'],
  },
  {
    name: 'Growth',
    price: '₦10,000',
    fit: 'For growing finance teams handling several accounts and higher document volume.',
    points: ['Everything in Starter', 'Multiple bank accounts', 'Review queue with approve / dispute workflow', 'Financial anomaly reports'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '₦30,000',
    fit: 'For accounting firms and finance departments reconciling across many entities.',
    points: ['Everything in Growth', 'Multi-client / multi-entity workspaces', 'API access for accounting systems', 'Priority onboarding with the founding team'],
  },
];
