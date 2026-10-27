"use client";

import { useState } from "react";

/* The ACL Anthology's own BibTeX export, as served in citation.bib. */
const bibtex = `@inproceedings{da-silva-etal-2026-persona,
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
