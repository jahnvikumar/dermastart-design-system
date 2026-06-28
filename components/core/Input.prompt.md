Controlled text input with DermaStart brand styling — Blush border at rest, Dune focus ring, Error Rose on validation failure.

```jsx
<Input label="Full name" id="name" placeholder="Dr. Priya Sharma" required />
<Input label="Email" id="email" type="email" placeholder="you@clinic.in" helper="We'll send your consultation details here" />
<Input label="Phone" id="phone" type="tel" error="Please enter a valid mobile number" />
<Input label="City" id="city" disabled value="Mumbai" />
```

Notable props:
- `error` — overrides `helper`, turns border Error Rose, shows message below
- `required` — adds a red asterisk after the label
- Focus state: Dune border (1.5px) + 3px Dune glow ring (`rgba(201,168,130,0.15)`)
- Placeholder: DM Sans 400, Stone color (#8A8078)
- Never use for textarea — build a separate Textarea component
