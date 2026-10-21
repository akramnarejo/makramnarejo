# Portfolio

Personal site for **Akram Narejo** — senior frontend engineer. A minimal, editorial portfolio: one column of content, hairline rules, a single accent colour, and no client-side animation libraries.

## Stack

- **Next.js 14** (App Router, static rendering)
- **TypeScript** (strict)
- **Tailwind CSS** with CSS-variable design tokens
- **next/font** — Inter for text, JetBrains Mono for labels and metadata
- **Vercel Analytics**

## Structure

```
src/app/
├── layout.tsx              # fonts, metadata, header/footer shell
├── page.tsx                # home
├── work/page.tsx           # projects + open source
├── about/page.tsx          # story, principles, experience
├── globals.css             # tokens, base styles, reveal animation
└── lib/
    ├── constants.tsx       # all content lives here
    └── components/
        ├── header.tsx
        ├── footer.tsx
        ├── section.tsx     # numbered section with a label rail
        ├── project-row.tsx
        └── reveal.tsx      # IntersectionObserver-based fade-up
```

## Commands

```bash
npm run dev        # start the dev server
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Notes

- Content is defined in `src/app/lib/constants.tsx` — edit there, not in the pages.
- Light and dark themes follow `prefers-color-scheme`; both are contrast checked.
- Set `NEXT_PUBLIC_SITE_URL` to override the canonical URL used in metadata.
