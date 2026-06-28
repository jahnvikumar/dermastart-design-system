# Design Blueprint
## Platform for Dermatologists — Aesthetics, Fonts & Visual Language

> This document is a pure design reference. It covers color, typography, spacing, component styling, and visual language only. Section/content structure is defined separately.

---

## 1. Brand Personality

| Dimension | Direction |
|---|---|
| **Tone** | Trustworthy, clinical, warm — not cold or corporate |
| **Feel** | Like a premium private clinic — clean but not sterile |
| **Audience** | Dermatologists and medical professionals setting up a practice |
| **Promise** | Professional authority wrapped in approachable warmth |

The visual language should communicate: *"We know medicine, and we know business."*

---

## 2. Color Palette

All colors are derived from warm nude/beige skin tones, grounded with a deep professional anchor and lifted with soft cream highlights.

### Primary Palette

| Name | Hex | Usage |
|---|---|---|
| **Dune** | `#C9A882` | Primary brand accent — CTAs, highlights, active states |
| **Warm Canvas** | `#F2EDE6` | Page backgrounds, section fills |
| **Parchment** | `#FAF7F4` | Card backgrounds, input fields |
| **Deep Slate** | `#2C3A3A` | Primary text, headings, navbar |
| **Sage Mist** | `#7A9E9F` | Secondary accent — trust badges, icons, subtle links |

### Secondary / Support Palette

| Name | Hex | Usage |
|---|---|---|
| **Blush Dust** | `#E8D5C4` | Section dividers, soft card borders, hover fills |
| **Stone** | `#8A8078` | Body text, captions, meta labels |
| **White Sand** | `#FFFFFF` | Form backgrounds, modals, navbar |
| **Error Rose** | `#C0605A` | Form validation errors only |
| **Success Moss** | `#5A8A72` | Confirmation states, success messages |

### Color Rules

- **Never** use pure black (`#000000`) anywhere. Use Deep Slate instead.
- **Never** use pure white backgrounds for full-page fills. Use Warm Canvas or Parchment.
- The **Dune** accent should appear sparingly — 1 or 2 elements per section maximum.
- **Sage Mist** is a trust color — use it for checkmarks, verified badges, and supporting icons.
- Buttons come in two variants only: **filled Dune** (primary) and **outlined Deep Slate** (secondary).

---

## 3. Typography

### Typeface Roles

| Role | Font | Weight(s) | Where |
|---|---|---|---|
| **Display** | `Cormorant Garamond` | 300, 500, 600 | Hero headlines, section titles |
| **Body** | `DM Sans` | 300, 400, 500 | Paragraphs, descriptions, nav items |
| **UI / Labels** | `DM Sans` | 500, 600 | Buttons, form labels, badges, captions |
| **Accent Script** *(optional)* | `Cormorant Infant Italic` | 300 italic | Pull quotes, taglines only |

> Both fonts are available on **Google Fonts** — free to use.
> Import: `Cormorant+Garamond:ital,wght@0,300;0,500;0,600;1,300` and `DM+Sans:wght@300;400;500;600`

### Type Scale

| Token | Size | Line Height | Weight | Font | Usage |
|---|---|---|---|---|---|
| `--text-hero` | 56–72px | 1.1 | 300 | Cormorant Garamond | Main hero headline |
| `--text-h1` | 44px | 1.15 | 500 | Cormorant Garamond | Page-level titles |
| `--text-h2` | 32px | 1.2 | 500 | Cormorant Garamond | Section headings |
| `--text-h3` | 22px | 1.3 | 600 | DM Sans | Card titles, sub-headings |
| `--text-body-lg` | 18px | 1.7 | 300 | DM Sans | Intro paragraphs |
| `--text-body` | 16px | 1.65 | 400 | DM Sans | General body copy |
| `--text-sm` | 14px | 1.5 | 400 | DM Sans | Captions, meta, helper text |
| `--text-xs` | 12px | 1.4 | 500 | DM Sans | Labels, tags, badges |
| `--text-btn` | 14px | 1 | 600 | DM Sans | All button text |

