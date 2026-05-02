# 2️⃣ Environment — The "Context"

> **Stage 2 of 7:** Establish the context before writing a single line of code.

## Purpose

This folder documents the **setup, constraints, and operating context** of the project. Anyone joining the project — human or AI — should be able to get fully up to speed by reading this folder.

## What belongs here

- **Roadmaps** — Timeline, milestones, and delivery plan
- **Constraints** — Technical, budget, compliance, or time limitations
- **Setup guides** — Step-by-step environment setup for each platform
- **Architecture overview** — High-level system design

## Files

| File | Description |
|------|-------------|
| `setup.md` | Environment setup guide |
| `roadmap.md` | Project roadmap and milestones |
| `architecture.md` | System architecture with Mermaid diagrams |
| `environment.md` | Deployment and environment documentation |

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Vanilla HTML / CSS / JS |
| **Backend** | Node.js + Express |
| **AI** | Claude API (Anthropic) |
| **Hosting** | Fly.io |
| **Secrets** | Fly.io secrets |

## Rules

- All secrets go to Fly.io secrets — never commit to git
- Document every tool version used (reproducibility)
- Keep setup guides tested and working 🛠

## 🧪 Testing Checklist

- [ ] Setup guide is complete and tested
- [ ] Architecture diagram renders correctly
- [ ] Fly.io project created and secrets synced
