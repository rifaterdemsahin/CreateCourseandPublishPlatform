# AI No-Code Course Platform

> Proof-of-concept course platform built with the **Delivery Pilot** framework.

## Live App

🔗 **https://ai-no-code-course.fly.dev**

## What is this?

A free, deployable course platform that:
- 📺 Hosts course videos via YouTube embeds
- 📊 Tracks student progress per lesson
- 🤖 Provides an AI tutor powered by Claude
- 💸 Costs under **$5/month** to run

## Course Content

**AI No-Code: Build Your Own AI Solutions**
- Module 1: AI No-Code Foundations
  - Lesson 1: Build Your Own AI Solutions (Step-by-Step)
  - Lesson 2: The Agentic Era — Digital Workforce
  - Lesson 3: Learn Text Blaze To Boost Self Learning

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Vanilla HTML / CSS / JS |
| Backend | Node.js + Express |
| AI | Claude API (Anthropic) |
| Hosting | Fly.io |

## Project Structure (Delivery Pilot Framework)

```
├── 1_Real_Unknown/     # Why — Problem, OKRs, questions
├── 2_Environment/      # Context — Setup, roadmap, architecture
├── 3_Simulation/       # Vision — Mockups, screenshots
├── 4_Formula/          # Recipe — Research, decisions, guides
├── 5_Symbols/          # Reality — Source code & assets
│   ├── server.js
│   ├── package.json
│   └── public/
│       ├── index.html
│       ├── script.js
│       └── styles.css
├── 6_Semblance/        # Scars — Errors, workarounds, lessons
├── 7_Testing_Known/    # Proof — Validation, checklists
├── Dockerfile
├── fly.toml
└── README.md
```

## Quick Start

```bash
# Install dependencies
npm install

# Start locally
npm start

# Deploy to Fly.io
flyctl deploy
```

## Required Secrets

```bash
flyctl secrets set CLAUDE_API_KEY="your-anthropic-key" --app ai-no-code-course
```

## Delivery Pilot Framework

This project follows the [Delivery Pilot](https://github.com/rifaterdemsahin/delivery-pilot-template) 7-stage framework:

1. **Real Unknown** — Define the problem
2. **Environment** — Establish context
3. **Simulation** — Visualise the vision
4. **Formula** — Document the recipe
5. **Symbols** — Write the code
6. **Semblance** — Record the scars
7. **Testing Known** — Validate the proof

## License

MIT
