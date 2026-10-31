import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("the stock Starlight head preserves native metadata while the Starlight plugin owns analytics", async () => {
  const config = await read("astro.config.mjs");
  const head = await read("src/components/Head.astro");
  const analytics = await read("analytics.config.mjs");

  assert.match(config, /plugins: \[starlightAnalytics\(analyticsOptions\)\]/);
  assert.match(config, /Head: "\.\/src\/components\/Head\.astro"/);
  assert.match(config, /https:\/\/demo\.discussionbridge\.dev\/og\.png/);
  assert.match(config, /summary_large_image/);
  assert.match(head, /@astrojs\/starlight\/components\/Head\.astro/);
  assert.match(head, /<StarlightHead \/>/);
  assert.doesNotMatch(head, /GoogleAnalytics|googletagmanager|gtag\(/);
  assert.match(analytics, /G-K9SYR7QENF/);
  assert.match(analytics, /siteId: '5'/);
  assert.match(analytics, /HFEVBRGI/);
  assert.match(analytics, /pa-20ZdU_sdR2mFxktHt8mlO/);
  assert.match(analytics, /082e80a9-2fab-4df6-b4f0-c9c09ef9ab5c/);
});
