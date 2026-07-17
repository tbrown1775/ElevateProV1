# AI Handoff Protocol

Each handoff must identify:

- active GitHub issue and requirement IDs
- completed work and changed files
- decisions made and assumptions used
- unresolved questions and known risks
- checks executed and actual results
- recommended next owner

## Stage gates

1. **Requirements Ready** — problem, scope, requirement IDs, and acceptance criteria are approved.
2. **Architecture Ready** — required design, security, data, and integration decisions are approved.
3. **Development Ready** — issue is bounded, dependencies are known, and implementation constraints are documented.
4. **Technical Review** — implementation and automated checks are complete.
5. **Product Acceptance** — acceptance criteria and customer feedback are confirmed.
6. **Ready to Merge** — checks pass and review conversations are resolved.

An agent must not advance work past a failed gate or silently resolve a decision owned by another role.