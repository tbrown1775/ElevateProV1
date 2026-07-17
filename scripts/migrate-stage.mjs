#!/usr/bin/env node

import { spawnSync } from "node:child_process";

const expectedStage = process.argv[2];
const statusOnly = process.argv.includes("--status");

if (!expectedStage || !["preview", "prod"].includes(expectedStage)) {
  console.error("Usage: node scripts/migrate-stage.mjs <preview|prod> [--status]");
  process.exit(1);
}

const actualStage = process.env.NEXT_PUBLIC_APP_ENV;

if (actualStage !== expectedStage) {
  console.error(`Environment mismatch: expected NEXT_PUBLIC_APP_ENV=${expectedStage}, received ${actualStage ?? "undefined"}.`);
  process.exit(1);
}

const validate = spawnSync("node", ["scripts/validate-env.mjs"], { stdio: "inherit", shell: true });
if (validate.status !== 0) {
  process.exit(validate.status ?? 1);
}

const command = statusOnly ? ["prisma", "migrate", "status"] : ["prisma", "migrate", "deploy"];
const run = spawnSync("npx", command, { stdio: "inherit", shell: true });
process.exit(run.status ?? 1);