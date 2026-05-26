# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this repository.

## Commands

```bash
npm run dev      # dev server on http://localhost:4321
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Architecture

Content-template separation:

- **`src/data/site.ts`** — single source of truth for all text content, nav items, social links, projects. Edit here to update site copy.
- **`src/layouts/Layout.astro`** — HTML shell, Google Fonts import (JetBrains Mono), global CSS design tokens (CSS custom properties) and global styles including animations, shared utility classes.
- **`src/components/Nav.astro`** — sticky header with IntersectionObserver-based active section tracking and scroll-based background blur. Uses `data-section` attribute on links to match section `id`s.
- **`src/components/*Section.astro`** — one component per full-height section (Ciao, About, Entrepreneur, Tech, Researcher, RealLife). Each imports only its slice from `site.ts`.
- **`src/pages/index.astro`** — assembles layout + nav + all sections. No logic here.

## Design tokens

All in CSS custom properties on `:root` in `Layout.astro`:

| Token | Value | Usage |
|-------|-------|-------|
| `--accent` | `#00ff87` | neon green primary accent |
| `--purple` | `#9d4edd` | secondary accent (quote blocks, acquisition badge) |
| `--coral` | `#ff6b6b` | tertiary (glitch effect only) |
| `--bg` | `#080b12` | main background |
| `--bg-alt` | `#0c1020` | alternating section background |
| `--font` | JetBrains Mono | monospace throughout |
| `--max-w` | `860px` | content max-width |

Sections alternate between `--bg` and `--bg-alt` via the `section--alt` class.

## Shared CSS classes (defined in Layout.astro)

- `.section` / `.section--alt` / `.section__inner` / `.section__num` / `.section__heading` — section wrapper structure
- `.cursor` — blinking neon green block cursor (CSS animation)
- `.prompt` — text with `> ` prefix styled in accent color
- `.label` — small uppercase spaced label
- `.divider` — 40px green gradient horizontal rule
- `.tag` — bordered pill chip

## Adding a new section

1. Add content to `src/data/site.ts`
2. Create `src/components/NewSection.astro` — import from `site.ts`, use `.section` wrapper with `section--alt` on even sections
3. Add `<NewSection />` in `src/pages/index.astro`
4. Add nav entry in `site.ts` → `nav` array (href must match section `id`)
