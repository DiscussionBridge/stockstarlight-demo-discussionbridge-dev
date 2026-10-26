# Stock Starlight Control Demo

Public surface: https://stockstarlight.demo.discussionbridge.dev/

This repository is the stock Starlight control surface used alongside the
DiscussionBridge demos. It builds and deploys independently as a Cloudflare
Worker with static assets and intentionally contains no DiscussionBridge
integration. Its only shared operational addition is the DiscussionBridge
Google Analytics property `G-K9SYR7QENF`, injected through a head override that
preserves Starlight's native metadata.

```powershell
npm ci
npm run build
npm run deploy:dry-run
npm run deploy
```

Deployment requires a reviewed build and explicit production authorization.
