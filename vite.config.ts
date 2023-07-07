import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

const isProduction = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  base: isProduction ? `/vite-bq/` : undefined,
  plugins: [react()],
});
