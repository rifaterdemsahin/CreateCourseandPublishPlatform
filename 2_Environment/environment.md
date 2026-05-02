# Environment & Deployment Documentation

## Application Overview

| Property | Value |
|----------|-------|
| **Name** | AI No-Code Course Platform |
| **Description** | Course portal with AI Tutor chat powered by Claude |
| **Stack** | Node.js, Express, Vanilla JS |
| **Platform** | Fly.io |

---

## Production URLs

| Endpoint | URL | Status |
|----------|-----|--------|
| **Main App** | https://ai-no-code-course.fly.dev | ✅ HTTP 200 |
| **Health Check** | https://ai-no-code-course.fly.dev/api/health | ✅ `{"status":"ok"}` |

---

## Fly.io Configuration

### App Details

| Property | Value |
|----------|-------|
| **App Name** | `ai-no-code-course` |
| **Organization** | personal (Erdem) |
| **Primary Region** | `lhr` (London) |
| **Machines** | 2 (shared-cpu-1x, 512MB RAM each) |
| **Auto-stop** | Enabled (stops when idle to save cost) |
| **Auto-start** | Enabled (starts on request) |

### Fly.io Commands

```bash
# View app status
flyctl status --app ai-no-code-course

# View logs
flyctl logs --app ai-no-code-course

# Restart app
flyctl apps restart ai-no-code-course

# Deploy latest code
flyctl deploy --app ai-no-code-course

# Open app in browser
flyctl open --app ai-no-code-course
```

---

## Environment Variables

| Variable | Required | Description | Set Via |
|----------|----------|-------------|---------|
| `CLAUDE_API_KEY` | **YES** | Anthropic API key for AI Tutor | `flyctl secrets set` |
| `PORT` | No | Server port (default: 3000) | Fly.io auto-sets |
| `NODE_ENV` | No | Node environment | Fly.io auto-sets |

### Setting Secrets

```bash
# Set Claude API key (required for AI Tutor to work)
flyctl secrets set CLAUDE_API_KEY="your-key-here" --app ai-no-code-course

# List secrets
flyctl secrets list --app ai-no-code-course
```

> **Note:** Get your Anthropic API key at https://console.anthropic.com/

---

## Local Development

### Prerequisites

- Node.js >= 20.0.0
- npm

### Setup

```bash
# Install dependencies
npm install

# Start server locally
npm start

# Start with Doppler (loads secrets from Doppler)
npm run dev
```

### Local URLs

- **App:** http://localhost:3000
- **Health:** http://localhost:3000/api/health

---

## Deployment History

| Date | Action | Notes |
|------|--------|-------|
| 2026-05-02 | Initial deploy to Fly.io | Created app `ai-no-code-course` |
| 2026-05-02 | Added AI Tutor chat widget | Full JS implementation + styles |
| 2026-05-02 | Cleaned git tracking | Removed `node_modules/` from repo |
| 2026-05-02 | Redeploy after cleanup | Fresh machines, Moodle conflict resolved |

---

## Project Files

| File | Purpose |
|------|---------|
| `server.js` | Express backend + Claude API proxy |
| `index.html` | Main course portal UI |
| `script.js` | Frontend logic + AI Tutor chat |
| `styles.css` | All UI styles including chat widget |
| `package.json` | Node dependencies (express, cors) |
| `Dockerfile` | Multi-stage Docker build for Fly.io |
| `fly.toml` | Fly.io deployment configuration |
| `.gitignore` | Excludes `node_modules/`, `.env`, logs |

---

## Known Issues & Notes

1. **AI Tutor requires `CLAUDE_API_KEY`** — The chat widget will show an error message until the API key is configured via `flyctl secrets set`.

2. **Machines auto-stop when idle** — First request after idle period may take 2-3 seconds to wake up. This saves cost.

3. **Moodle app conflict resolved** — The app name `ai-no-code-course` previously had old Moodle machines. These were destroyed and replaced with fresh Node.js machines.

---

## Cost Estimate (Fly.io Free Tier / Hobby)

| Resource | Approx. Monthly Cost |
|----------|---------------------|
| 2 shared-cpu-1x machines | ~$3-5 (with auto-stop) |
| Bandwidth | Included in free allowance |
| **Total** | **~$3-5/month** |

> Actual cost depends on traffic. With `auto_stop_machines = true`, idle time is free.
