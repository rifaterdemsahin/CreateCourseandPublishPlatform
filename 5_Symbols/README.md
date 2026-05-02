# 5️⃣ Symbols — The "Reality"

> **Stage 5 of 7:** The actual code — where vision becomes working software.

## Purpose

This folder contains the **core source code and implementation files**. Everything that runs, executes, or is deployed lives here.

## What belongs here

- **Source code** — All scripts, modules, and application code
- **Configuration files** — App config (non-secret)
- **Docker definitions** — `Dockerfile` (referenced from root)
- **Static assets** — JS, CSS, HTML used by the app

## Files

| File | Description |
|------|-------------|
| `server.js` | Express backend + Claude API proxy |
| `package.json` | Node dependencies |
| `public/index.html` | Course portal UI |
| `public/script.js` | Frontend logic + AI Tutor chat |
| `public/styles.css` | All UI styles |

## Running Locally

```bash
cd 5_Symbols
npm install
npm start
```

## Code Standards

- **Style:** Modern CSS — Flexbox, CSS variables
- **Backend:** Node.js on Fly.io
- **Frontend:** Static HTML/CSS/JS

## Secrets

- **Never** store secrets in this folder
- Use Fly.io secrets for `CLAUDE_API_KEY`
- Load secrets at runtime via `process.env`

## Rules

- Keep `server.js` minimal — it already is
- Every function that isn't self-evident gets a comment
- Move deprecated code to `_obsolete/` 🚮

## 🧪 Testing Checklist

- [ ] `npm start` runs without errors locally
- [ ] `index.html` loads all CSS and JS correctly
- [ ] Course modules render in sidebar
- [ ] YouTube embed loads for each lesson
- [ ] Progress bar updates on lesson completion
- [ ] AI Tutor chat opens and sends messages
- [ ] No secrets committed to this folder
