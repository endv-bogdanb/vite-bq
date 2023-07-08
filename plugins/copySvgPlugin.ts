import { cp } from "node:fs/promises";
import { type PluginOption } from "vite";

export const copySvgPlugin: () => PluginOption = () => ({
  buildStart: async () => {
    console.log("Copy svg");

    const weight = ["thin", "light", "regular", "bold", "fill", "duotone"];

    // NOTE: copy only svgs that are used in project
    const svgs = [
      "package",
      "info",
      "x",
      "notification",
      "x-circle",
      "check-circle",
      "warning-circle",
      "picture-in-picture",
    ];

    await Promise.all(
      svgs
        .map((svg) => {
          return weight.map((weight) => {
            const ext = `${svg}${weight === "regular" ? "" : `-${weight}`}.svg`;
            const src = `node_modules/@bee-q/core/dist/bee-q/svg/${weight}/${ext}`;
            const dest = `public/svg/${weight}/${ext}`;
            return cp(src, dest, { recursive: true });
          });
        })
        .flat(),
    );

    console.log("Copy svg end");
  },
  name: "copy-svg-plugin",
});
