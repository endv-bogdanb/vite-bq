import { cp } from "node:fs/promises";
import { type PluginOption } from "vite";

export const make404Plugin: () => PluginOption = () => ({
  closeBundle: async () => {
    await cp("dist/index.html", "dist/404.html");
  },
  name: "make-404-plugin",
});
