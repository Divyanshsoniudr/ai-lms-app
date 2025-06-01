import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_wopP96WgEOfJ@ep-tight-morning-a16u2sco-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require' },
});