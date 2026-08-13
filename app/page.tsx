import type { Metadata } from "next";
import { CitationBlock } from "./InteractivePanels";

/* Plain image elements keep public assets path-relative for GitHub Pages. */
/* eslint-disable @next/next/no-img-element */
/* Scrollable data regions are keyboard-focusable on narrow viewports. */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

export const dynamic = "force-static";

const siteUrl =
  "https://neemiasbsilva.github.io/Persona-Interpretive-Analysis-Portfolio/";
const paperUrl = "https://arxiv.org/abs/2605.29064";
const pdfUrl = "https://arxiv.org/pdf/2605.29064";
const doiUrl = "https://doi.org/10.48550/arXiv.2605.29064";
const fullTitle =
  "Persona Prompting in Multimodal Urban Perception: Descriptive Convergence and Interpretive Variation";

export const metadata: Metadata = {
  title: fullTitle,
  description:
    "Across two MLLMs and nearly 120,000 persona-conditioned annotations, persona prompting affects interpretive framing more strongly than descriptive grounding.",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: fullTitle,
    description:
      "The same city. Similar descriptions. Different interpretive lenses.",
    url: siteUrl,
    type: "article",
    images: [
      {
        url: `${siteUrl}og.png`,
        width: 1200,
        height: 630,
        alt: "Scientific overview of persona-conditioned multimodal urban perception, showing convergent descriptive grounding and varied interpretive framing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description:
      "Persona prompting affects interpretive framing more strongly than descriptive grounding.",
    images: [`${siteUrl}og.png`],
  },
  other: {
    citation_title: fullTitle,
    citation_author: [
      "Neemias da Silva",
      "Matt Ratto",
      "Myriam Delgado",
      "Rodrigo Minetto",
      "Daniel Silver",
      "Thiago H Silva",
    ],
    citation_date: "2026/05/27",
    citation_online_date: "2026/08/07",
    citation_doi: "10.48550/arXiv.2605.29064",
    citation_pdf_url: pdfUrl,
    citation_arxiv_id: "2605.29064",
  },
};

const authors = [
  ["Neemias da Silva", "1,2"],
  ["Matt Ratto", "1"],
  ["Myriam Delgado", "2"],
  ["Rodrigo Minetto", "2"],
  ["Daniel Silver", "1"],
  ["Thiago H Silva", "1,2"],
] as const;

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: fullTitle,
    author: authors.map(([name]) => ({ "@type": "Person", name })),
    datePublished: "2026-05-27",
    dateModified: "2026-08-07",
    identifier: [
      "arXiv:2605.29064",
      "https://doi.org/10.48550/arXiv.2605.29064",
    ],
    url: siteUrl,
    sameAs: [paperUrl, doiUrl],
    isAccessibleForFree: true,
    keywords: [
      "persona prompting",
      "multimodal large language models",
      "urban perception",
      "interpretability",
      "synthetic personas",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <a className="skip-link" href="#main-content">Skip to main content</a>

      <nav className="academic-nav" aria-label="Page navigation">
        <a className="nav-title" href="#top">
          Persona Prompting in Multimodal Urban Perception
        </a>
        <div className="nav-sections">
          <a href="#abstract">Abstract</a>
          <a href="#results">Results</a>
          <a href="#method">Method</a>
          <a href="#cite">BibTeX</a>
        </div>
      </nav>

      <header className="paper-hero" id="top">
        <div className="content-narrow">
          <p className="paper-status">arXiv preprint · 2605.29064v2</p>
          <h1>
            Persona Prompting in Multimodal Urban Perception:
            <span> Descriptive Convergence and Interpretive Variation</span>
          </h1>
          <p className="paper-takeaway">
            The same city scene. Similar descriptions. Different interpretations.
          </p>

          <div className="paper-authors" aria-label="Authors">
            {authors.map(([name, affiliation], index) => (
              <span key={name}>
                {index === 0 ? (
                  <a href="mailto:neemias.buceli@mail.utoronto.ca">{name}</a>
                ) : (
                  name
                )}
                <sup>{affiliation}</sup>
              </span>
            ))}
          </div>
          <div className="paper-affiliations">
            <span><sup>1</sup> University of Toronto, Canada</span>
            <span><sup>2</sup> Federal University of Technology – Parana (UTFPR), Brazil</span>
          </div>

          <div className="paper-actions" aria-label="Paper resources">
            <a href={pdfUrl} target="_blank" rel="noreferrer">
              <b>PDF</b><span>Paper</span>
            </a>
            <a href={paperUrl} target="_blank" rel="noreferrer">
              <b>arXiv</b><span>Abstract</span>
            </a>
            <a href={doiUrl} target="_blank" rel="noreferrer">
              <b>DOI</b><span>Record</span>
            </a>
            <a href="#cite">
              <b>BIB</b><span>Citation</span>
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="paper-section overview-section" aria-labelledby="overview-title">
          <div className="content-wide">
            <h2 id="overview-title" className="visually-hidden">Overview</h2>
            <figure className="paper-figure overview-figure">
              <img
                src="paper/figure-1-functional-framework.svg"
                width="1900"
                height="1124"
                alt="Panel A moves from an urban scene and persona profile through an MLLM to captions, perception tags, and justifications with increasing interpretive abstraction. Panel B applies three personas to the same brick campus scene: captions describe similar visible content while tags and justifications differ in emphasis."
              />
              <figcaption>
                <strong>Overview.</strong> Persona-conditioned outputs are separated
                into descriptive grounding, an intermediate semantic layer, and
                interpretive framing. Captions converge on visible content, while
                perception tags and justifications vary in emphasis and evaluation.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="paper-section abstract-section" id="abstract">
          <div className="content-reading">
            <h2>Abstract</h2>
            <p>
              This study examines how persona prompting shapes language generated
              by two multimodal large language models in urban perception, a setting
              for examining subjective interpretations of shared visual evidence. We
              organize outputs into three functional levels: descriptive grounding
              (captions), intermediate semantic layer (perception tags), and
              interpretive framing (justifications). Using approximately 60,000
              persona-conditioned annotations per model from Qwen3-VL-8B and
              Gemma-4-E4B-it, we find that captions converge strongly across persona
              profiles and show only small attribute-associated differences.
              Justifications vary substantially more: economic status produces the
              largest difference in both models, with political orientation and
              personality also prominent. Paired image-level comparisons confirm
              larger justification than caption differences for these three
              attributes. For perception tags, personas sharing the same attribute
              level produce more similar tag sets than personas with different
              attribute levels, with the largest separation observed for economic
              status. Exploratory topic analysis further reveals persona-specific
              evaluative emphasis. Across models, profile-pair similarity patterns
              are strongly correlated for all three output types, although agreement
              is lowest for justifications. Overall, persona prompting affects
              interpretive framing more strongly than descriptive grounding.
            </p>
          </div>
        </section>

        <section className="paper-section results-section" id="results">
          <div className="content-wide">
            <div className="section-intro">
              <h2>Key Results</h2>
              <p>
                Both models show the same qualitative ordering: persona-profile
                separation is weakest for captions and strongest for justifications.
                DSI measures relative diagonal-over-off-diagonal separation in each
                24 × 24 profile-similarity matrix.
              </p>
            </div>

            <div
              className="model-comparison"
              role="region"
              aria-label="Model result comparison"
              tabIndex={0}
            >
              <table>
                <caption>Diagonal Strength Index (DSI) by model and output type</caption>
                <thead>
                  <tr>
                    <th scope="col">Output level</th>
                    <th scope="col">Qwen3-VL-8B</th>
                    <th scope="col">Gemma-4-E4B-it</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><span>Descriptive</span> Captions</th>
                    <td>2.3%</td>
                    <td>3.7%</td>
                  </tr>
                  <tr>
                    <th scope="row"><span>Intermediate</span> Perception tags</th>
                    <td>11.7%</td>
                    <td>25.1%</td>
                  </tr>
                  <tr className="highlight-row">
                    <th scope="row"><span>Interpretive</span> Justifications</th>
                    <td>14.9%</td>
                    <td>30.0%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ul className="result-list">
              <li>
                <strong>Descriptions converge.</strong> Mean caption similarities
                remain approximately 0.87–0.91 across persona groups.
              </li>
              <li>
                <strong>Economic status is the strongest dimension.</strong> Its
                mean within-minus-cross justification cosine-similarity difference is
                +0.0617 for Qwen3-VL and +0.1015 for Gemma4.
              </li>
              <li>
                <strong>Cross-model consistency is high.</strong> Profile-pair similarity
                matrices correlate at Pearson <i>r</i> = 0.80–0.89.
              </li>
            </ul>

            <figure className="paper-figure results-figure">
              <img
                src="paper/persona-effect-summary.svg"
                width="1474"
                height="571"
                loading="lazy"
                alt="Two-panel dot plot comparing within-minus-cross similarity differences by persona dimension and output type for Qwen3-VL and Gemma4"
              />
              <figcaption>
                <strong>Persona effect by dimension and modality.</strong> Points are
                within-minus-cross means; bars are 95% BCa bootstrap confidence intervals
                over 50 images. Captions and justifications use cosine similarity, while
                perception tags use Jaccard similarity and are not directly comparable.
                The gray ±0.01 band is an exploratory caption-effect reference, not an
                equivalence threshold. In both models, justification differences exceed
                caption differences for economic status, political orientation, and
                personality.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="paper-section method-section" id="method">
          <div className="content-wide">
            <h2>Study at a Glance</h2>
            <div className="study-numbers">
              <div><strong>119,707</strong><span>persona-conditioned annotations</span></div>
              <div><strong>24</strong><span>persona profiles</span></div>
              <div><strong>50</strong><span>urban-scene images</span></div>
              <div><strong>2 MLLMs</strong><span>matched protocol</span></div>
            </div>
            <p className="method-summary">
              Each model used the same images, prompts, persona profiles, and
              generation protocol. The 24 profiles combine gender (2), economic
              status (2), political orientation (2), and personality (3). For each
              image and persona dimension, the analysis compares annotations from
              agents sharing an attribute level with annotations from agents at
              different levels. Captions and justifications are compared with
              sentence-embedding cosine similarity; perception tags use exact-set
              Jaccard similarity.
            </p>
          </div>
        </section>

        <section className="paper-section ethics-section" aria-labelledby="ethics-title">
          <div className="content-reading ethics-note">
            <h2 id="ethics-title">Responsible Interpretation</h2>
            <p>
              <strong>These results describe model behavior under persona prompts;
              they do not estimate human demographic differences.</strong> The
              profiles are controlled prompting conditions rather than complete
              identities, and synthetic personas may reproduce biased or
              stereotypical associations. Human correspondence would require
              demographically matched human annotations.
            </p>
          </div>
        </section>

        <section className="paper-section citation-section" id="cite">
          <div className="content-wide">
            <div className="section-intro">
              <h2>Citation</h2>
              <p>
                If this work informs your research, please cite the arXiv preprint.
              </p>
            </div>
            <CitationBlock />
          </div>
        </section>
      </main>

      <footer className="academic-footer">
        <div className="content-wide">
          <p>
            Persona Prompting in Multimodal Urban Perception · arXiv:2605.29064v2
          </p>
          <p>
            Correspondence: <a href="mailto:neemias.buceli@mail.utoronto.ca">neemias.buceli@mail.utoronto.ca</a>
          </p>
        </div>
      </footer>
    </>
  );
}
