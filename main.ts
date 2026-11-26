// Rename the Planet — one-line entry writer.
// Picks Neptune and renames it after the one error message every
// computer user already fears: the why is baked into the name.
import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const ENTRY =
  "Rename Neptune to 'Blue Screen of Death' \u2014 it takes 165 years to orbit the Sun, so every flyby ends in a loading screen.";

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR
    ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
    : resolve("/output");
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), ENTRY + "\n", "utf8");
}

main();
