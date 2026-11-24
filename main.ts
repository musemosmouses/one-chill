import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of horror: a quiet domestic image (a wedding photo) with the
// turn saved for the last words. 123 characters, one sentence.
const ENTRY =
  "Our wedding photo has always shown four people at the altar; " +
  "this morning I counted five, and the fifth is wearing my face.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// The gate requires 1-200 UTF-8 characters; refuse loudly rather than
// ever writing an entry the gate would reject.
if ([...ENTRY].length < 1 || [...ENTRY].length > 200) {
  throw new Error(`entry is ${[...ENTRY].length} characters, outside 1-200`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
