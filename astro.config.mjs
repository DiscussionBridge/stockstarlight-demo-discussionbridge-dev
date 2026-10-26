import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://stockstarlight.demo.discussionbridge.dev",
  integrations: [
    starlight({
      title: "Stock Starlight Control",
      head: [
        { tag: "meta", attrs: { property: "og:image", content: "https://demo.discussionbridge.dev/og.png" } },
        { tag: "meta", attrs: { property: "og:image:width", content: "1200" } },
        { tag: "meta", attrs: { property: "og:image:height", content: "630" } },
        { tag: "meta", attrs: { property: "og:image:type", content: "image/png" } },
        { tag: "meta", attrs: { property: "og:image:alt", content: "DiscussionBridge Demos — See the Bridge. Then cross it." } },
        { tag: "meta", attrs: { name: "twitter:card", content: "summary_large_image" } },
        { tag: "meta", attrs: { name: "twitter:image", content: "https://demo.discussionbridge.dev/og.png" } },
        { tag: "meta", attrs: { name: "twitter:image:alt", content: "DiscussionBridge Demos — See the Bridge. Then cross it." } },
      ],
      components: {
        Head: "./src/components/Head.astro",
        SocialIcons: "./src/components/SocialIcons.astro",
      },
      social: [
        { icon: "github", label: "DiscussionBridge on GitHub", href: "https://github.com/DiscussionBridge" },
        { icon: "discourse", label: "DiscussionBridge community forum", href: "https://forum.discussionbridge.dev/" },
        { icon: "blueSky", label: "DiscussionBridge on Bluesky", href: "https://bsky.app/profile/discussionbridge.bsky.social" },
        { icon: "discord", label: "DiscussionBridge on Discord", href: "https://discord.gg/Y7SRQAxKq" },
        { icon: "mastodon", label: "DiscussionBridge on Mastodon", href: "https://mastodon.social/@DiscussionBridge" },
        { icon: "reddit", label: "DiscussionBridge on Reddit", href: "https://www.reddit.com/r/DiscussionBridge/" },
        { icon: "youtube", label: "DiscussionBridge on YouTube", href: "https://www.youtube.com/@DiscussionBridge" },
      ],
      sidebar: [
        {
          label: "Stock Starlight",
          items: [{ label: "Home", slug: "index" }],
        },
        {
          label: "DiscussionBridge",
          items: [
            { label: "Demo hub", link: "https://demo.discussionbridge.dev/" },
            { label: "DiscussionBridge.dev", link: "https://discussionbridge.dev/" },
          ],
        },
      ],
    }),
  ],
});
