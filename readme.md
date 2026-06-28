# DermaStart Design System

> **Version 1.0** — June 2026

A complete design system for **DermaStart** — India's turnkey clinic setup platform for dermatologists. This system covers color, typography, spacing, components, and full UI-kit recreations of the DermaStart marketing website.

---

## Company & Product Context

**DermaStart** helps dermatologists launch, brand, and run their own private practices — handling everything from licensing and interior design to equipment procurement, branding, digital presence, and staff recruitment. Their tagline: *"From day one to opening day."*

**Core product:** A marketing website (`index.html`, `about.html`, `packages.html`, `services.html`, `how-it-works.html`, `gallery.html`) plus a consultation-booking flow. The business model is a B2B service sold to newly graduating or relocating dermatologists across 18 Indian cities.

**Target audience:** Dermatologists setting up private practice — highly educated, clinical-minded, often entering business for the first time. They need credibility signals *and* warmth.

### Source Materials

- **GitHub Repository:** [jahnvikumar/DermaStart](https://github.com/jahnvikumar/DermaStart) — full HTML/CSS source of the marketing website. The repo contains no build tooling — all pages are standalone HTML files with inline `<style>` blocks.
- **Design Blueprint:** `uploads/design.md` — a complete design reference document covering color, typography, spacing, components, and visual language rules.

---

## CONTENT FUNDAMENTALS

### Voice & Tone

DermaStart writes like a trusted senior colleague — someone who has been through clinic setup before and is walking you through it calmly. Never condescending, never anxious.

| Dimension | Direction |
|---|---|
| **Register** | Professional but warm. Not corporate, not casual. |
| **Person** | Second-person "you" throughout. "Your clinic", "your patients", "your vision". |
| **Pronoun** | "We" for DermaStart. Not "I", not the brand name in third-person running copy. |
| **Tense** | Present and active. "We handle", not "will be handled". |
| **Sentence length** | Short-to-medium. One idea per sentence in hero/CTA copy. Longer allowed in explanatory body. |
| **Emoji** | **Never.** This is a clinical-credibility brand. |
| **Exclamation marks** | Never in headings. Avoid in body. |
| **Oxford comma** | Used throughout. |

### Casing Rules

- **Headings (Cormorant Garamond):** Sentence case only. Never title case for section headings.
- **Eyebrow labels:** ALL CAPS. Tracked out. Example: `PRACTICE PROFILES`, `WHAT WE HANDLE`
- **Button text:** ALL CAPS. Tracked out. Example: `BOOK FREE CONSULTATION`, `GET A QUOTE`
- **Nav links:** Title Case. Example: `How It Works`, `About`
- **Badge/tag text:** ALL CAPS. Example: `MOST POPULAR`, `VERIFIED`

### Headline Patterns

Cormorant headlines frequently use *italic em* for the emotionally resonant word:

```
Your clinic, built the way you envisioned it.
                                  ^^^^^^^^^^^
Built by people who understand medicine.
                               ^^^^^^^^
From call to clinic in 90 days.
                       ^^^^^^^
```

The italic word is always set in `--color-dune`. It is usually the payoff word — the aspiration, the outcome, or the time promise.

### Copywriting Examples

- Hero: *"Your clinic, built the way you envisioned it."*
- CTA: *"Start with a free call."* (not "Schedule a free consultation today!")
- Trust copy: *"MCI-compliant setup guidance"* — factual, not effusive
- Section intro: *"We cover the full spectrum of clinic setup — so nothing slips through the cracks before opening day."*
- FAQ answer: *"Yes — for clinics that already have a space..."* — direct, no hedging

### What DermaStart Does NOT Write

- Hype language: "revolutionary", "game-changing", "world-class"
- Generic claims: "passionate team", "dedicated to excellence"
- Consumer health framing: "your wellness journey", "feel your best"
- Urgency tactics: "Limited spots!", "Act now!"

---

## VISUAL FOUNDATIONS

### Color System

The palette is derived from warm nude/beige skin tones with a professional deep-green-grey anchor.

**Primary**
| Token | Hex | Role |
|---|---|---|
| `--color-dune` | `#C9A882` | Brand accent — CTAs, active states, italic em text, eyebrow accents |
| `--color-canvas` | `#F2EDE6` | Page background — the "waiting room" warmth |
| `--color-parchment` | `#FAF7F4` | Card background, footer, form fields |
| `--color-slate` | `#2C3A3A` | Primary text, headings, navbar, inverse backgrounds |
| `--color-sage` | `#7A9E9F` | Trust/verification only — checkmarks, verified badges |

**Support**
| Token | Hex | Role |
|---|---|---|
| `--color-blush` | `#E8D5C4` | Borders, dividers, subtle fills, empty stars |
| `--color-stone` | `#8A8078` | Body copy, captions, meta |
| `--color-white` | `#FFFFFF` | Modals, navbar, form backgrounds |
| `--color-error` | `#C0605A` | Validation errors only |
| `--color-success` | `#5A8A72` | Confirmation states |

**Color Rules**
- Never pure black (`#000`). Use Deep Slate.
- Never pure white full-page backgrounds. Use Canvas or Parchment.
- Dune appears on **1–2 elements per section maximum**.
- Dune as text color FAILS WCAG AA on white — use it only for icons, borders, and decorative/accent elements, or as a background with dark text on top.
- Sage Mist is reserved exclusively for trust/verification signals.
- The only gradient allowed is the hero image overlay: `linear-gradient(to right, rgba(242,237,230,0.85) 40%, transparent 100%)`

### Typography

**Display: Cormorant Garamond**
- Weights: 300 (hero, standard headings), 500 (section headings, pull quotes), 600 (rarely — for maximum emphasis)
- Italic 300: pull quotes and taglines only
- Letter spacing: `0.01em`–`0.03em` — generous, spacious
- Never bold a Cormorant headline — elegance comes from lightness
- Never use for body text, labels, or captions

**Body/UI: DM Sans**
- Weights: 300 (intro paragraphs, supporting text), 400 (body), 500 (UI labels, nav), 600 (buttons, eyebrows, card titles)
- Letter spacing: `-0.01em` — modern tight feel for body
- Eyebrow labels: 11px, 500, `0.12em` tracking, uppercase, Dune color

**Type Scale**

| Token | Size | Usage |
|---|---|---|
| `--text-hero` | clamp(44–72px) | Main hero headline |
| `--text-h1` | clamp(32–44px) | Page-level titles |
| `--text-h2` | clamp(24–32px) | Section headings |
| `--text-h3` | 22px | Card titles, sub-headings |
| `--text-body-lg` | 18px | Intro paragraphs |
| `--text-body` | 16px | General body |
| `--text-sm` | 14px | Captions, meta, helper text |
| `--text-xs` | 12px | Labels, tags, badges |
| `--text-btn` | 14px | All button text |

### Spacing

8px base grid. All spacing is a multiple of 8px (`--space-1` through `--space-8`). Section vertical padding is `--space-7` (96px) on desktop, `--space-6` (64px) on mobile.

### Backgrounds & Surfaces

- **Page background:** `--color-canvas` (`#F2EDE6`) — warm cream, not white
- **Alternating sections:** `--color-white` for the "section-alt" pattern
- **Card background:** `--color-parchment` (`#FAF7F4`)
- **Inverse sections:** `--color-slate` — used for testimonials, CTA banners, hero variants
- **Dune CTA background:** Used once on how-it-works page CTA — sparingly
- No gradient backgrounds. No pattern/texture fills. No full-bleed imagery with text overlay (except the hero gradient overlay rule above).

### Borders & Radius

- `--radius-sm: 2px` — buttons, badges, tags (clinical, not pill-shaped)
- `--radius-md: 4px` — inputs, small containers
- `--radius-lg: 6px` — cards, dropdowns, images — this is the MAXIMUM
- Standard border: `1px solid --color-blush`
- Active/featured borders: `2px solid --color-dune` (e.g. featured package card)
- Left-border hover accent on feature cards: `3px solid --color-dune`
- **Pill shapes are forbidden.** `border-radius: 9999px` is never used.

### Shadows & Depth

Shadows are spare and use Deep Slate tint, not black. Light and airy feel — shadows suggest elevation, not decoration.

| Token | Value | Usage |
|---|---|---|
| `--shadow-1` | `0 2px 12px rgba(44,58,58,0.06)` | Card resting state |
| `--shadow-2` | `0 6px 24px rgba(44,58,58,0.10)` | Card hover |
| `--shadow-3` | `0 16px 48px rgba(44,58,58,0.16)` | Modal/dialog |
| `--shadow-nav` | `0 2px 16px rgba(44,58,58,0.08)` | Sticky navbar |

No text shadows. No decorative drop shadows.

### Animation & Motion

Minimal and purposeful. Professional, not playful.

| Element | Motion |
|---|---|
| Default transition | `200ms ease` |
| Button press | `scale(0.98)`, 100ms |
| Card hover | `translateY(-3px)` + shadow-2, 200ms |
| Section reveal | `fadeInUp` 30px, 400ms ease-out, 80ms child stagger |
| Navbar shadow | `box-shadow` on scroll >60px |
| Hover on text | **Never** transform — color only |
| Reduced motion | Remove all transforms, keep opacity fades ≤200ms |

### Hover & Press States

- **Links:** Color shifts to `--color-dune`
- **Primary button:** Background darkens to `--color-dune-hover` (#B5935F)
- **Secondary button:** Fills with `--color-slate`, text turns white
- **Cards:** `translateY(-3px)` + shadow-2 lift
- **Service cards:** Additionally get `border-left: 3px solid --color-dune`
- **Navbar dropdown items:** `background: --color-parchment`, left border dune accent
- **Footer links:** Color shifts to `--color-dune`

### Icons

- **Library:** Lucide Icons (line, stroke-width 1.5) — loaded from CDN `https://unpkg.com/lucide@latest`
- **No filled icons.** Line only.
- **Stroke width:** `1.5px`
- **Default color:** `--color-slate`
- **Accent/active color:** `--color-dune`
- **Trust icons:** `--color-sage`
- **Sizes:** 20px inline, 32px feature cards, 48px hero/illustration zones

### Cards

```
Standard Card
  bg: --color-parchment
  border: 1px solid --color-blush
  border-radius: --radius-lg (6px)
  padding: --space-4 (32px)
  shadow: --shadow-1
  hover: shadow → --shadow-2, translateY(-3px)

Feature Card (icon + text)
  bg: --color-white
  border: none
  border-radius: --radius-lg
  padding: 28px 24px
  hover: border-left: 3px solid --color-dune
```

### Photography Direction

- Diverse skin tones — essential for a dermatology brand
- Soft, natural, diffused light — no harsh studio flash
- Cream/white/light beige backgrounds in photos
- Dermatologists: approachable and credentialed
- No stock-photo-cheesy imagery

### Image Treatments

- Hero overlay: `linear-gradient(to right, rgba(242,237,230,0.85) 40%, transparent 100%)`
- Card image ratio: 4:3 landscape, 1:1 portrait/avatar
- `border-radius: --radius-lg` on images inside cards
- `border-radius: 0` on full-bleed section images

---

## ICONOGRAPHY

DermaStart uses **Lucide Icons** (line/stroke style) exclusively. Loaded from CDN:

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
```

Or SVG icons inlined directly (as in the codebase) with:
- `fill="none"`
- `stroke="currentColor"`
- `stroke-width="1.5"`
- `viewBox="0 0 24 24"`

**No filled icons. No emoji as icons. No unicode icon substitutes.**

Common icons in use:
- `check-circle` — trust bar, package features (sage color)
- `arrow-right` — service card CTAs (dune color)
- `chevron-down` — navbar dropdown trigger
- `plus` — FAQ accordion open state (dune color)
- `shield-check` — compliance/compliance features
- `clock` — timeline/timeline items
- `users` — staff/team references
- `globe` — digital presence services

**Illustration Style** (when used):
- Line illustrations only — no fills
- Stroke color: `--color-slate` or `--color-dune`
- Minimal, anatomical, elegant — not cartoonish
- SVG format

---

## File Index

```
styles.css                          ← Consumer entry point (imports only)
tokens/
  fonts.css                         ← Font import instructions + @font-face
  colors.css                        ← All color custom properties
  typography.css                    ← Type scale + font family tokens
  spacing.css                       ← 8px grid spacing + layout tokens
  effects.css                       ← Shadows, radii, borders, transitions
  base.css                          ← Global resets + utility classes
assets/
  logo.svg                          ← DermStart wordmark SVG
guidelines/
  colors-primary.card.html          ← Primary palette swatches
  colors-secondary.card.html        ← Support palette swatches
  type-display.card.html            ← Cormorant Garamond specimens
  type-body.card.html               ← DM Sans specimens
  type-scale.card.html              ← Full type scale
  spacing.card.html                 ← Spacing scale tokens
  shadows.card.html                 ← Shadow levels
  borders.card.html                 ← Border, radius, and focus tokens
  motion.card.html                  ← Animation & transition tokens
components/
  core/
    Button.jsx / Button.d.ts        ← Primary, secondary, ghost buttons
    Badge.jsx / Badge.d.ts          ← Status badges and tags
    Card.jsx / Card.d.ts            ← Standard and feature cards
    Input.jsx / Input.d.ts          ← Text input, label, helper text
    buttons.card.html               ← Button specimens
    forms.card.html                 ← Input/form specimens
    cards.card.html                 ← Card specimens
    badges.card.html                ← Badge/tag specimens
  navigation/
    Navbar.jsx / Navbar.d.ts        ← Top navigation bar
    navbar.card.html                ← Navbar specimen
ui_kits/
  website/
    index.html                      ← Interactive DermaStart website UI kit
readme.md                           ← This file
SKILL.md                            ← Agent skill definition
```

---

## Usage

### Consuming this design system

1. Link `styles.css` in your HTML `<head>`:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;0,600;1,300&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
   <link rel="stylesheet" href="path/to/styles.css" />
   ```
2. Use CSS custom properties anywhere: `color: var(--color-dune)`, `font-family: var(--font-display)`.
3. React components are bundled in `_ds_bundle.js` — access via `window.DermaStart.Button`, etc.

### Key Rules (quick reference)

- Background: always `--color-canvas` or `--color-parchment`, never `#fff` full-page
- Text: always `--color-slate`, never `#000`
- Radius: max `6px`, never pill/rounded
- Dune accent: max 1–2 elements per section
- Icons: line only, stroke 1.5px
- Fonts: Cormorant Garamond display-only, DM Sans everything else
- Buttons: ALL CAPS, `letter-spacing: 0.06em`, `border-radius: 2px`

---

*DermaStart Design System — built from [jahnvikumar/DermaStart](https://github.com/jahnvikumar/DermaStart) source and `uploads/design.md` blueprint.*
