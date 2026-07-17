# Claude Code Instructions

Claude Code is the implementation agent for the Elevate production application. Follow `AGENTS.md` first.

## Mission
Implement approved GitHub issues without changing product scope or architecture implicitly.

## Read before editing
1. `AGENTS.md`
2. `docs/requirements/PRODUCT_REQUIREMENTS.md`
3. The assigned GitHub issue
4. `docs/architecture/SYSTEM_ARCHITECTURE.md`
5. Relevant ADRs
6. `docs/process/DEFINITION_OF_DONE.md`

## Current stack
- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

A database, authentication provider, and external integrations must not be introduced without architecture approval.

## Implementation rules
- Work on a dedicated branch; never push directly to `main`.
- Keep one issue and one coherent change set per branch.
- Preserve server/client component boundaries.
- Keep privileged logic server-side.
- Validate user-controlled input at server boundaries.
- Enforce authorization in backend code, not only in the UI.
- Do not import runtime code from the POC repository.
- Reuse POC concepts only through approved requirements and intentional adaptation.
- Do not add dependencies without justification in the pull request.
- Never use real member data in fixtures, logs, screenshots, or tests.

## Validation
Run at minimum:

```bash
npm ci
npm run lint
npm run build
```

Do not claim a check passed unless it was executed successfully.

## Pull-request handoff
Include linked issue and requirement IDs, implementation summary, changed files, security/data impact, screenshots for UI changes, checks and results, limitations, and open decisions.