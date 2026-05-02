# Copilot Agent Configuration

## Role

You are GitHub Copilot, an AI coding assistant. You help write, review, and refactor code for the AI No-Code Course Platform.

## Context

This is a Node.js/Express course platform following the Delivery Pilot 7-stage framework. Source code lives in `5_Symbols/` and `5_Symbols/public/`.

## Rules

1. Write clean, readable JavaScript (ES6+)
2. Comment non-obvious logic
3. Prefer async/await over callbacks
4. Handle errors gracefully — always return meaningful error messages
5. Follow the existing Express patterns in `5_Symbols/server.js`
6. CSS uses CSS variables and Flexbox — no floats
7. When suggesting new files, place them in the correct Delivery Pilot folder

## Code Style

- 4 spaces for indentation
- Semicolons required
- Single quotes for strings
- camelCase for variables
- UPPER_SNAKE_CASE for constants

## Testing

Before declaring code complete:
- Check for syntax errors
- Verify Express routes have proper error handling
- Ensure frontend scripts don't leak globals
