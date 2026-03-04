# dhx0e6

**Task ID:** dhx0e6
**Type:** feature

## Summary

Create contact page with mockup form, use red colour

## Requirements

User requirements and acceptance criteria. What needs to be true when this task is complete.

## Research Findings

**Relevant files:**
- `app/layout.js` - Root layout with header, Navigation, ThemeToggle, PeopleCarousel, and inline footer. New page will inherit this layout.
- `app/components/Navigation.js` - Nav component with a "Contact" link currently pointing to `#` (placeholder). Needs to be updated to `/contact`.
- `app/components/Footer.js` - Footer component with a "Contact" link in support links also pointing to `#`. Needs to be updated to `/contact`.
- `app/about/page.js` - Reference for page structure pattern (simple page with consistent styling).
- `app/globals.css` - Just imports Tailwind base/components/utilities.
- `tailwind.config.js` - Uses dark mode via `class` strategy, standard config.
- `app/page.js` - Home page; has a "Contact Us →" link in CTA section pointing to `#`.

**Current behavior:**
- Contact links in navigation, footer, and CTA section all point to `#` (non-functional).
- No contact page exists yet.

**Dependencies:**
- Next.js 14 (App Router), React 18, Tailwind CSS 3.
- No form library; existing forms (newsletter in Footer) use vanilla React state.

**Constraints:**
- Task specifies "red colour" theme for the contact page (as opposed to the orange used elsewhere).
- Task specifies "mockup form" — the form does not need real backend submission, just client-side mock behavior.
- Must support dark mode (consistent with rest of site).
- Should follow the same page structure pattern as other pages.

## Brainstorm

**Approach 1: Simple single-file contact page with inline form**
Create `app/contact/page.js` as a 'use client' component with form fields (name, email, subject, message), local state for form data and submission status, and a mock submit handler. Use red Tailwind classes (red-600, red-500, etc.) throughout. Update nav/footer links.
- *Complexity*: Low — single new file + minor link updates.
- *Risk*: Very low — no existing code is meaningfully changed.
- *Maintainability*: Good — self-contained, follows existing patterns.

**Approach 2: Contact page with separate form component**
Create `app/contact/page.js` for the page layout and `app/components/ContactForm.js` for the form logic. This separates presentation from form handling.
- *Complexity*: Medium — two new files.
- *Risk*: Low — but adds abstraction that isn't necessary for a mockup.
- *Maintainability*: Slightly over-engineered for a mockup form with no real backend.

**Approach 3: Contact page with form library (react-hook-form)**
Add a dependency and use a form library for validation and state management.
- *Complexity*: High — new dependency, more boilerplate.
- *Risk*: Medium — adds dependency for a mockup.
- *Maintainability*: Overkill for a mockup form.

**Selected approach: Approach 1**
A single-file contact page with inline form is the simplest, most consistent with the existing codebase patterns (e.g., the Footer newsletter form uses inline React state), and appropriate for a mockup. No new dependencies needed.

## File Tree

Files to modify or create with their purpose:
- `app/contact/page.js` - NEW: Contact page with red-themed mockup form (name, email, subject, message fields, mock submit)
- `app/components/Navigation.js` - UPDATE: Change Contact link href from `#` to `/contact`
- `app/components/Footer.js` - UPDATE: Change Contact link href from `#` to `/contact`
- `app/page.js` - UPDATE: Change "Contact Us →" link href from `#` to `/contact`

## TODO List

Atomic, executable items. Each should be completable in one step.
Mark items done as you complete them.

- [x] Create `app/contact/page.js` with red-themed mockup contact form (files: app/contact/page.js)
- [x] Update Navigation Contact link to point to `/contact` (files: app/components/Navigation.js)
- [x] Update Footer Contact link to point to `/contact` (files: app/components/Footer.js)
- [x] Update home page "Contact Us →" CTA link to point to `/contact` (files: app/page.js)
- [x] Verify the build passes with `npm run build` (no files)

## Revision Notes

- **Revision 1**: Changed contact page colour theme from red to orange per user feedback. All Tailwind red-* classes replaced with orange-* equivalents. Build verified.