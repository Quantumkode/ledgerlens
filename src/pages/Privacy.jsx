import { LegalPage } from './Legal.jsx';

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="10 November 2026">
      <p>This policy explains how LedgerLens (“we”, “us”) handles information collected through ledgerlenss.site, including the early-access and contact forms and the interactive demo. LedgerLens is currently in development; this policy covers the website. A separate policy will govern the LedgerLens platform when customers begin uploading financial records.</p>
      <h2>Information we collect</h2>
      <ul>
        <li><b>Form submissions:</b> your name, business email, company, company size, primary use case, topic and message.</li>
        <li><b>Technical data:</b> standard server and hosting logs (such as IP address, browser type and pages requested) kept by our hosting provider.</li>
        <li><b>Demo:</b> the interactive demo runs entirely in your browser on fictional sample data. Nothing you do in the demo is sent to us.</li>
      </ul>
      <p>We do not use advertising cookies or third-party tracking on this site.</p>
      <h2>How we use it</h2>
      <ul>
        <li>To respond to your enquiry and manage the early-access program.</li>
        <li>To understand which reconciliation problems prospective customers want solved.</li>
        <li>To keep the website secure and working.</li>
      </ul>
      <p>We do not sell personal information.</p>
      <h2>Third parties</h2>
      <p>Form submissions are delivered through a form-handling or email service acting on our behalf, and the website is served by a hosting provider. These providers process data only to deliver their service to us. Fonts are loaded from Google Fonts, which receives your IP address when the page loads.</p>
      <h2>Retention</h2>
      <p>We keep enquiry and early-access records for as long as needed to respond and run the program, and delete them on request or once they are no longer needed.</p>
      <h2>Your rights</h2>
      <p>You may ask to access, correct or delete the personal information you have sent us, or object to its use, by emailing us. Depending on where you live — for example under the Nigeria Data Protection Act 2023 or the GDPR — you may also have the right to complain to a data protection authority.</p>
      <h2>Security</h2>
      <p>We use reasonable technical and organisational measures to protect the information we receive. No method of transmission over the internet is completely secure.</p>
      <h2>Changes</h2>
      <p>We will post any changes to this policy on this page and update the date above.</p>
    </LegalPage>
  );
}
