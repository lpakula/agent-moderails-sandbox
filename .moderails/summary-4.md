## Revision

User requested the contact page colour be changed from green to yellow.

## Changes

- `app/contact/page.js` — Replaced all 13 instances of green Tailwind colour classes (green-50, green-100, green-200, green-300, green-400, green-500, green-600, green-700, green-800, green-900, green-900/50, green-950) with their yellow equivalents. This affects the hero gradient, badge, heading gradient, form focus rings, submit button, success message, and contact info card icons.

## Test Results

- `npm run build` — PASS: All 13 pages compiled and generated successfully with no errors.
- Grep verification — PASS: 13 yellow-* class instances found, 0 green-* class instances remaining in `app/contact/page.js`.
- Visual test — PASS: Screenshots confirm yellow theming applied consistently across badge, heading, button, background gradient, and contact info icons.
