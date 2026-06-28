---
name: dermastart-design
description: Use this skill to generate well-branded interfaces and assets for DermaStart — India's turnkey clinic setup platform for dermatologists. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping or production work.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick Reference

**Fonts:** Cormorant Garamond (display — headlines only) + DM Sans (body/UI). Both on Google Fonts.
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;0,600;1,300&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
```

**Core Colors:**
- `#C9A882` Dune — brand accent, CTAs (sparingly)
- `#F2EDE6` Warm Canvas — page background
- `#FAF7F4` Parchment — card background
- `#2C3A3A` Deep Slate — all text, headings
- `#7A9E9F` Sage Mist — trust/verified elements only
- `#E8D5C4` Blush Dust — borders, dividers
- `#8A8078` Stone — body copy, captions

**Absolute Rules:**
- No pure black (`#000`). No pure white page backgrounds.
- No pill buttons. `border-radius` max `6px`.
- No filled icons — Lucide line icons only, stroke `1.5`.
- No emoji, no decorative flourishes, no gradients (except hero image overlay).
- Dune as text color FAILS WCAG AA on white — don't use it for body text.
- Cormorant Garamond display-only — never for body, labels, or captions.
- Buttons: ALL CAPS, `letter-spacing: 0.06em`, `border-radius: 2px`.
- Italic `em` in Cormorant headlines always in Dune color.

**Source Repo:** https://github.com/jahnvikumar/DermaStart
