import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { copySvgPlugin } from "./plugins/copySvgPlugin";
import { versionPlugin } from "./plugins/versionPlugin";

const isProduction = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  base: isProduction ? `/vite-bq/` : undefined,
  plugins: [react(), copySvgPlugin(), versionPlugin(), tsconfigPaths()],
});
