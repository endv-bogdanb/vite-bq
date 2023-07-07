import { existsSync } from "node:fs";
import { cp } from "node:fs/promises";
import { type PluginOption } from "vite";

export const copySvgPlugin: () => PluginOption = () => ({
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
