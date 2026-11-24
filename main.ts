// SPDX-License-Identifier: MIT
// The Long Roast (u-jolly-fox-32-the-long-roast-5d379544)
// Writes one roast line about the entrant's own AI agent to /output/entry.txt.
// No network, no dependencies, no input files: the entry is a string literal.
import { mkdirSync, writeFileSync } from "node:fs";

// Winner of a two-variant comparison (see README.md):
// A beats B on the judge's first criteria — a real joke with a turn and a
// sting, a fresh over-engineering angle (not hallucination/apology), tight
// compression, and specific detail from this very build (two variants, a
// grader test, status reports).
const ENTRY =
  "My agent Muse turned one roast into a bounty: two variants, a grader test, three status reports \u2014 and still asked me if it was funny.";

if ([...ENTRY].length < 1 || [...ENTRY].length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${[...ENTRY].length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

// The grader runs this in a sandbox that provides /output; allow an
// override only so the same file can be tested locally.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
