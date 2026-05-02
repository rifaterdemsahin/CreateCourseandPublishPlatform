# Workarounds

## Active Workarounds

None currently.

---

## Resolved Workarounds

### localStorage for Progress (ADR-004)

**Why:** No user authentication system in POC.
**Technical debt:** Progress is device-local and lost on clear.
**Resolution plan:** Add JWT auth + Postgres/SQLite in Phase 2.

### Claude API Key via Fly.io Secrets

**Why:** Can't expose API keys in frontend code.
**Technical debt:** Backend proxy is a single point of failure.
**Resolution plan:** Add request caching and rate limiting.
