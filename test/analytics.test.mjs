import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("the stock Starlight head preserves native metadata and adds DiscussionBridge analytics", async () => {
  const config = await read("astro.config.mjs");
  const head = await read("src/components/Head.astro");
  const analytics = await read("src/components/GoogleAnalytics.astro");

  assert.match(config, /Head: "\.\/src\/components\/Head\.astro"/);
  assert.match(config, /https:\/\/demo\.discussionbridge\.dev\/og\.png/);
  assert.match(config, /summary_large_image/);
  assert.match(head, /@astrojs\/starlight\/components\/Head\.astro/);
  assert.match(head, /<StarlightHead \/>/);
  assert.match(head, /<GoogleAnalytics \/>/);
  assert.match(analytics, /G-K9SYR7QENF/);
  assert.match(analytics, /googletagmanager\.com\/gtag\/js/);
  assert.match(analytics, /gtag\("config", measurementId\)/);
});
