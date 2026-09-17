# Social preview artwork

`og-social-card.svg` is the editable 1200 × 630 source for the paper's Open Graph preview. It composes exact, deterministic typography over `og-scientific-flow.png`, a supporting scientific illustration generated with OpenAI ImageGen.

Render the published PNG from this directory with:

```sh
rsvg-convert -w 1200 -h 630 -o ../public/og.png og-social-card.svg
```

The rendered asset is intentionally committed because GitHub Pages and social crawlers consume `public/og.png` directly.

## Favicon

`favicon.svg` is the source for the site icon: a P for the PANDORA workshop on a tile that turns from EMNLP 2026 navy to red, drawn on a 32-unit grid so it stays crisp at 16 × 16. Render the published PNG from this directory with:

```sh
rsvg-convert -w 512 -h 512 -o ../public/favicon.png favicon.svg
```
