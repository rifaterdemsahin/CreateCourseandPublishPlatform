# Architecture

## System Overview

```mermaid
graph TD
    A[Student Browser] -->|HTTPS| B[Fly.io Load Balancer]
    B --> C[Node.js Express Server]
    C -->|Static files| D[5_Symbols/public/]
    C -->|API Proxy| E[Claude API]
    D -->|Embed| F[YouTube Player]
    D -->|localStorage| G[Progress Store]
```

## Component Diagram

```mermaid
graph LR
    subgraph Frontend["5_Symbols/public/"]
        HTML[index.html]
        CSS[styles.css]
        JS[script.js]
    end

    subgraph Backend["5_Symbols/"]
        SRV[server.js]
        PKG[package.json]
    end

    HTML --> CSS
    HTML --> JS
    JS -->|fetch| SRV
    SRV -->|proxy| Claude[Claude API]
    JS -->|iframe| YouTube[YouTube]
    JS -->|setItem| LS[localStorage]
```

## Data Flow

1. **Page Load** → Express serves `index.html` from `5_Symbols/public/`
2. **Lesson Select** → JS loads YouTube embed, updates UI
3. **Progress** → Saved to `localStorage` (client-side)
4. **Chat** → JS sends message to `/api/chat` → Server proxies to Claude API
5. **Response** → Claude response streamed back to chat UI

## File Structure

```
5_Symbols/
├── server.js          # Express backend
├── package.json       # Dependencies
└── public/
    ├── index.html     # Course portal UI
    ├── script.js      # Frontend logic
    └── styles.css     # UI styles
```
