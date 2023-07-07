import { existsSync } from "node:fs";
import { cp } from "node:fs/promises";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, type PluginOption } from "vite";

const isProduction = process.env.NODE_ENV === "production";

const copySvgPlugin: () => PluginOption = () => ({
  buildStart: async () => {
    if (existsSync("public/svg")) return Promise.resolve();

    console.log("Copy svg");
    await cp("node_modules/@bee-q/core/dist/bee-q/svg", "public/svg", {
      recursive: true,
    });
    console.log("Copy svg end");
  },
  name: "copy-svg-plugin",
});

// https://vitejs.dev/config/
export default defineConfig({
  base: isProduction ? `/vite-bq/` : undefined,
  plugins: [react(), copySvgPlugin()],
});
