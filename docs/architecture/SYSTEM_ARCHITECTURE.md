# ElevatePro System Architecture Baseline

## Current state
- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- ESLint
- No approved production database, authentication provider, email provider, or background-job platform is established in this repository baseline.

## Boundaries
- `ElevateProV1` is the production-track application.
- The Elevate POC is a separate runtime and data environment.
- Production code must not import runtime code, credentials, databases, or data from the POC.
- POC behavior may be promoted only through approved requirements and intentional adaptation.

## Required architecture decisions
Architecture review and an ADR are required before selecting or changing:
- authentication and session management
- authorization and member ownership enforcement
- database and migration approach
- email or notification provider
- background jobs or scheduled processing
- audit storage and retention
- sensitive member-data classification and protection
- hosting, secrets, observability, and recovery strategy

## Security principles
- Deny access by default.
- Enforce authorization server-side.
- Validate all external input.
- Keep secrets outside source control.
- Minimize collection and exposure of member data.
- Preserve an audit trail for material actions.
- Separate production, test, development, and POC data.

## Change rule
Implementation agents may not infer unresolved architecture. They must document the question and hand it to the Backend Architect or product owner.