#!/usr/bin/env node

const appEnv = process.env.NEXT_PUBLIC_APP_ENV;
const dbUrl = process.env.DATABASE_URL;

const allowedEnvs = new Set(["dev", "preview", "prod"]);

if (!allowedEnvs.has(appEnv)) {
  console.error(`Invalid NEXT_PUBLIC_APP_ENV: ${appEnv ?? "undefined"}. Expected dev, preview, or prod.`);
  process.exit(1);
}

if (!dbUrl) {
  console.error("DATABASE_URL is required.");
  process.exit(1);
}

if (!dbUrl.startsWith("postgresql://") && !dbUrl.startsWith("postgres://")) {
  console.error("DATABASE_URL must use a PostgreSQL connection string.");
  process.exit(1);
}

console.log(`Environment validation passed for ${appEnv}.`);