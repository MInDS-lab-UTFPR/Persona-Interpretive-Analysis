# Social preview artwork

`og-social-card.svg` is the editable 1200 × 630 source for the paper's Open Graph preview. It stacks the EMNLP 2026 mark (redrawn as a vector from the conference logo, the same path the page's hero uses) beside the venue label, the paper's title in exact, deterministic type, and `og-scientific-flow.png`, a scientific illustration generated with OpenAI ImageGen that the card crops to the diagram alone.

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