### Typography Rules

- Headlines in Cormorant Garamond should feel **generous and spacious** — use `letter-spacing: 0.01em` to `0.03em`.
- Body text in DM Sans should use `letter-spacing: -0.01em` for a modern, tight feel.
- **Never bold** a Cormorant headline — its elegance comes from weight 300–500.
- **Section eyebrows** (the small label above a heading like "Treatments" in the reference) use `DM Sans 500, 11px, letter-spacing: 0.12em, uppercase, color: Dune`.
- Avoid centering body paragraphs longer than 2 lines.

---

## 4. Spacing & Layout

### Base Unit

All spacing is based on an **8px grid**.

| Token | Value | Usage |
|---|---|---|
| `--space-1` | 8px | Tight gaps, icon padding |
| `--space-2` | 16px | Inline element gaps |
| `--space-3` | 24px | Component internal padding |
| `--space-4` | 32px | Card padding, small sections |
| `--space-5` | 48px | Between components within a section |
| `--space-6` | 64px | Section top/bottom padding (mobile) |
| `--space-7` | 96px | Section top/bottom padding (desktop) |
| `--space-8` | 128px | Hero vertical padding |

### Max Widths

| Context | Max Width |
|---|---|
| Main content | `1200px` |
| Narrow (text-heavy) blocks | `720px` |
| Full bleed sections | `100%` |
| Form containers | `560px` |

### Grid

- **Desktop:** 12-column grid, `24px` gutters
- **Tablet:** 8-column grid, `20px` gutters
- **Mobile:** 4-column grid, `16px` gutters, `20px` horizontal page padding

---

## 5. Component Styling

### Buttons

```
Primary Button
  Background:   #C9A882 (Dune)
  Text:         #FFFFFF
  Font:         DM Sans 600, 14px, letter-spacing: 0.06em, uppercase
  Padding:      14px 32px
  Border:       none
  Border-radius: 2px
  Hover:        background darken 8% → #B5935F
  Transition:   background 200ms ease

Secondary Button
  Background:   transparent
  Text:         #2C3A3A (Deep Slate)
  Border:       1.5px solid #2C3A3A
  Padding:      13px 31px (1px less to compensate for border)
  Border-radius: 2px
  Hover:        background #2C3A3A, text #FFFFFF

Ghost / Text Link Button
  No background, no border
  Text:         #C9A882 (Dune)
  Underline on hover only
  Font:         DM Sans 500, 14px
```

> **Rule:** Buttons use `border-radius: 2px` only — never fully rounded pills. This gives a refined, clinical feel rather than a bubbly consumer app look.

### Cards

```
Standard Card
  Background:   #FAF7F4 (Parchment)
  Border:       1px solid #E8D5C4 (Blush Dust)
  Border-radius: 6px
  Padding:      32px
  Shadow:       0 2px 12px rgba(44, 58, 58, 0.06)
  Hover shadow: 0 6px 24px rgba(44, 58, 58, 0.10)
  Transition:   box-shadow 200ms ease

Feature Card (icon + text)
  Background:   #FFFFFF
  Border:       none
  Border-radius: 6px
  Padding:      28px 24px
  Left border accent (on hover): 3px solid #C9A882
```

### Form Inputs

```
Input Field
  Background:   #FFFFFF
  Border:       1px solid #E8D5C4 (Blush Dust)
  Border-radius: 4px
  Padding:      12px 16px
  Font:         DM Sans 400, 15px, color: #2C3A3A
  Placeholder:  DM Sans 400, 15px, color: #8A8078 (Stone)
  Focus border: 1.5px solid #C9A882 (Dune)
  Focus shadow: 0 0 0 3px rgba(201, 168, 130, 0.15)
  Error border: 1.5px solid #C0605A (Error Rose)

Label
  Font:         DM Sans 500, 13px
  Color:        #2C3A3A
  Margin-bottom: 6px
  Letter-spacing: 0.02em

Dropdown / Select
  Same as input field
  Custom arrow icon in Dune color
```

### Navigation Bar

