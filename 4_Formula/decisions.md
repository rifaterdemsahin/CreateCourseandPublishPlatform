# Architecture Decision Records

## ADR 001: Vanilla JS over React

**Status:** Accepted

**Context:** We need a lightweight frontend with no build step.

**Decision:** Use vanilla HTML/CSS/JS instead of React/Vue.

**Consequences:**
- ✅ No build step required
- ✅ Faster page loads
- ✅ Easier to deploy to static hosting
- ❌ Less component reusability
- ❌ Manual DOM management

## ADR 002: Express + Node.js over Python

**Status:** Accepted

**Context:** Need a simple backend to proxy Claude API requests.

**Decision:** Use Node.js + Express.

**Consequences:**
- ✅ Same language as frontend (easier mental model)
- ✅ Lightweight for a single API endpoint
- ✅ Easy Docker packaging

## ADR 003: Fly.io over Vercel/Netlify

**Status:** Accepted

**Context:** Need a backend server, not just static hosting.

**Decision:** Use Fly.io for full-stack deployment.

**Consequences:**
- ✅ Runs Docker containers (any language/stack)
- ✅ Auto-stop saves money
- ✅ Simple CLI deployment
- ❌ Requires Docker knowledge

## ADR 004: localStorage over Database

**Status:** Accepted

**Context:** Proof-of-concept; no user accounts yet.

**Decision:** Store progress in browser localStorage.

**Consequences:**
- ✅ Zero backend state management
- ✅ Works offline
- ✅ No database cost
- ❌ Progress lost if user clears data
- ❌ Can't sync across devices
