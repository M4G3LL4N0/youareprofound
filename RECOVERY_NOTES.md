# Project Recovery Notes

## Startup Identity

- Startup name: YouAreProfound
- Project folder: /Users/joshuadavis/startups/youareprofound
- Domain: TBD / manual Vercel deployment
- One-line description: Turn timeless wisdom into clarity, peace, and direction people can actually live.
- Category: wellness, wisdom learning, reflective AI, meaning operating system
- Stage: MVP recovery / demo-ready

## Product Vision

- Target user: People seeking peace, purpose, and self-understanding; founders and high performers under pressure; anyone navigating uncertainty, grief, ambition, identity, or transition who consumes wisdom but struggles to integrate it.
- Core problem: People consume powerful wisdom content but rarely absorb it, structure it, remember it, or apply it to daily life.
- Core solution: A premium meaning operating system with guided Profound Paths, fading quotes with attribution, mantras, reflection prompts, and a Profound Mirror interface for honest writing (demo-first; future AI clearly labeled).
- Differentiation: Not a quote scraper, meditation clone, or licensed talk aggregator. Original structure, owned language, cinematic UI, and integration over inspiration.
- MVP goal: Premium landing page plus lightweight `/app` dashboard shell with paths, daily insight, and a working Profound Mirror textarea preview — build-clean and manually deployable to Vercel.
- Long-term vision: Saved reflections, optional Supabase auth, personalized paths, responsible AI mirror, and premium subscription when requested.

## Website/App Structure

- Main routes: `/` (marketing), `/app` (dashboard shell), `/api/checkout` (placeholder JSON route — Stripe deferred).
- Key components:
  - `components/Navbar.tsx`
  - `components/AmbientBackground.tsx`
  - `components/QuoteEngine.tsx`
  - `components/ProfoundMirrorTeaser.tsx` (homepage `#mirror` section)
  - `components/app/AppSidebar.tsx`
  - `components/app/AppTopbar.tsx`
  - `components/app/AppQuoteRotator.tsx`
  - `components/app/ProfoundMirrorPreview.tsx` (in-app mirror with local response engine)
- Data/content files: `lib/content.ts` (paths, quotes, mantras, prompts).
- API routes: `app/api/checkout/route.ts` (placeholder; no Stripe implementation yet).
- Auth/database needs: none for current MVP. Supabase client and dependency removed until requested.

## Design Direction

- Visual style: Dark cinematic premium glass UI, soft gradients, ambient motion, luxury spiritual-tech calm.
- Tone: Calm, intelligent, emotionally steady — never cheap self-help or fake therapy claims.
- Layout principles: Clear hero hierarchy, breathing room, responsive grids, readable type, single primary navbar.
- Brand notes: "You are not lost. You are profound." / "Not inspiration. Integration." No affiliation claims with third-party speakers or brands; footer disclaimer included.

## What Was Preserved

- Next.js 16 App Router structure, React 19, Tailwind v4 + PostCSS pipeline, Geist fonts.
- Glass utility classes and `lib/content.ts` library (paths, quotes, mantras, prompts).
- Original `AmbientBackground`, `Navbar`, `QuoteEngine`, `AppSidebar`, `AppTopbar`, `AppQuoteRotator` behavior and styling.
- Public SVG assets, pnpm-first workflow.

## What Was Fixed

- Replaced homepage iframe to `youareprofound.noaerth.com` with a full product-specific landing experience (hero, fading quotes, "Not inspiration. Integration." positioning, Profound Paths grid, Profound Mirror preview, experience design pillars, final CTA, footer with disclaimer).
- Relocated app-shell components into `components/app/` per spec and updated all imports.
- Added `components/app/ProfoundMirrorPreview.tsx` — a working textarea preview with a local, keyword-based reflective response demo (no fake AI claims; clearly labeled "Demo reflection. No data is stored.").
- Fixed `app/globals.css` to use Tailwind v4 syntax (`@import "tailwindcss";` instead of v3 `@tailwind base/components/utilities`).
- Replaced placeholder layout metadata ("Create Next App") with product metadata, SEO keywords, OpenGraph, and Twitter card.
- Pinned `turbopack.root` in `next.config.ts` to silence multi-lockfile workspace inference warning.
- Added `typecheck` script and `pnpm.onlyBuiltDependencies` for sharp/unrs-resolver so installs run cleanly.
- Rebuilt `.gitignore` per the recovery spec (allows `.env.example`, deduped tail entries).

## What Was Removed

- `lib/supabase.ts` (placeholder Supabase client; no auth/database in MVP).
- `@supabase/supabase-js` npm dependency.
- `clsx` dependency (unused in source).

## Current Build Status

- `pnpm install`: pass (with `--force` once after a stale state; future `pnpm install` is clean).
- `pnpm lint`: pass (no warnings).
- `pnpm typecheck`: pass.
- `pnpm build`: pass — routes `/`, `/app`, `/_not-found` prerendered static; `/api/checkout` dynamic placeholder.

## Manual Deploy Command

```bash
cd /Users/joshuadavis/startups/youareprofound
pnpm install
pnpm build
vercel --prod
```

## Return-Later Commands

```bash
cd /Users/joshuadavis/startups/youareprofound
pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
```

## Next Best Tasks

- Wire `ProfoundMirrorPreview` to a richer local response library (more seeds, categories), still local and clearly demo-labeled.
- Add path detail routes (`/paths/[slug]`) backed by `lib/content.ts`.
- Expand mantra/prompt/quote library with original owned copy.
- Onboarding quiz that suggests a starting path (static first).
- OG image asset and `metadata.openGraph.images` entry.
- Supabase / Stripe only when explicitly requested.

## Autobuilder Guardrails

- pnpm only. No `npm` or `yarn`.
- No automatic `vercel --prod`. No automatic `git push`.
- Do not ship rights-risky aggregators or imply official ties to named media estates.
- Do not delete source trees, `pnpm-lock.yaml`, recovery/foundation files, or used public assets.
- See `.autobuilder/guardrails.md` for the canonical list.
