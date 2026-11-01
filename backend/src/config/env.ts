import "dotenv/config";

function getRequiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

const jwtSecret = getRequiredEnv("JWT_SECRET");

if (jwtSecret.length < 32) {
  throw new Error("JWT_SECRET must be at least 32 characters long.");
}

const port = Number(process.env.PORT ?? 5000);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("PORT must be a valid port number.");
}

export const env = {
  PORT: port,
  NODE_ENV: process.env.NODE_ENV ?? "development",
  DATABASE_URL: getRequiredEnv("DATABASE_URL"),
  JWT_SECRET: jwtSecret,
} as const;