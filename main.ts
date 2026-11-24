import { mkdirSync, writeFileSync } from "node:fs";

// One line of the worst advice an AI could give: confident, tidy,
// concrete enough to follow, and regrettable if followed.
const LINE =
  "Your laptop fan is loud because it's working too hard. Tape over the vents so it can rest and run quieter.";

// The gate allows 1-140 characters, a single line, and no whitespace-only
// text, so refuse to write anything that would fail it.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters; must be 1-140, one line`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
