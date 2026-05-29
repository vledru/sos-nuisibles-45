# SOS Nuisibles 45 — Design System

> "Fond blanc propre, charbon profond, ambre doré signature, typographie robuste Montserrat — PME de proximité sérieuse avec un soupçon de chaleur."
> — _brand-spec.md_

## Company context

**SOS Nuisibles 45** is a French pest-control SME (PME) serving the **Loiret** (department 45 in the Centre-Val de Loire region — Orléans, Montargis, Gien, Pithiviers, Sully-sur-Loire, etc.). They run a **24/7 emergency** dispatch model and promise on-site intervention **within 2 hours** anywhere in the department.

### Service catalogue (the three pillars)
1. **Dératisation** — rodent control (rats, mice, mulots, ragondins, campagnols)
2. **Désinsectisation** — insect control (cockroaches, ants, wasps, hornets, fleas, mosquitoes)
3. **Punaises de lit** — bed-bug treatment (thermal + chemical protocols, certified)

### Audience
- Particuliers (households)
- Professionnels (restaurants, hôtels, entrepôts, commerces)
- Collectivités

### Brand persona
Local, certified, no-nonsense. They lean on three reassurance pillars in every screen: **rapidité (≤2h)**, **certification Biocide**, and **proximité locale dans le 45**.

### Voice signals
- Phone number `02 46 91 56 20` is the single most repeated element
- "Urgence 24h/24 — 7j/7" sticky banner top of every page
- Stats they like to repeat: `500+ interventions`, `98% clients satisfaits`, `10 ans d'expérience`

## Sources provided

| Source | Path (local mount) | Mirrored in this project |
|---|---|---|
| Static site codebase | `SOS Nuisibles 45/Site-web-SOS-Nuisibles-45/` | `_source/` |
| Brand spec | `SOS Nuisibles 45/Site-web-SOS-Nuisibles-45/brand-spec.md` | `_source/brand-spec.md` |
| Design handoff doc | `SOS Nuisibles 45/Site-web-SOS-Nuisibles-45/DESIGN-HANDOFF.md` | (not mirrored — see local mount) |
| Logo | `SOS Nuisibles 45/Site-web-SOS-Nuisibles-45/mpo5f0px-sos-nuisibles-45-logo-v1.png` | `assets/sos-nuisibles-45-logo.png` |
| Additional brand colors flagged in chat | `#fec503` / `#131313` / `#f4f4f4` | encoded as `--brand-amber` / `--brand-charcoal` / `--brand-cream` |

The codebase is a static multi-page site (no framework): `index.html`, three service pages (`deratisation`, `desinsectisation`, `punaises-de-lit`), `contact.html` + an A/B variant `contact-2.html`. Shared styles live in `_source/main.css`, behaviour in `_source/main.js`.

## Index

| File | What it is |
|---|---|
| `README.md` | This file. Read first. |
| `SKILL.md` | Skill manifest for invoking this DS in other Claude contexts |
| `colors_and_type.css` | Authoritative CSS tokens (color, type, spacing, radii, shadows, motion) + semantic type classes |
| `assets/` | Logos (PNG, dark + alt) |
| `preview/` | Design-system specimen cards rendered in the DS tab |
| `ui_kits/marketing-site/` | UI kit — recreated marketing site, JSX components + click-thru `index.html` |
| `_source/` | Read-only mirror of the codebase for diffing / reference |

## Content fundamentals

**Language:** French (`lang="fr"`). All UI copy is FR. Do not Anglicize.

**Casing:** Sentence case for body and CTAs ("Demander un devis gratuit"). Eyebrow labels are UPPERCASE with `0.12em` letter-spacing ("NOS PRESTATIONS", "POURQUOI NOUS CHOISIR"). H1/H2 are in Title-ish case but follow normal French sentence rules — only the first word capitalized.