```
Background:     #FFFFFF
Border-bottom:  1px solid #E8D5C4
Height:         72px
Logo position:  Center or Left (pick one, stay consistent)

Nav Links
  Font:         DM Sans 400, 15px
  Color:        #2C3A3A
  Hover color:  #C9A882 (Dune)
  Active:       DM Sans 500, underline in Dune, 2px

CTA in Nav
  Use Primary Button style, slightly smaller: padding 10px 24px

Sticky behavior:
  On scroll > 60px: add subtle shadow — 0 2px 16px rgba(44,58,58,0.08)
```

### Icons

- Use **line icons only** — no filled icons. Recommended library: `Lucide Icons` or `Phosphor Icons` (light weight).
- Icon stroke width: `1.5px`
- Icon color: `#2C3A3A` default, `#C9A882` when active or accented
- Icon size: `20px` inline, `32px` in feature cards, `48px` in hero/illustration zones

### Dividers & Separators

```
Horizontal rule:   1px solid #E8D5C4, width 48px (short, centered — not full width)
Section spacing:   Use padding/margin only — avoid heavy divider lines between sections
Eyebrow accent:    2px wide, 32px long underline in Dune beneath section labels
```

### Badges & Tags

```
Background:   #E8D5C4 (Blush Dust)
Text:         #2C3A3A
Font:         DM Sans 600, 11px, uppercase, letter-spacing: 0.1em
Padding:      4px 12px
Border-radius: 2px

Trust badge (verified, certified)
  Icon:       Sage Mist checkmark
  Text:       DM Sans 500, 13px, color: #2C3A3A
```

### Star Ratings

```
Filled star:    #C9A882 (Dune)
Empty star:     #E8D5C4
Size:           16px
Gap:            3px
```

---

## 6. Imagery & Visual Style

### Photography Direction

- **Skin tones:** Feature a diverse range of skin tones — this is a dermatology platform.
- **Lighting:** Soft, natural, diffused light. No harsh studio flash looks.
- **Backgrounds in photos:** Cream, white, or light beige — never busy or colorful backgrounds.
- **Mood:** Clean, calm, professional. Never stock-photo-cheesy.
- **People:** Dermatologists should look approachable and credentialed (lab coats acceptable but not required). Patients should look relaxed and cared-for.

### Image Treatments

```
Hero image overlay:  linear-gradient(to right, rgba(242,237,230,0.85) 40%, transparent 100%)
  — Used to ensure text legibility over hero photography

Card image ratio:    4:3 (landscape), 1:1 (avatar/portrait)
Border-radius:       6px on all images inside cards
                     0 for full-bleed section images
```

### Illustration Style

