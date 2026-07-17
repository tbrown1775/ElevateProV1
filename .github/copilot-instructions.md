# VS Code AI Instructions

Apply `AGENTS.md` to every task.

## Product context
ElevateProV1 is the architecture-first production application. It is intentionally isolated from the Elevate POC. Do not directly couple to or import runtime code from the POC repository.

## Technical conventions
- Use TypeScript and existing Next.js App Router patterns.
- Prefer server components for read-oriented pages.
- Keep privileged mutations and data access server-side.
- Validate user-controlled input before processing.
- Enforce role and member ownership checks on the server.
- Preserve auditability for administrative and member actions.
- Reuse existing styling before adding UI frameworks.
- Add dependencies only when justified by the active issue.

## Change controls
- Identify the active issue and requirement IDs before editing.
- Do not introduce databases, authentication providers, roles, integrations, retention rules, or architecture changes implicitly.
- Significant technical decisions require an ADR.
- Update traceability when an issue is implemented.
- Use the pull-request template and report actual validation results.

## Role routing
- Repository Steward: organization, traceability, templates, readiness.
- Backend Architect: data, APIs, authentication, authorization, integrations, security.
- Claude Code: approved implementation.

## Required validation
```bash
npm ci
npm run lint
npm run build
```