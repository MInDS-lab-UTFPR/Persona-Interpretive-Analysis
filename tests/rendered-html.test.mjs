import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the academic paper page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Persona Prompting in Multimodal Urban Perception: Descriptive Convergence and Interpretive Variation<\/title>/i,
  );
  assert.match(html, /Descriptive Convergence and Interpretive Variation/);
  assert.match(html, /Neemias B da Silva/);
  assert.match(html, /Qwen3-VL-8B/);
  assert.match(html, /Gemma-4-E4B-it/);
  assert.match(html, /Federal University of Technology – Parana \(UTFPR\), Brazil/);
  assert.doesNotMatch(html, /Universidade Tecnológica Federal do Paraná/);
  assert.match(html, /119,707/);
  assert.match(html, /Responsible Interpretation/);
  assert.match(html, /citation_author/);
  assert.match(html, /citation_date/);
  assert.match(html, /citation_online_date/);
  assert.match(html, /citation_doi/);
  assert.match(html, /citation_conference_title/);
  /* The lockup splits the venue across spans; the spaces between them are
     what keep a screen reader from announcing "EMNLP 2026Workshop". */
  const venueLabel = html
    .match(/<p class="paper-status">(.*?)<\/p>/s)[1]
    .replace(/<[^>]+>/g, "");
  assert.equal(venueLabel, "EMNLP 2026 Workshop PANDORA");
  assert.match(html, /href="https:\/\/pandora-workshop\.github\.io\/"/);
  assert.doesNotMatch(html, /arXiv preprint/);
  assert.doesNotMatch(html, /co-located/i);
  /* The BibTeX \& escape lives in a template literal; a single backslash
     would be dropped silently. */
  assert.match(html, /Pluralistic AI \{\\&amp;\} NLP/);
  assert.match(html, /application\/ld\+json/);
  assert.match(
    html,
    /Scientific overview of persona-conditioned multimodal urban perception/,
  );
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Persona Lens/);
});

test("exposes the search-engine and scholar indexing surface", async () => {
  const html = await (await render()).text();

  /* Rich result previews: without these Google truncates snippets and
     shrinks the social image to a thumbnail. */
  assert.match(html, /max-image-preview:large/);
  assert.match(html, /max-snippet:-1/);

  /* Google Scholar reads citation_* to link the page to the paper record. */
  assert.match(html, /citation_abstract_html_url/);
  assert.match(html, /citation_keywords/);

  /* One self-referencing canonical, so Pages and the bare repo URL do not
     compete as duplicates. */
  const canonicals = html.match(/rel="canonical"/g) ?? [];
  assert.equal(canonicals.length, 1);
  assert.match(
    html,
    /rel="canonical" href="https:\/\/neemiasbsilva\.github\.io\/Persona-Interpretive-Analysis-Portfolio\/"/,
  );

  const jsonLd = JSON.parse(
    html.match(
      /<script type="application\/ld\+json">(.*?)<\/script>/s,
    )[1],
  );
  assert.equal(jsonLd["@type"], "ScholarlyArticle");
  assert.match(jsonLd.abstract, /^This study examines how persona prompting/);
  assert.equal(jsonLd.mainEntityOfPage["@id"], jsonLd.url);
  assert.equal(jsonLd.author.length, 6);
  assert.equal(jsonLd.author[0].affiliation.length, 2);

  /* The indexed abstract must be the abstract on the page. */
  const rendered = html
    .match(/<h2>Abstract<\/h2><p>(.*?)<\/p>/s)[1]
    .replace(/<[^>]+>/g, "")
    .replace(/&#x27;/g, "'")
    .replace(/&amp;/g, "&");
  assert.equal(rendered, jsonLd.abstract);
});

test("sitemap and robots point crawlers at the canonical URL", async () => {
  const [sitemap, robots] = await Promise.all([
    readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8"),
    readFile(new URL("../public/robots.txt", import.meta.url), "utf8"),
  ]);
  const canonical =
    "https://neemiasbsilva.github.io/Persona-Interpretive-Analysis-Portfolio/";

  assert.match(sitemap, new RegExp(`<loc>${canonical}</loc>`));
  assert.match(sitemap, /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/);
  assert.match(robots, /Allow: \//);
  assert.match(robots, new RegExp(`Sitemap: ${canonical}sitemap\\.xml`));
  assert.doesNotMatch(robots, /Disallow: \/\s*$/m);
});

test("ships publication and citation assets", async () => {
  const [page, layout, packageJson, bibtex, citation, ogImage, ogSource] =
    await Promise.all([
      readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
      readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
      readFile(new URL("../package.json", import.meta.url), "utf8"),
      readFile(new URL("../public/citation.bib", import.meta.url), "utf8"),
      readFile(new URL("../CITATION.cff", import.meta.url), "utf8"),
      readFile(new URL("../public/og.png", import.meta.url)),
      readFile(new URL("../artwork/og-social-card.svg", import.meta.url), "utf8"),
    ]);

  assert.match(page, /export const dynamic = "force-static"/);
  assert.match(page, /paper\/figure-1-functional-framework\.svg/);
  assert.match(page, /paper\/persona-effect-summary\.svg/);
  assert.doesNotMatch(page, /figure-image-link|Open full-size figure/);
  assert.doesNotMatch(page, /paper\/figure-1-functional-framework\.png/);
  assert.match(page, /ScholarlyArticle/);
  assert.match(layout, /Persona Prompting in Multimodal Urban Perception/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(bibtex, /@inproceedings\{silva2026persona,/);
  assert.match(
    bibtex,
    /booktitle=\{EMNLP26 Workshop on Pluralistic AI \{\\&\} NLP: .*Alignment \(PANDORA\)\}/,
  );
  assert.match(citation, /doi: "10\.48550\/arXiv\.2605\.29064"/);
  assert.equal(ogImage.subarray(1, 4).toString("ascii"), "PNG");
  assert.equal(ogImage.readUInt32BE(16), 1200);
  assert.equal(ogImage.readUInt32BE(20), 630);
  assert.match(ogSource, /Same scene\. Same description\./);
  assert.match(ogSource, /119,707 ANNOTATIONS/);
  assert.match(ogSource, />EMNLP 2026 WORKSHOP PANDORA</);

  /* The favicon is drawn in artwork/favicon.svg in the venue's navy and red
     and served as a 512 x 512 render. */
  const [favicon, faviconSource] = await Promise.all([
    readFile(new URL("../public/favicon.png", import.meta.url)),
    readFile(new URL("../artwork/favicon.svg", import.meta.url), "utf8"),
  ]);
  assert.equal(favicon.subarray(1, 4).toString("ascii"), "PNG");
  assert.equal(favicon.readUInt32BE(16), 512);
  assert.equal(favicon.readUInt32BE(20), 512);
  assert.match(faviconSource, /fill="#2c3246"/);
  assert.match(faviconSource, /fill="#b8212c"/);
  await Promise.all([
    access(new URL("../public/og.png", import.meta.url)),
    access(new URL("../public/favicon.png", import.meta.url)),
    access(new URL("../public/paper/figure-1-functional-framework.svg", import.meta.url)),
    access(new URL("../public/paper/persona-effect-summary.svg", import.meta.url)),
  ]);
});
