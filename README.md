# Persona Prompting in Multimodal Urban Perception

Project website for **“Persona Prompting in Multimodal Urban Perception:
Descriptive Convergence and Interpretive Variation,”** accepted at the
[Workshop on Pluralistic AI & NLP: Diversity-aware, Sociotechnical, Responsible
Alignment (PANDORA 2026)](https://pandora-workshop.github.io/).

- Website: <https://neemiasbsilva.github.io/Persona-Interpretive-Analysis-Portfolio/>
- Paper: <https://aclanthology.org/2026.pandora-1.17/>
- PDF: <https://aclanthology.org/2026.pandora-1.17.pdf>
- arXiv: <https://arxiv.org/abs/2605.29064>
- Code: <https://github.com/neemiasbsilva/Persona-Interpretive-Analysis>
- Dataset: <https://huggingface.co/datasets/MInDS-lab-UTFPR/UrbanPersona-120K-Interpretive>

## Local development

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Open the local URL printed by vinext. A normal `npm run build` keeps the
project's vinext/Sites configuration and writes its production output to
`dist/`.

## GitHub Pages build

The Pages-only configuration is enabled by `GITHUB_PAGES=true`. It creates a
static export with GitHub Pages asset URLs in `dist/client/`:

```bash
GITHUB_PAGES=true npm run build
```

Deployment is automated by [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).
In the GitHub repository, select **Settings → Pages → Source → GitHub Actions**,
then push to `main` or run the workflow manually.

If this directory does not yet have the remote configured:

```bash
git remote add origin git@github.com:neemiasbsilva/Persona-Interpretive-Analysis-Portfolio.git
git branch -M main
git push -u origin main
```

## Citation

Ready-to-import citation files are available as
[`public/citation.bib`](public/citation.bib),
[`public/citation.ris`](public/citation.ris), and [`CITATION.cff`](CITATION.cff).

```bibtex
@inproceedings{da-silva-etal-2026-persona,
    title = "Persona Prompting in Multimodal Urban Perception: Descriptive Convergence and Interpretive Variation",
    author = "da Silva, Neemias B  and
      Ratto, Matt  and
      Delgado, Myriam  and
      Minetto, Rodrigo  and
      Silver, Daniel  and
      Silva, Thiago H.",
    editor = "Xu, Shanshan  and
      T.Y.S.S., Santosh  and
      Kurniawan, Kemal  and
      Peng, Siyao  and
      Wallbridge, Sarenne  and
      Koto, Fajri  and
      Dziri, Nouha  and
      Plank, Barbara",
    booktitle = "Proceedings of the First Workshop on Pluralistic {AI} {NLP}: Diversity-aware, Sociotechnical, Responsible Alignment ({PANDORA} 2026)",
    month = oct,
    year = "2026",
    address = "Budapest, Hungary",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2026.pandora-1.17/",
    pages = "301--318",
    ISBN = "979-8-89176-484-2"
}
```
