Fixed top navigation bar for DermaStart website pages. White bg, Blush border-bottom, 72px height. Adds shadow-nav on scroll > 60px.

```jsx
<Navbar currentPage="Home" ctaHref="#book" />
<Navbar currentPage="Packages" ctaLabel="Get a Quote" ctaHref="#book" />
```

Notable props:
- `currentPage` — matches the `label` in `links` to set active state (DM Sans 500, Dune underline)
- `links` — defaults to the full DermaStart nav; override to subset or customise
- `ctaLabel` / `ctaHref` — primary button in top-right corner
- Scrolled shadow is wired automatically via `window.scroll` listener
- On mobile (<768px) links are hidden — add a hamburger separately if needed
