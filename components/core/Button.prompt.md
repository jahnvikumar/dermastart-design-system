Renders a DermaStart brand button in one of three variants — primary (Dune fill), secondary (outlined slate), or ghost (text link in Dune).

```jsx
<Button variant="primary" href="#book">Book Free Consultation</Button>
<Button variant="secondary" href="#services">See How It Works</Button>
<Button variant="ghost" onClick={handleLearnMore}>Learn more →</Button>
<Button variant="primary" size="sm" disabled>Unavailable</Button>
```

Notable variants / props:
- `variant`: `"primary"` (filled Dune), `"secondary"` (outlined Deep Slate), `"ghost"` (text-only Dune)
- `size`: `"sm"` | `"md"` (default) | `"lg"`
- `fullWidth`: stretches to 100% of container — use inside form layouts
- `href`: renders as `<a>` instead of `<button>`, useful for nav CTAs
- Button text is always UPPERCASE with 0.06em letter-spacing — do not override
- border-radius is always 2px — never round/pill