- Line illustrations only (as seen in the reference's treatment icons)
- Stroke color: `#2C3A3A` or `#C9A882`
- Style: minimal, anatomical, elegant — not cartoonish
- Format: SVG preferred

---

## 7. Shadows & Depth

Use shadows sparingly. The design is **light and airy** — shadows should suggest elevation, not decoration.

```
Level 0 (flat):     none
Level 1 (card):     0 2px 12px rgba(44, 58, 58, 0.06)
Level 2 (hover):    0 6px 24px rgba(44, 58, 58, 0.10)
Level 3 (modal):    0 16px 48px rgba(44, 58, 58, 0.16)
Level 4 (navbar):   0 2px 16px rgba(44, 58, 58, 0.08)
```

---

## 8. Motion & Animation

Keep motion minimal and purposeful. This is a professional medical-adjacent platform — animations should feel **refined**, not playful.

```
Default transition:   200ms ease
Hover transitions:    color, background, box-shadow, border-color — never transform on text
Button press:         scale(0.98) — subtle, 100ms
Card hover:           translateY(-3px) + shadow level 2 — 200ms ease
Section reveal:       fadeInUp — 30px travel, 400ms ease-out, staggered 80ms per child
                      Trigger: IntersectionObserver at 15% threshold
Reduced motion:       @media (prefers-reduced-motion: reduce) — remove all transforms
                      Keep opacity fades only (200ms max)
```

---

## 9. CSS Custom Properties Reference

Paste this `:root` block into your global stylesheet as the single source of truth.

```css
:root {
  /* Colors */
  --color-dune:         #C9A882;
  --color-canvas:       #F2EDE6;
  --color-parchment:    #FAF7F4;
  --color-slate:        #2C3A3A;
  --color-sage:         #7A9E9F;
  --color-blush:        #E8D5C4;
  --color-stone:        #8A8078;
  --color-white:        #FFFFFF;
  --color-error:        #C0605A;
  --color-success:      #5A8A72;

  /* Typography */
  --font-display:       'Cormorant Garamond', Georgia, serif;
  --font-body:          'DM Sans', system-ui, sans-serif;

  --text-hero:          clamp(44px, 6vw, 72px);
  --text-h1:            clamp(32px, 4vw, 44px);
  --text-h2:            clamp(24px, 3vw, 32px);
  --text-h3:            22px;
  --text-body-lg:       18px;
  --text-body:          16px;
  --text-sm:            14px;
  --text-xs:            12px;
  --text-btn:           14px;

  /* Spacing */
  --space-1:  8px;
  --space-2:  16px;
  --space-3:  24px;
  --space-4:  32px;
  --space-5:  48px;
  --space-6:  64px;
  --space-7:  96px;
  --space-8:  128px;

  /* Layout */
  --max-width:          1200px;
  --max-width-narrow:   720px;
  --max-width-form:     560px;
  --gutter:             24px;

  /* Borders */
  --radius-sm:          2px;
  --radius-md:          4px;
  --radius-lg:          6px;
  --border-light:       1px solid var(--color-blush);

  /* Shadows */
  --shadow-1:  0 2px 12px rgba(44, 58, 58, 0.06);
  --shadow-2:  0 6px 24px rgba(44, 58, 58, 0.10);
  --shadow-3:  0 16px 48px rgba(44, 58, 58, 0.16);
  --shadow-nav: 0 2px 16px rgba(44, 58, 58, 0.08);

  /* Transitions */
  --transition-fast:    100ms ease;
  --transition-base:    200ms ease;
  --transition-slow:    400ms ease-out;
}
```

---

## 10. Responsive Breakpoints

```css
/* Mobile first */
--bp-sm:   480px;   /* Large phones */
--bp-md:   768px;   /* Tablets */
--bp-lg:   1024px;  /* Small desktops / laptops */
--bp-xl:   1280px;  /* Standard desktop */
--bp-2xl:  1536px;  /* Large screens */
```

> Design at `375px` (iPhone SE) and `1280px` (standard laptop) as your two primary breakpoints. Everything else will fall between naturally.

---

## 11. Accessibility Minimums

- All text/background combinations must meet **WCAG AA** (4.5:1 for body, 3:1 for large text).
- Body text `#2C3A3A` on `#FAF7F4` → **contrast ratio: ~9.8:1** ✅
- Dune `#C9A882` on white for text: **fails AA** — do not use Dune as a text color on white backgrounds. Use it only for icons, borders, and decorative elements, or as a background with dark text.
- Focus styles: `outline: 2px solid var(--color-dune); outline-offset: 3px;` — never `outline: none`.

---

## 12. Do's and Don'ts

### Do
- Use generous whitespace — the page should feel like a premium clinic waiting room, not a busy marketplace.
- Let Cormorant Garamond breathe in headlines — large, light, spacious.
- Keep the Dune accent rare and meaningful.
- Use photography warmly — skin, hands, clinical environments.
- Maintain consistent 8px grid alignment across all elements.

### Don't
- Don't use drop shadows on text.
- Don't use gradients except in the hero image overlay (defined above).
- Don't mix more than 2 accent colors in one section.
- Don't use border-radius above `6px` on any UI component.
- Don't use Cormorant Garamond for body text, captions, or labels — it's for display only.
- Don't add decorative elements (flourishes, ornamental lines) — the warmth comes from color and space, not decoration.
- Don't use pure black or pure white anywhere.

---

*End of Design Blueprint — v1.0*
*This document covers aesthetics only. Section structure and content are defined in a separate reference.*
