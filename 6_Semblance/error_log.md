# Error Log

## [2026-05-02] Fly.io App Name Conflict (Moodle)

**Symptom:** Deployment succeeded but app returned connection errors. Machines showed "failed to connect on 0.0.0.0:8080".

**Root cause:** The app name `ai-no-code-course` previously had old Moodle/Bitnami machines attached to it. The new deployment created machines but the old volume mounts and configs were still present, causing the Bitnami Moodle container to start instead of our Node.js app.

**Fix applied:** Destroyed all existing machines (`flyctl machine destroy`) and redeployed from scratch.

**Workaround active:** No — fully resolved.

**Linked to:** [2_Environment/setup.md](../2_Environment/setup.md)

---

## [2026-05-02] node_modules Committed to Git

**Symptom:** Git repo was bloated with 644 tracked node_modules files (~75k insertions).

**Root cause:** `.gitignore` was missing when `npm install` was first run.

**Fix applied:** Added `.gitignore` with `node_modules/`, then ran `git rm -r --cached node_modules`.

**Workaround active:** No — fully resolved.

**Linked to:** [5_Symbols/README.md](../5_Symbols/README.md)

---

## [2026-05-02] AI Tutor Chat Widget Incomplete

**Symptom:** Chat UI was rendered in HTML/CSS but had no JavaScript functionality. Clicking send did nothing.

**Root cause:** `script.js` was missing all chat logic (toggle, send, API call, typing indicator).

**Fix applied:** Added full `initChat()`, `sendChatMessage()`, `appendMessage()`, typing indicator, and error handling to `script.js`.

**Workaround active:** No — fully resolved.

**Linked to:** [5_Symbols/public/script.js](../5_Symbols/public/script.js)
