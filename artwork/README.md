# Social preview artwork

`og-social-card.svg` is the editable 1200 × 630 source for the paper's Open Graph preview. It composes exact, deterministic typography over `og-scientific-flow.png`, a supporting scientific illustration generated with OpenAI ImageGen.

Render the published PNG from this directory with:

```sh
rsvg-convert -w 1200 -h 630 -o ../public/og.png og-social-card.svg
```

The rendered asset is intentionally committed because GitHub Pages and social crawlers consume `public/og.png` directly.
