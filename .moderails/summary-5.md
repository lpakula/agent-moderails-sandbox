## Revision

User requested the contact page colour be changed from yellow to brown.

## Changes

- `tailwind.config.js` — Added a custom `brown` colour palette (50–950 shades) to `theme.extend.colors`, since Tailwind CSS has no built-in brown palette.
- `app/contact/page.js` — Replaced all 13 instances of yellow Tailwind colour classes with their brown equivalents. This affects the hero gradient, badge, heading gradient, form focus rings, submit button, success message, and contact info card icons.

## Test Results

- `npm run build` — PASS: All 13 pages compiled and generated successfully with no errors.
- Grep verification — PASS: 13 brown-* class instances found, 0 yellow-* class instances remaining in `app/contact/page.js`.
- Visual test — PASS: Screenshots confirm brown theming applied consistently across badge, heading, button, background gradient, and contact info icons.

| Result | Screenshot |
|---|---|
| PASS — Contact page with brown-themed badge, heading, and form | ![test-contact-brown-default](https://github.com/lpakula/agent-moderails-sandbox/blob/task-dhx0e6/.moderails/screenshots/test-contact-brown-default.png?raw=true) |
| PASS — Brown submit button and contact info icons | ![test-contact-brown-button](https://github.com/lpakula/agent-moderails-sandbox/blob/task-dhx0e6/.moderails/screenshots/test-contact-brown-button.png?raw=true) |
