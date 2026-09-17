"use client";

import { useState } from "react";

/* Template literal: the BibTeX escape \& must be written \\& to survive. */
const bibtex = `@inproceedings{silva2026persona,
  title={Persona Prompting in Multimodal Urban Perception: Descriptive Convergence and Interpretive Variation},
  author={Neemias Buceli da Silva and Matt Ratto and Myriam Delgado and Rodrigo Minetto and Daniel Silver and Thiago H. Silva},
  booktitle={EMNLP26 Workshop on Pluralistic AI {\\&} NLP: Diversity-aware, Sociotechnical, Responsible Alignment (PANDORA)},
  year={2026},
}`;

export function CitationBlock() {
  const [copied, setCopied] = useState(false);

  async function copyCitation() {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="citation-block">
      <div className="citation-toolbar">
        <span>BibTeX</span>
        <div>
          <a href="citation.bib" download>
            Download
          </a>
          <button type="button" onClick={copyCitation}>
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
      <pre aria-label="BibTeX citation">
        <code>{bibtex}</code>
      </pre>
      <span className="sr-only" aria-live="polite">
        {copied ? "BibTeX citation copied to clipboard." : ""}
      </span>
    </div>
  );
}
