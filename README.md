# Elevate Pro V1

This repository is the production-track Elevate application.

## Environment model
- dev: local development and migration authoring
- preview: pre-production verification against production-like data
- prod: production deployment using committed migrations only

Each environment must use its own database.

## Database architecture baseline
The initial schema is defined in prisma/schema.prisma and includes:
- Organization
- Member
- Program
- Enrollment

The baseline migration is in prisma/migrations/202607120001_init/migration.sql.

## One-time setup
1. Install dependencies.
2. Copy env templates and provide real connection strings.
3. Generate Prisma client.

Commands:
- npm install
- Copy-Item .env.dev.example .env.dev
- Copy-Item .env.preview.example .env.preview
- Copy-Item .env.prod.example .env.prod
- npm run prisma:generate

## Author and test migrations in dev
Use dev to create and iterate on migration files.

Command:
- npm run prisma:migrate:dev

## Validate migration state in preview and prod
These commands enforce stage matching before running Prisma, preventing accidental cross-environment execution.

Commands:
- npm run prisma:status:preview
- npm run prisma:status:prod

## Apply migrations to preview and prod
Apply committed migrations only.

Commands:
- npm run prisma:migrate:preview
- npm run prisma:migrate:prod

## Recommended promotion flow
1. Author migration in dev.
2. Run app tests and smoke checks.
3. Run preview status check and apply preview migration.
4. Validate preview behavior and performance.
5. Run prod status check.
6. Take prod backup/snapshot.
7. Apply prod migration in controlled window.
8. Execute post-deploy health checks.

## CI safety checks
GitHub Actions workflow in .github/workflows/db-migration-safety.yml performs:
- Prisma schema validation
- Prisma client generation
- migration SQL diff generation
- optional preview/prod migration status checks when secrets exist

Expected repository secrets:
- PREVIEW_DATABASE_URL
- PROD_DATABASE_URL