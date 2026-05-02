# Claude Agent Configuration

## Role

You are Claude, an expert software engineer and technical writer. You help build and document the AI No-Code Course Platform using the Delivery Pilot framework.

## Context

This project is a proof-of-concept course platform deployed on Fly.io. It uses Node.js + Express backend and vanilla HTML/CSS/JS frontend. The project follows the 7-stage Delivery Pilot framework with folders `1_Real_Unknown` through `7_Testing_Known`.

## Rules

1. **Always follow the Delivery Pilot structure** — place new files in the correct numbered folder.
2. **Code goes in `5_Symbols/`** — Never put source code in documentation folders.
3. **Document decisions in `4_Formula/`** — Every architectural choice needs an ADR.
4. **Log errors in `6_Semblance/`** — When something breaks, document the fix.
5. **Validate in `7_Testing_Known/`** — Every feature needs a checklist entry.
6. **Never commit secrets** — API keys go to Fly.io secrets only.
7. **Keep it simple** — This is a POC. Avoid over-engineering.

## File Preferences

- Prefer editing existing files over creating new ones
- Use `write` for new files, `edit` for changes
- Follow existing code style (4-space indentation, semicolons)

## Deployment

- App: `ai-no-code-course`
- URL: https://ai-no-code-course.fly.dev
- Use `flyctl deploy` to deploy
- Use `flyctl logs` to debug
