# Setup Guide

## Prerequisites

- Node.js >= 20.0.0
- npm
- Git
- Fly.io CLI (`flyctl`)

## Local Development

```bash
# Clone the repo
git clone <repo-url>
cd CreateCourseandPublishPlatform

# Install dependencies (from 5_Symbols/)
cd 5_Symbols
npm install

# Start the server
npm start
```

Open http://localhost:3000

## Fly.io Deployment

```bash
# Login to Fly.io
flyctl auth login

# Deploy
flyctl deploy

# Set secrets
flyctl secrets set CLAUDE_API_KEY="your-key" --app ai-no-code-course
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `CLAUDE_API_KEY` | Yes | Anthropic API key for AI Tutor |
| `PORT` | No | Server port (default: 3000) |
