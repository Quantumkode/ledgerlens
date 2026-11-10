// Fictional sample data for the interactive demo. Not customer data.
export const workspace = { client: 'Harmattan Print Co.', period: 'October 2026 close', account: 'Operating account ••4471' };

export const transactions = [
  { id: 'TX-10231', date: '2026-10-02', desc: 'TRF Kola Distribution Ltd', bank: 310000, book: 310000, doc: 'INV-0422', cat: 'Supplies', status: 'matched', conf: 99 },
  { id: 'TX-10232', date: '2026-10-02', desc: 'POS Shoprite Ikeja', bank: 48200, book: 48200, doc: 'RCPT-1182', cat: 'Office', status: 'matched', conf: 97 },
  { id: 'TX-10236', date: '2026-10-04', desc: 'TRF Brightline Logistics', bank: 1250000, book: 1205000, doc: 'INV-0419', cat: 'Freight', status: 'review', conf: 81, note: 'Transfer is ₦45,000 higher than invoice INV-0419. The difference equals the waybill surcharge on the delivery note, which was never invoiced.' },
  { id: 'TX-10240', date: '2026-10-06', desc: 'TRF Kola Distribution Ltd', bank: 310000, book: null, doc: 'INV-0422', cat: 'Supplies', status: 'review', conf: 94, note: 'Second ₦310,000 transfer to the same payee referencing INV-0422 within 4 days. Likely duplicate payment.' },
  { id: 'TX-10244', date: '2026-10-08', desc: 'SMS / maintenance charges', bank: 2150, book: null, doc: '—', cat: 'Bank fees', status: 'unmatched', conf: 0, note: 'Bank charge with no ledger entry. Post to bank fees or dispute with the bank.' },
  { id: 'TX-10247', date: '2026-10-09', desc: 'TRF Ikeja Electric', bank: 86400, book: 86400, doc: 'BILL-OCT', cat: 'Utilities', status: 'matched', conf: 98 },
  { id: 'TX-10251', date: '2026-10-12', desc: 'Inflow Adebayo & Co', bank: 920000, book: 920000, doc: 'SI-2207', cat: 'Sales', status: 'matched', conf: 99 },
  { id: 'TX-10255', date: '2026-10-14', desc: 'TRF Paperworks NG', bank: 275500, book: 257500, doc: 'INV-PW-88', cat: 'Supplies', status: 'disputed', conf: 76, note: 'Amount on the receipt reads ₦257,500; transfer was ₦275,500. Possible transposed digits.' },
  { id: 'TX-10258', date: '2026-10-16', desc: 'POS Total Energies VI', bank: 35000, book: 35000, doc: 'RCPT-1201', cat: 'Fuel', status: 'matched', conf: 95 },
  { id: 'TX-10262', date: '2026-10-19', desc: 'Inflow Lumen Events', bank: 640000, book: null, doc: '—', cat: 'Sales', status: 'unmatched', conf: 0, note: 'Customer payment with no matching sales invoice. Raise invoice or allocate to an open balance.' },
  { id: 'TX-10266', date: '2026-10-21', desc: 'TRF Staff payroll batch', bank: 2480000, book: 2480000, doc: 'PAY-OCT', cat: 'Payroll', status: 'matched', conf: 99 },
  { id: 'TX-10270', date: '2026-10-24', desc: 'TRF Inkline Imports', bank: 512000, book: 512000, doc: 'INV-IN-301', cat: 'Supplies', status: 'matched', conf: 92 },
  { id: 'TX-10274', date: '2026-10-27', desc: 'POS Unknown merchant 0291', bank: 120000, book: null, doc: '—', cat: 'Uncategorised', status: 'review', conf: 0, note: 'Unusual merchant, weekend timestamp and no receipt uploaded. Confirm with cardholder.' },
  { id: 'TX-10278', date: '2026-10-29', desc: 'Inflow Adebayo & Co', bank: 415000, book: 415000, doc: 'SI-2214', cat: 'Sales', status: 'matched', conf: 98 },
];

export const weekly = [
  { wk: 'Wk 1', matched: 38, open: 6 },
  { wk: 'Wk 2', matched: 44, open: 4 },
  { wk: 'Wk 3', matched: 41, open: 7 },
  { wk: 'Wk 4', matched: 47, open: 3 },
  { wk: 'Wk 5', matched: 22, open: 5 },
];

export const activity = [
  { t: '09:42', who: 'LedgerLens', what: 'Extracted 31 fields from INV-0419 (Brightline Logistics)' },
  { t: '09:44', who: 'LedgerLens', what: 'Flagged TX-10240 as a possible duplicate payment' },
  { t: '10:05', who: 'Tolu A. (reviewer)', what: 'Disputed TX-10255 — awaiting supplier response' },
  { t: '10:21', who: 'LedgerLens', what: 'Matched 12 transactions to receipts batch #18' },
  { t: '11:02', who: 'Tolu A. (reviewer)', what: 'Approved bank fee posting for September' },
];

export const documents = [
  { id: 'INV-0419', type: 'Invoice', from: 'Brightline Logistics', date: '2026-10-01', total: 1205000, fields: [['Invoice no.', 'INV-0419'], ['Issue date', '01 Oct 2026'], ['Line items', '3'], ['VAT (7.5%)', '₦84,070'], ['Total due', '₦1,205,000']], flag: 'Payment TX-10236 exceeds total by ₦45,000' },
  { id: 'RCPT-1182', type: 'Receipt', from: 'Shoprite Ikeja', date: '2026-10-02', total: 48200, fields: [['Receipt no.', '1182'], ['Date', '02 Oct 2026'], ['Items', '9'], ['Paid by', 'POS ••4471'], ['Total', '₦48,200']], flag: null },
  { id: 'INV-PW-88', type: 'Invoice', from: 'Paperworks NG', date: '2026-10-13', total: 257500, fields: [['Invoice no.', 'PW-88'], ['Issue date', '13 Oct 2026'], ['Line items', '2'], ['VAT (7.5%)', '₦17,965'], ['Total due', '₦257,500']], flag: 'Paid ₦275,500 — possible transposition (57 ↔ 75)' },
  { id: 'STMT-OCT', type: 'Bank statement', from: 'Operating account ••4471', date: '2026-10-31', total: null, fields: [['Period', '01–31 Oct 2026'], ['Lines', '214'], ['Opening', '₦6,412,880'], ['Closing', '₦4,906,310'], ['Pages', '7']], flag: null },
];

export const naira = (n) => (n == null ? '—' : '₦' + n.toLocaleString('en-NG'));
