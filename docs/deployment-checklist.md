# Pre-deployment checklist

- [ ] Resolve email/domain mismatch (peace@ledgerlens.site vs ledgerlenss.site)
- [ ] Confirm pricing period (per month) and tier mapping
- [ ] Confirm founder title; add founder LinkedIn URL if wanted (src/data/company.js)
- [ ] Confirm headcount and headquarters
- [ ] Create a form endpoint (Formspree or API Gateway + Lambda + SES) and set VITE_FORM_ENDPOINT on the host
- [ ] Submit a test enquiry from the live site and confirm it arrives
- [ ] Point DNS for www.ledgerlenss.site; enable HTTPS
- [ ] Confirm https://www.linkedin.com/company/ledgerlenss is live and public
- [ ] Have Privacy Policy and Terms reviewed (data protection obligations under NDPA 2023 once real financial data is processed)
- [ ] Upload logo-400.png and linkedin-banner.png to LinkedIn
- [ ] Submit sitemap in Google Search Console
- [ ] Keep AWS wording as "proposed" until services are actually deployed
