Small label used to convey status, category, or trust signals on DermaStart surfaces.

```jsx
<Badge>Most Popular</Badge>
<Badge variant="trust">Verified Vendor</Badge>
<Badge variant="featured">Most Popular</Badge>
<Badge variant="error">Invalid email</Badge>
<Badge variant="success">Confirmed</Badge>
```

Notable variants:
- `"default"` — blush bg, slate text, uppercase tracked. Use for categories and filters.
- `"trust"` — auto-prepends a Sage Mist checkmark SVG. Use ONLY for verified/credential claims.
- `"featured"` — Dune fill, white text, slight pill radius. Use for "Most Popular" package callouts.
- `"error"` / `"success"` — semantic status. Use for form feedback and confirmation states.
