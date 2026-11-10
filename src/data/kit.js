import { company } from './company.js';

export const linkedin = {
  info: [
    ['Name', 'LedgerLens'],
    ['Website', company.url],
    ['Industry', 'Software Development'],
    ['Company type', 'Privately Held'],
    ['Company size', '2-10 employees (confirm headcount before publishing)'],
    ['Founded', '2026'],
    ['Headquarters', 'Not provided — add city/country once confirmed'],
    ['Public URL', 'linkedin.com/company/ledgerlenss'],
  ],
  tagline: 'AI reconciliation that matches bank transactions to invoices and receipts and flags discrepancies before close.',
  overview: `LedgerLens is an AI-assisted financial reconciliation platform for small and medium-sized businesses, accounting and bookkeeping firms, financial consultants, retail and e-commerce companies, and the finance teams of growing enterprises.

Reconciling bank statements against invoices, receipts and internal records is still largely manual. Bookkeepers tick transactions line by line, and duplicate payments, missing entries and incorrect amounts are often found weeks later — at audit, in a tax filing, or after the money is hard to recover.

LedgerLens reads bank statements, invoices and receipts, extracts the key figures, and matches each bank transaction to the record it belongs to. Whatever doesn't match is classified — duplicate payment, missing transaction, incorrect amount or unusual pattern — and given a plain-language explanation, so a reviewer can approve, dispute or correct it quickly.

Key capabilities:
• Intelligent transaction matching
• AI discrepancy detection
• Automated document extraction
• Reconciliation dashboard
• Financial anomaly reports
• Review queue with a full decision trail

The platform is being built on AWS, using Amazon Textract for document extraction, Amazon Bedrock for anomaly explanations and reporting, AWS Lambda for reconciliation workflows, Amazon DynamoDB for records, Amazon S3 for secure document storage and Amazon API Gateway for integrations with accounting systems.

LedgerLens was founded in 2026 and is currently in development, working with early-access businesses and accounting firms. Visit ledgerlenss.site to explore the demo or request early access.`,
  specialties: ['Financial Reconciliation', 'Bank Reconciliation', 'Transaction Matching', 'Discrepancy Detection', 'Duplicate Payment Detection', 'Anomaly Detection', 'Invoice Processing', 'Receipt Extraction', 'Document Intelligence', 'Accounts Payable Controls', 'Month-End Close', 'Bookkeeping Automation', 'Accounting Software', 'FinTech', 'B2B SaaS', 'Artificial Intelligence', 'Machine Learning', 'Financial Operations', 'Audit Trail', 'SME Finance'],
};

export const q9 = 'LedgerLens is a financial reconciliation platform that helps SMEs and accounting firms match bank transactions to invoices and receipts and catch errors faster. Built with React on AWS Textract, Bedrock, Lambda and DynamoDB.';

