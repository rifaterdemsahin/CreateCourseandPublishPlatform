# 7️⃣ Testing Known — The "Proof"

> **Stage 7 of 7:** Close the loop — validate every unknown from Stage 1.

## Purpose

This folder is the **validation layer** of the project. Every hypothesis, OKR, and open question defined in `1_Real_Unknown` must be answered here with evidence.

## What belongs here

- **Validation reports** — Evidence that `1_Real_Unknown` objectives were met
- **Testing checklists** — Per-feature and per-stage checklists
- **Test scripts** — Automated and manual test definitions
- **Acceptance criteria** — Pass/fail criteria for each deliverable

## Files

| File | Description |
|------|-------------|
| `validation_report.md` | Maps each `1_Real_Unknown` item to its evidence |
| `checklist.md` | Master testing checklist |
| `acceptance_criteria.md` | Final go/no-go criteria |

## Validation Mapping Format

```markdown
## Objective: [From 1_Real_Unknown]

**Original question:** What was the unknown?
**Test method:** How was it validated?
**Evidence:** Link to test output, screenshot, or log
**Result:** ✅ Passed / ❌ Failed / ⚠️ Partial
**Date validated:** YYYY-MM-DD
```

## Rules

- Every item in `1_Real_Unknown` must have a corresponding entry here
- No item is "done" until it has a result entry in this folder
- Failed validations feed back into `6_Semblance` as lessons learned
- Move completed validation reports to `_obsolete/` after project close 🚮

## 🧪 Master Testing Checklist

### Deployment

- [ ] Fly.io app deploys without errors
- [ ] Health endpoint `/api/health` returns `{"status":"ok"}`
- [ ] App loads at `https://ai-no-code-course.fly.dev`

### Course Content

- [ ] Sidebar shows all modules and lessons
- [ ] Clicking a lesson loads the correct YouTube video
- [ ] Lesson description updates for each selection
- [ ] Progress bar calculates correctly

### Interactions

- [ ] "Mark as Complete" toggles completion state
- [ ] Completed lessons show checkmark icon
- [ ] Previous/Next buttons navigate correctly
- [ ] Keyboard shortcuts work (arrows, space)

### AI Tutor

- [ ] Chat widget opens on click
- [ ] User message appears in chat
- [ ] Typing indicator shows while waiting
- [ ] Bot response appears (requires `CLAUDE_API_KEY`)
- [ ] Error message shows if API is unavailable

### Responsive

- [ ] Sidebar hides on mobile
- [ ] Hamburger menu opens sidebar overlay
- [ ] Video player maintains 16:9 ratio
- [ ] Navigation buttons stack on narrow screens