**Person:** **"Nous" / "nous"** — collective voice of the team. ("Nous intervenons", "Nos techniciens", "Nous connaissons parfaitement le terrain"). Addresses the reader as **"vous"** ("Votre tranquillité, notre priorité", "Appelez-nous").

**Tone:**
- _Confident and concrete._ Specific numbers, certifications, deadlines. "Intervention sous 2h", "Certifié Biocide", "+500 clients satisfaits".
- _Calm, not alarmist,_ despite the literal subject being infestations. The urgency lives in the red 24/7 banner and CTA — the body copy is matter-of-fact.
- _Local and human._ References to specific Loiret towns (Orléans, Montargis, Gien, Pithiviers…) and to the Loire river. PME = small enough to be on a first-name basis.

**Sentence shape:** Short. Mid-page paragraphs are 1–3 sentences. Lots of bulleted check-lists. Headline construction is "Problem? / On a la solution.": e.g. _"Nuisibles dans le **Loiret** ? / On intervient sous 2 heures."_ — a question, then a one-line promise broken across lines.

**Specific copy examples:**
- Hero H1: `Nuisibles dans le Loiret ? / On intervient sous 2 heures.`
- Eyebrow: `Nos prestations` / `Pourquoi nous choisir` / `Comment ça marche` / `Avis clients` / `Zone d'intervention`
- Process titles: `Appelez ou contactez-nous` → `Diagnostic et devis gratuit` → `Traitement et garantie`
- Reassurance pills: `Certifié Biocide` · `Disponible 24h/24` · `Tout le Loiret (45)` · `+500 clients satisfaits`
- Urgency banner: `Urgence 24h/24 & 7j/7 — Intervention rapide dans tout le Loiret — Appelez maintenant : 02 46 91 56 20`

**Emoji:** **Yes, sparingly and only as iconography for pest categories** — 🐀 🪳 🛏️ 🐝 🐁 🐭 🦦 🦫 🐿️ appear on service cards and "nuisible cards" as a stand-in for real photos. Never used in headings, body copy, CTAs, or for decoration.

**Phone number formatting:** Display as `02 46 91 56 20` (FR spaced); link as `tel:+33246915620`.

**Vibe checklist:**
- [x] Provincial / régional, not Parisian
- [x] Technical when describing protocols ("rodonticides", "boîtes de sécurité", "produits homologués")
- [x] Reassurance over hype — every screen has at least one trust-signal cluster
- [x] No exclamation marks unless quoting a customer
- [x] No emoji in headlines, no marketing fluff, no "discover", "unlock", "elevate"

## Visual foundations

### Color
**Three signature colors carry the whole identity:**
- **Charbon `#131313`** (`--fg`, `--brand-charcoal`) — body text, hero backgrounds, footer, CTA banner background
- **Ambre doré `#fec503`** (`--accent`, `--brand-amber`) — the wasp colour from the logo. Reserved for **primary CTAs and highlights — max 2 uses per screen** per the brand-spec.
- **Crème / blanc cassé `#f4f4f4`** (`--bg`) — warm white page background; pure white `--surface` for cards

**Supporting:**
- **Rouge urgence** `--danger` — the 24/7 banner, phone CTAs, urgent-state badges (`oklch(54% 0.20 25)`)
- **Vert succès** `--success` — "Disponible" badges, form confirmation (`oklch(56% 0.18 148)`)
- **Ambre foncé** `--accent-dark` — hover state for amber CTAs, eyebrow labels (`oklch(58% 0.18 70)`)
- **Ambre clair** `--accent-light` — tinted backgrounds for service-card icons, info boxes (`oklch(95% 0.06 85)`)

The amber CTA flips: on hover, background becomes `--accent-dark` and text becomes `#fff` (high contrast inversion).

### Typography
- **Display: Montserrat** loaded from Google Fonts at weights **400 / 500 / 600 / 700 / 800 / 900**. Used for ALL headings, buttons, eyebrows, navigation, stats numbers, labels, badges. Heavy weights dominate (800/900).
- **Body: system stack** — `-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif`. Used for paragraphs, form inputs, testimonials.
- All headings use `clamp()` for fluid sizing. Display peaks at 60px on the hero.
- Eyebrows: 11–12px, UPPER, 700, `letter-spacing: 0.12em`.

