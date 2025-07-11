import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import pluginExternal from "vite-plugin-external";
import tsconfigPaths from "vite-tsconfig-paths";
import { copySvgPlugin } from "./plugins/copySvgPlugin";
import { make404Plugin } from "./plugins/make404Plugin";
import { versionPlugin } from "./plugins/versionPlugin";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vite-bq/",
  build: {
    minify: true,
    rollupOptions: {
      external: [/^@beeq\//, "react"],
      output: {
        globals: {
          "@beeq/core": "@beeq/core",
          "@beeq/react": "@beeq/react",
          "@beeq/core/dist/components": "@beeq/core/dist/components",
          "react": "react",
        },
      },
    },
  },
  plugins: [
    react(),
    copySvgPlugin(),
    versionPlugin(),
    make404Plugin(),
    tsconfigPaths(),
  ],
});
