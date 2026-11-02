# Moazam Khan — Full Stack Developer Portfolio

A dark editorial portfolio focused on SaaS and business application development. Built with Next.js App Router, React, TypeScript, locally hosted fonts, and plain CSS. All routes are statically exported; no runtime database or server is required.

## Local development

Requires Node.js 20.9+ and npm.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. Before deployment, copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin. When it is unset, indexing, canonical URLs, and sitemap entries are disabled to keep local previews out of search engines. Rebuild after changing it.

## Validate and build

```sh
npm run lint
npm run build
npm run typecheck
npm test
npm start
```

`npm test` checks the generated `out` directory, so run a build first. `npm start` serves the export at http://127.0.0.1:3000 for local review. Upload the contents of `out/` to a static host that supports directory indexes and `404.html`. A Node server is not required in production. Apply security headers through your host’s configuration.

## Content

- `src/data/profile.ts`: public identity, LinkedIn, GitHub, education, certifications, and capabilities.
- `src/data/projects.ts`: 21 projects, categories, screenshots, and case-study content. Marketplace work in progress is explicitly labeled.
- `src/data/experience.ts`: the experience entries from the original portfolio.
- `public/images`: optimized WebP screenshots and portrait. Original assets remain in the original repository.
- `public/fonts`: locally hosted DM Sans and Instrument Serif, licensed under SIL Open Font License; see the included license files.
- `IMPLEMENTATION_PLAN.md`: the implementation brief and acceptance criteria.

Existing `/Projects/`, `/Experience/`, `/Education/`, and `/Contact/` routes remain available. `/work/` is the project archive, `/about/` is the biography, and `/work/[slug]/` contains static case studies. `/Projects/` uses `/work/` as its canonical URL.

## Interaction and accessibility

Content is server rendered and readable without JavaScript. The mobile menu supports Escape and focus restoration; filtering and expertise disclosures use native buttons with announced state. The motion control persists locally, respects the operating system’s reduced-motion preference on initial load, and defaults off on smaller screens. Canvas rendering stops offscreen and while the tab is hidden. External links use `noopener noreferrer`.

Contact uses the supplied LinkedIn profile. No unverified email address, fake message delivery, unsupported achievement metrics, or inactive CV download is included. To add email later, update the shared profile and contact components with the confirmed address. The original phone number is intentionally not published because its country prefix needs confirmation.

## Maintenance

Next.js is pinned to 15.5.28, the patched maintenance release available during implementation. Keep the lockfile committed and apply future security updates. Dependency installation can report development-tool deprecations; run a fresh audit when updating packages.

Before publishing, review project availability, contact details, and case-study wording, set the public origin, and run the checks above. No deployment credentials are needed for local development.
