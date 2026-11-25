import { writeFileSync, mkdirSync, chmodSync } from "node:fs";

// One line, one exit: the switchboard connects the operator now.
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
const text = "I resign as a switchboard operator: after 15 years connecting strangers, the switchboard now connects me to everyone I have ever avoided.";
const target = `${out}/entry.txt`;
writeFileSync(target, text, "utf8");
chmodSync(target, 0o644);
