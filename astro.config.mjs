import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://stockstarlight.demo.discussionbridge.dev",
  integrations: [
    starlight({
      title: "Stock Starlight Control",
      components: {
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
