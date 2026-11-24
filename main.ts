// Entry for "Charm the Commuter: Forecast a City That Isn't"
// Writes a one-line weather forecast for a city that does not exist to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "In Drowsington, expect light rain, heavy eyelids, and a 90% chance your bus arrives the very second you give up and start walking.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
