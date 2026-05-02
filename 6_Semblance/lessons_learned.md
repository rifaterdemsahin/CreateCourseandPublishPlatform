# Lessons Learned

## What Worked Well

1. **Vanilla JS stack** — No build step meant instant iteration. Perfect for a POC.
2. **Express API proxy** — Simple, secure way to hide API keys from the browser.
3. **Fly.io auto-stop** — Keeps costs near zero when no one is using the app.
4. **YouTube embeds** — Free video hosting with global CDN. Zero bandwidth cost for us.

## What Was Harder Than Expected

1. **Folder restructuring mid-project** — Moving files while keeping git history clean required careful `git mv` operations.
2. **Fly.io machine conflicts** — Reusing an app name that had previous machines caused unexpected behaviour.
3. **CSS for chat widget** — Floating chat UI required careful z-index and positioning to not overlap video controls.

## What To Do Differently Next Time

1. **Start with the folder structure** — Apply the Delivery Pilot template from day one.
2. **Use `npm ci` in Dockerfile** — Faster, more reproducible builds than `npm install`.
3. **Add health checks to Fly.toml** — Better machine lifecycle management.
4. **Separate frontend and backend repos** — If scaling beyond POC, decouple for independent deployment.
