# Definition of Done

Work is complete only when all applicable conditions are met.

## Product
- Linked GitHub issue and requirement IDs are present.
- Acceptance criteria are measurable and satisfied.
- Scope changes received product-owner approval.
- Customer feedback was obtained where required.

## Architecture and data
- Required architecture review is complete.
- Significant decisions are recorded in ADRs.
- Authentication, authorization, privacy, migration, retention, and rollback impacts are addressed.
- POC and production boundaries remain intact.

## Engineering
- Changes are focused and reviewable.
- Inputs are validated and authorization is enforced server-side.
- No secrets or real member data were added.
- Documentation and traceability are updated.

## Validation
- `npm ci` passed.
- `npm run lint` passed.
- `npm run build` passed.
- Targeted tests and UI evidence are included when applicable.
- Skipped checks are explicitly explained.

## Review
- Pull-request template is complete.
- Required status checks passed.
- Review comments are resolved.
- Human product acceptance is recorded before merge.