import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { type PluginOption } from "vite";

export const versionPlugin: () => PluginOption = () => ({
  buildStart: async () => {
    if (existsSync("public/version.txt")) return Promise.resolve();

    const buff = execSync("git rev-parse --short HEAD");

    const version = buff.toString("utf-8");

    await writeFile("public/version.txt", `v.${version}`, "utf-8");
  },
  name: "version-plugin",
});
