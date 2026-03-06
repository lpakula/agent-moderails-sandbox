## Revision

User requested the contact page colour be changed from red to orange.

## Changes

- `app/contact/page.js` — Replaced all 11 instances of red Tailwind colour classes (red-50, red-100, red-300, red-400, red-500, red-600, red-700, red-900, red-950, rose-50) with their orange equivalents (orange-50, orange-100, orange-300, orange-400, orange-500, orange-600, orange-700, orange-900, orange-950). This affects the hero gradient, badge, heading gradient, form focus rings, submit button, and contact info card icons.

## Test Results

- `npm run build` — PASS: All 13 pages compiled and generated successfully with no errors.
- Grep verification — PASS: 11 orange-* class instances found, 0 red-* class instances remaining in `app/contact/page.js`.
- Playwright MCP server was not available for visual screenshot testing.
