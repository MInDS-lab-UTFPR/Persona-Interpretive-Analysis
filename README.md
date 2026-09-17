# Persona Prompting in Multimodal Urban Perception

Project website for **“Persona Prompting in Multimodal Urban Perception:
Descriptive Convergence and Interpretive Variation,”** accepted at the
[Workshop on Pluralistic AI & NLP: Diversity-aware, Sociotechnical, Responsible
Alignment (PANDORA 2026)](https://pandora-workshop.github.io/).

- Website: <https://neemiasbsilva.github.io/Persona-Interpretive-Analysis-Portfolio/>
- Paper: <https://arxiv.org/abs/2605.29064>
- PDF: <https://arxiv.org/pdf/2605.29064>
- DOI: <https://doi.org/10.48550/arXiv.2605.29064>
- Code: <https://github.com/MInDS-lab-UTFPR/Persona-Interpretive-Analysis> ([mirror](https://github.com/neemiasbsilva/Persona-Interpretive-Analysis))
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
@inproceedings{silva2026persona,
      title={Persona Prompting in Multimodal Urban Perception: Descriptive Convergence and Interpretive Variation},
      author={Neemias Buceli da Silva and Matt Ratto and Myriam Delgado and Rodrigo Minetto and Daniel Silver and Thiago H. Silva},
      booktitle={EMNLP26 Workshop on Pluralistic AI {\&} NLP: Diversity-aware, Sociotechnical, Responsible Alignment (PANDORA)},
      year={2026},
}
```
