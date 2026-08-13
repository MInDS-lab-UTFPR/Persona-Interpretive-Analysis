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
  assert.match(html, /Neemias da Silva/);
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
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Persona Lens/);
});

test("ships publication and citation assets", async () => {
  const [page, layout, packageJson, bibtex, citation] =
    await Promise.all([
      readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
      readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
      readFile(new URL("../package.json", import.meta.url), "utf8"),
      readFile(new URL("../public/citation.bib", import.meta.url), "utf8"),
      readFile(new URL("../CITATION.cff", import.meta.url), "utf8"),
    ]);

  assert.match(page, /export const dynamic = "force-static"/);
  assert.match(page, /paper\/persona-effect-summary\.svg/);
  assert.match(page, /ScholarlyArticle/);
  assert.match(layout, /Persona Prompting in Multimodal Urban Perception/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(bibtex, /eprint=\{2605\.29064\}/);
  assert.match(citation, /doi: "10\.48550\/arXiv\.2605\.29064"/);
  await Promise.all([
    access(new URL("../public/og.png", import.meta.url)),
    access(new URL("../public/favicon.png", import.meta.url)),
    access(new URL("../public/paper/persona-effect-summary.svg", import.meta.url)),
  ]);
});
