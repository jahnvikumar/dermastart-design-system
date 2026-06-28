Container component for DermaStart's card surfaces — service cards, feature cards, stat cards, and inverse (dark section) cards.

```jsx
<Card variant="standard" href="#service">
  <h3>Space & Interior Design</h3>
  <p>Clinic layouts built for patient flow and your aesthetic.</p>
</Card>

<Card variant="feature" padding="sm">
  <svg>…icon…</svg>
  <h3>Compliance first</h3>
  <p>We never take shortcuts on licensing.</p>
</Card>

<Card variant="stat">
  <span style={{ fontFamily: 'var(--font-display)', fontSize: 48, color: 'var(--color-dune)' }}>340+</span>
  <span>Clinics launched</span>
</Card>
```

Notable variants:
- `"standard"` — Parchment bg, Blush border, shadow-1 rest, hover lifts with Dune left-border accent
- `"feature"` — White bg, no border, hover left-border in Dune
- `"stat"` — Parchment bg, centered, no hover — for KPI display
- `"inverse"` — For dark Slate backgrounds (testimonial section)