### Spacing & rhythm
- Section vertical padding: `clamp(64px, 8vw, 112px)` (`--section-py`)
- Section horizontal padding: `clamp(20px, 5vw, 48px)` (`--section-px`)
- Max content width: **1200px**
- Card padding: `28px` body, `24px 20px` for compact nuisible cards
- Default gap between cards: `28px` desktop, `20px` mobile

### Backgrounds
- **No images as page backgrounds.** Pages alternate between `--bg` (warm white) and `--fg` (charbon), with `--surface` (pure white) for elevated cards within white-bg sections.
- **Hero is a multi-stop dark gradient:** `linear-gradient(135deg, oklch(14% 0.018 60), oklch(20% 0.025 65), oklch(16% 0.020 62))` with two pseudo-element layers:
  - radial amber + radial red glow at corners (`opacity ~0.08–0.12`)
  - 48×48px white grid pattern at `opacity 0.03`
- Service-card image areas are placeholders: 16:9 dark gradient with an oversized emoji centred.

### Iconography
See **Iconography** section below.

### Animation
**Light, functional, never showy.**
- `pulse` keyframe (1.5s ease-in-out infinite) on the white urgency dot in the emergency banner and on the hero red badge dot — scale + opacity wobble
- Stats counter (`[data-count]`) animates from 0 to target over `1200ms` with a cubic-ease-out (`1 - (1-x)^3`) when scrolled into view
- Cards lift on hover: `transform: translateY(-3px to -4px)` over `0.25s`
- Buttons lift on hover: `translateY(-2px)` over `0.15s`
- Nav toggle hamburger morph to X: `0.25s` on transform + opacity
- FAQ chevron rotates `180deg` over `0.2–0.25s` on `details[open]`
- Press states: `transform: scale(0.98)` on submit button
- Default easing: plain CSS `ease`. No bouncy spring, no parallax, no scroll-jacking.

### Hover & press states
- **Cards:** `transform: translateY(-3..-4px)`, shadow upgrades from `--shadow-sm` to `--shadow`
- **Primary button (amber):** background → `--accent-dark`, text → white, shadow → larger amber glow, `translateY(-2px)`
- **Danger button (red):** background → `--danger-dark`, larger red glow, `translateY(-2px)`
- **Secondary button:** `border-color` → `--accent`, `color` → `--accent-dark`
- **Nav link:** background → `--accent-light`, color → `--accent-dark` (also the active state)
- **Zone tags:** border + color shift to accent, background to `--accent-light`
- **Footer links:** color → `--accent`
- **Active / press:** `transform: scale(0.98)` on submit; nav links use `:active` colour same as hover

### Borders
- Hairline `1px solid var(--border)` (a near-neutral `oklch(88% 0.008 85)`) on cards, inputs, dividers
- Form inputs use `1.5px` border (slightly heavier for affordance) and shift to `--accent-dark` with a `3px` ring on focus
- Info boxes use **3px left border** in `--accent-dark` or `--danger` (`info-box-accent`, `info-box-danger`) — one of the few left-border-accent uses we explicitly keep, because it's already a documented pattern in the codebase
- Stats bar uses vertical `1px` dividers `oklch(58% 0.18 70 / 0.3)` between numbers

### Shadow system
Three tiers, all soft and grayscale, never coloured for elevation:
- `--shadow-sm`: `0 1px 4px / 0.06, 0 2px 8px / 0.05` — cards at rest
- `--shadow`: `0 4px 12px / 0.08, 0 8px 24px / 0.06` — cards on hover, form card
- `--shadow-lg`: `0 8px 24px / 0.10, 0 16px 48px / 0.08` — heaviest, rarely used

