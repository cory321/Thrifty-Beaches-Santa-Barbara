# Thrifty Beaches Santa Barbara

Single-page landing site for Thrifty Beaches Santa Barbara — vintage clothing and mid-century furniture at 710 State Street.

## Run it

No build step. Just open `index.html` in a browser, or serve the folder with anything (e.g. `python3 -m http.server`).

## Project structure

```
.
├── index.html        # Markup (Tailwind via CDN, links to styles.css + script.js)
├── styles.css        # Custom CSS (animations + hero pattern)
├── script.js         # Footer year setter
├── assets/           # Logo lives here
└── images/           # Photography lives here
```

## Images in use

| File | Where it appears |
| --- | --- |
| `images/thrifty-beaches-hero-interior.webp` | Hero background |
| `images/thriftybeachessb-shelves.webp` | About section primary image |
| `images/state-street-pano.webp` | Visit section background |

## Drop-in checklist for pending assets

| File | Purpose | Recommended dimensions |
| --- | --- | --- |
| `images/furniture.jpg` | About section inset image (currently broken). | Square, ~600×600 |

## Tech

- Tailwind CSS via CDN (`tailwind.config` is inlined in `index.html` so the CDN picks it up)
- Google Fonts: Outfit + Playfair Display
- Brand colors: `sand #F4F1EA`, `ocean #1A1A1A` (charcoal), `gold #C9A84C`, `sage #4F6B57`

## Mobile experience

The desktop layout is preserved; every mobile-specific behavior is scoped to widths below the Tailwind `md:` breakpoint (768px).

- **Hamburger menu** — a `md:hidden` button in the header opens a full-screen overlay (`#mobile-menu`) with About / Visit / Call / Instagram links. Toggle, body scroll lock, and Escape/resize-to-close are handled in `script.js`.
- **Sticky bottom action bar** — `md:hidden` fixed bar at the bottom with Call / Directions / Instagram. Uses `env(safe-area-inset-bottom)` for notched devices.
- **Embedded map** — `#mobile-map` is hydrated with a Google Maps iframe only when `matchMedia('(max-width: 767px)')` matches, so desktop never fetches it.
- **Hero** — uses `100dvh` on mobile (true fullscreen, respects browser chrome) and `90vh` on desktop.
- **Touch states** — Visit cards include `active:` variants alongside `hover:` so taps feel responsive.
