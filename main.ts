// The Long Roast: Lawmakers and the File They Cannot Convert
// Writes one satirical sentence to /output/entry.txt.
// Gate: 1 to 320 characters, one sentence, UTF-8.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const line =
  "The committee that will write the law on artificial intelligence spent its morning recess asking an intern how to save a Word document as a PDF, then voted unanimously that the technology must be stopped before it learns to do that too.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
