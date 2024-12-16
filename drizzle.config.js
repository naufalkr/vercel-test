import { defineConfig } from 'drizzle-kit';

import { loadEnvConfig } from '@next/env';
 
const projectDir = process.cwd();
loadEnvConfig(projectDir);

export default defineConfig({
  schema: './drizzle/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL,
  },
});