Plus two **coloured glows** used ONLY on the matching coloured CTA:
- `0 4px 14px oklch(78% 0.19 82 / 0.35)` under amber buttons
- `0 4px 14px oklch(54% 0.20 25 / 0.35)` under red buttons

### Corner radii
- `8px` — buttons, inputs, tags, small badges
- `14px` — cards (default), info boxes
- `20px` — large CTA banners, form card
- `100px` / `9999px` — pill badges, hero badge, zone tags

### Cards
Cards are **white surfaces with hairline border + soft drop shadow + 14px radius**. They lift on hover. No coloured left borders by default (only info boxes use that). No glassmorphism on light surfaces. Glass cards (`backdrop-filter: blur(12px)`, `bg rgba(255,255,255,0.07)`) appear ONLY inside the dark hero.

### Transparency & blur
- `backdrop-filter: blur(12px)` is used **only inside the dark hero** for the floating status cards
- Light surfaces never use blur or transparency
- Radial gradients in the hero use 0.05–0.12 alpha amber/red overlays

### Layout rules (fixed elements)
1. **Sticky red emergency bar** at very top — `--danger` background, white text, pulsing dot, phone number underlined
2. **Sticky white header** below it — logo left, nav centre, phone CTA right
3. On service pages: optional `sticky-cta` sidebar with phone block (`top: 80px`)
4. Hamburger toggle on mobile (≤768px) — slides nav down from header
5. No fixed footer, no scroll-triggered chrome

### Imagery vibe
The provided codebase **does not ship any real photos** — service cards use emoji over dark gradients as placeholders. The brand-spec implies warm/local imagery would fit ("PME de proximité"). If photos are added later, target: warm white-balance, daylight, real Loiret locations, technicians in uniform, no stock-image feel.

## Iconography

**System: inline SVG, Heroicons (outline + filled variants).** Every icon in the codebase is hand-pasted Heroicons SVG markup (24×24 viewBox, `stroke-width="1.8..3"`, `currentColor`).
- Outline icons at 18–28px in cards, navigation, info boxes, trust pills
- `stroke-width: 1.8` for decorative icons, `2` for inline UI, `2.5–3` for tiny check marks inside check-list circles
- Colour inherits via `currentColor`: amber in nav/check icons, white in dark CTAs, danger in urgency contexts
- **Wrapped icon style:** the recurring pattern is a coloured `8px`-radius square (`var(--accent-light)`) with the icon centred — see `.service-card-icon`, `.contact-info-icon`, `.why-icon`.

**Emoji as pest illustrations:** As noted in Content Fundamentals, emoji are used **only** as stand-ins for animal/insect photos on service cards and pest-type grids. Approved set: 🐀 🐁 🐭 🐿️ 🦦 🦫 🪳 🐝 🛏️ 🚨.

**Logo:** `mpo5f0px-sos-nuisibles-45-logo-v1.png` — black wasp with amber wings on white. Render at:
- Header: `height: 96px` with `margin-top: -14px` (visually clipped inside an 80px-tall header — the design INTENTIONALLY oversizes the logo so the wasp dominates)
- Footer: `height: 80px` with `margin-top: -12px`
- Two variants are in `assets/` — `sos-nuisibles-45-logo.png` (primary, full colour on white) and `sos-nuisibles-45-logo-white.png` (monochrome white silhouette on transparent, for charcoal/dark backgrounds — footer, dark hero). `logo-alt.png` is the additional version supplied at the root of the mount.

**No icon font.** No SVG sprites. No PNG icons. If you need a new icon, paste the Heroicons (https://heroicons.com) outline variant inline and let `currentColor` handle theming.

**Substitutions / flags:**
- ⚠️ **No real photography in the source codebase.** Service-card imagery is gradient + emoji. If a production design needs real photos, ask the user.
- ⚠️ **Logo asset only available as PNG** (not SVG). If a vector version exists, ask the user to share it.

## Asks for the user (iteration)

See the bottom of the design system. There are some explicit questions there.
