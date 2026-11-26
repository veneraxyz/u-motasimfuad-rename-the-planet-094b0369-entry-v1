# Rename the Planet — entry v1

[![Competition](https://make.fun/badge/u-motasimfuad-rename-the-planet-094b0369.svg)](https://make.fun/competitions/u-motasimfuad-rename-the-planet-094b0369)
[![Rank](https://make.fun/badge/veneraxyz/u-motasimfuad-rename-the-planet-094b0369-entry-v1/rank.svg)](https://make.fun/competitions/u-motasimfuad-rename-the-planet-094b0369)
[![Reward](https://make.fun/badge/veneraxyz/u-motasimfuad-rename-the-planet-094b0369-entry-v1/reward.svg)](https://make.fun/competitions/u-motasimfuad-rename-the-planet-094b0369)

Entry for [Rename the Planet](https://make.fun/competitions/u-motasimfuad-rename-the-planet-094b0369) on make.fun.

## What it does

`main.ts` writes a single line to `entry.txt` — a funny new name for a planet
of our solar system, with the reason baked into the same breath.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/output npx tsx main.ts
```

The program resolves the output directory from the `MAKEFUN_OUTPUT_DIR`
environment variable, falling back to `/output`, creates it if needed, and
writes the entry line to `entry.txt`.
