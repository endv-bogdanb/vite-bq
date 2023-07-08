import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { copySvgPlugin } from "./plugins/copySvgPlugin";
import { versionPlugin } from "./plugins/versionPlugin";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vite-bq/",
  plugins: [react(), copySvgPlugin(), versionPlugin(), tsconfigPaths()],
});