export const activate = [
  ['Q1', 'Top 3 ways AWS can help you', ['Launching products faster', 'Building scalable architecture', 'Reducing burn rate'], 'Pre-launch / building stage: these are the technical and cost areas AWS credits directly support.'],
  ['Q2', 'AWS services to learn more about (20)', ['Amazon Bedrock', 'Amazon Textract', 'Amazon S3', 'AWS Lambda', 'Amazon DynamoDB', 'Amazon API Gateway', 'Amazon Cognito', 'AWS Identity & Access', 'Amazon Cloudwatch', 'AWS Step Functions', 'Amazon SQS', 'Amazon Simple Email Service', 'AWS CloudTrail', 'Amazon Macie', 'AWS Amplify', 'AWS Route 53', 'AWS Certificate Manager', 'AWS CloudFormation', 'AWS Budgets', 'AWS Cost Explorer'], 'The six planned core services plus auth, monitoring, workflow orchestration, audit logging, sensitive-data discovery for financial documents, hosting, IaC and cost control.'],
  ['Q3', 'AWS tech topics to follow', ['AI & machine learning', 'Serverless', 'Security', 'AWS cost management', 'Big data/Analytics'], 'AI is central, architecture is serverless, financial data needs security, early stage needs cost control, product is data-heavy.'],
  ['Q4', 'Type of customers you primarily serve', ['Financial Technology / FinTech / Fin Tech', 'Accounting', 'SaaS', 'Business Applications', 'Artificial Intelligence (AI)', 'Financial Services'], 'Specific: FinTech + Accounting; delivery: SaaS; customer context: Business Applications / Financial Services; AI is genuinely in the product.'],
  ['Q5', 'Primary target customers', ['Businesses'], 'SMEs, accounting firms and finance teams pay for and use the product.'],
  ['Q6', 'Current product stage', ['Ideating/building initial product'], 'Platform is in development; the website demo uses sample data and is not a launched product.'],
  ['Q7', 'How customers interact with the product', ['Web browser', 'API'], 'Web app is the main interface; API Gateway integration with accounting systems is part of the planned build.'],
  ['Q8', 'Does your product use AI/ML?', ["Yes, we're using AI/ML to improve our products"], 'AI powers extraction, detection and explanations inside a reconciliation product; LedgerLens is not selling AI models or AI infrastructure.'],
  ['Q9', 'What are you building? (30–250 chars)', [q9], 'Follows the required structure with no unverifiable claims.'],
  ['Q10', 'Planned product launch date', ['March 1, 2027'], 'ASSUMED — no launch date was provided; chosen within the 3–6 month window.'],
  ['Q11', 'Most recent funding round', ['No Funding'], 'No funding was provided in the business details; leave month/year blank.'],
  ['Q12', 'Latest valuation', ['No Valuation'], 'No funding or priced round.'],
  ['Q13', 'Percentage of spend on AWS', ['75 - 99%'], 'Entire planned architecture is on AWS; domain, email and small SaaS tools sit outside.'],
  ['Q14', 'Annual marketing spend', ['< $250,000'], 'Bootstrapped, pre-launch startup.'],
];

export const businessDetails = [
  ['Company name and website', 'LedgerLens — https://www.ledgerlenss.site'],
  ['One-sentence description', 'AI-assisted reconciliation platform that matches bank transactions to invoices and receipts and flags duplicates, missing entries and wrong amounts.'],
  ['Customers', 'Businesses — SMEs, accounting/bookkeeping firms, financial consultants, retail/e-commerce, finance teams (FinTech / accounting)'],
  ['Product stage', 'Ideating / building initial product'],
  ['Launch date', 'March 1, 2027 (assumed)'],
  ['How customers use it', 'Web browser, API'],
  ['AI/ML', 'Used to improve the product (extraction, detection, explanations)'],
  ['Funding', 'None'],
  ['Valuation', 'None'],
  ['Stack & AWS', 'Vite + React + Tailwind front end; Amazon Bedrock, Textract, S3, Lambda, DynamoDB, API Gateway (proposed)'],
  ['AWS share of infra', '75–99%'],
  ['Marketing spend', '< $250,000'],
  ['Team size & country', 'Founder-led (confirm headcount); Nigeria (assumed from naira pricing)'],
  ['6–12 month goals', 'Build and launch the MVP, onboard early-access businesses and accounting firms, validate matching accuracy on real records'],
];

export const flags = [
  'Email domain mismatch: email is peace@ledgerlens.site but the website domain is ledgerlenss.site (double “s”). AWS Activate and reviewers usually expect the email to match the website domain. Fix one of them before applying.',
  'Business name typed as “Ledgerlenss” in one place and “LedgerLens” elsewhere. The site uses “LedgerLens” everywhere.',
  'Pricing ₦5,000 / ₦10,000 / ₦30,000 is shown as per month and mapped to Starter / Growth / Enterprise — confirm billing period and tier mapping.',
  'Founder title not provided — shown as “Founder”. No founder LinkedIn URL was provided, so none is linked.',
  'Headquarters / country not provided — Nigeria assumed for the AWS form only.',
  'Launch date (Q10) assumed: March 1, 2027.',
  'Company size 2-10 is the LinkedIn default — only one person (founder) was provided. Confirm.',
  'Forms need VITE_FORM_ENDPOINT set at build time (e.g. a Formspree URL). Until then they show an error with the email address — they never fake success.',
];
