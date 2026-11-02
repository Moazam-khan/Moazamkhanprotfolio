# Portfolio redesign implementation plan

## Objective

Rebuild Moazam Khan's portfolio with the reference's dark editorial design, adapted to a full stack developer focused on SaaS and business applications. Use Moazam's existing content, portrait, and project screenshots; do not invent customer counts, results, testimonials, or production capabilities.

## 1. Visual foundation

- Near-black background, warm white typography, restrained orange accents, fine grid lines, floating navigation.
- Locally hosted Instrument Serif and DM Sans fonts, oversized name, grayscale portrait, subtle canvas particles with an image fallback.
- Responsive spacing and readable supporting labels; honor reduced motion and expose a persistent motion control.

## 2. Architecture and content

- Retain Next.js App Router and static export. Centralize typed profile, project, experience, and skill data.
- Homepage: portrait introduction, selected work, approach, full stack capabilities, professional experience, about, contact.
- Project archive with accessible category filters and static case-study routes describing context, contribution, stack, and status.
- Keep existing /Projects, /Experience, /Education, /Contact URLs working alongside lowercase routes.
- Position SaaS capabilities around verified marketplace, booking, dashboard, API, payment, and deployment work.

## 3. Functional quality

- Accessible mobile navigation with Escape handling and focus restoration.
- Functional project filtering and case-study navigation; correct local asset paths.
- Contact links use the existing LinkedIn profile until a verified email is supplied. Remove simulated form delivery and inactive CV download.
- Keep page content server rendered; isolate interactive behavior into small client components.

## 4. Production preparation

- Update the existing Next.js line to a patched release; remove unused animation/image packages where replaced.
- Optimize local image assets, load fonts locally, and use responsive image sizes.
- Add page metadata, sitemap, robots, social image, 404 page, configurable public origin, and setup documentation.
- Preserve existing content and unrelated files. Do not publish or modify external accounts as part of this repository implementation.

## 5. Validation and delivery

- Run TypeScript, lint, and a fresh static production build.
- Test the generated site at desktop, tablet, and mobile widths; verify navigation, filters, case studies, legacy routes, motion preferences, keyboard behavior, and missing assets.
- Apply the verified implementation to the original repository and report checks and any remaining configuration needs.

## Completion

Implemented in the original repository. Production build, TypeScript, lint, static export tests, production dependency audit, and responsive browser checks passed. See docs/VALIDATION.md for evidence and README.md for local setup and publication configuration.
