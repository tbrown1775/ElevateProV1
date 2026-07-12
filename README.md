# Elevate Application (Production Track)

This folder is the architecture-first Application project.
The workspace root remains the active POC project.

## Goals
- Keep Application isolated from POC runtime and data.
- Reuse behavior intentionally, not by direct coupling.
- Promote validated POC concepts into Application requirements.

## Local Commands (from workspace root)
- `npm run dev:application`
- `npm run build:application`
- `npm run start:application`
- `npm run lint:application`

## Initialize as separate GitHub project
From `application` folder:
1. `git init`
2. `git add .`
3. `git commit -m "Initial Application scaffold"`
4. `git branch -M main`
5. `git remote add origin <new-application-repo-url>`
6. `git push -u origin main`

## Vercel + Database setup (Application only)
1. Create a new Vercel project rooted at `application`.
2. Provision a new Application-specific database.
3. Set Application environment variables in Vercel:
   - `DATABASE_URL`
   - `NEXT_PUBLIC_APP_ENV=application`
4. Keep POC and Application environment variables separate.

## Boundary rule
Do not import runtime code from POC paths into Application.
Reuse should happen by copying/adapting approved code with requirement IDs.
