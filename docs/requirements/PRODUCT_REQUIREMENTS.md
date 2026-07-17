# ElevatePro Product Requirements

Status: Baseline for controlled development. Product-owner approval is required for changes.

## Product goal
Provide a production-ready application for administering and completing Elevate gym programs while keeping member data private, auditable, and separate from the POC environment.

## Roles
- **Administrator/Manager:** manages members, programs, assignments, progress, communications, and reports.
- **Member:** accesses only their own profile, assigned activities, results, and preferences.

## Baseline requirements
| ID | Requirement |
|---|---|
| ELV-ACC-001 | The system shall authenticate administrators and members using a production-appropriate mechanism approved through architecture review. |
| ELV-ACC-002 | Members shall access only their own information; administrators shall access only functions granted to their role. |
| ELV-PRG-001 | Administrators shall manage reusable program templates with ordered daily activities. |
| ELV-PRG-002 | Creating a member program assignment shall apply the approved template using the member's start date. |
| ELV-ACT-001 | Members shall view and enter results for assigned activities using a mobile-responsive interface. |
| ELV-ACT-002 | The system shall retain completion status and results for each assignment. |
| ELV-ADM-001 | Administrators shall view member status, progress, and behind-schedule indicators. |
| ELV-AUD-001 | Material administrator and member actions shall be auditable. |
| ELV-COM-001 | Member communication and reminder capabilities shall require approved consent, delivery, and failure-handling rules. |
| ELV-DAT-001 | Production and POC runtime, credentials, databases, and member data shall remain isolated. |
| ELV-DAT-002 | Real member data shall not be stored in source control, test fixtures, prompts, screenshots, or logs. |
| ELV-UX-001 | Member workflows shall prioritize phone use; administrator workflows shall support laptop use. |

## Scope control
Billing is excluded from the initial release. New requirements must receive a stable ID, acceptance criteria, and product-owner approval before implementation.