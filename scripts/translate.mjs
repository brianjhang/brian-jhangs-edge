// Placeholder for zh-TW -> zh-CN / en translator.
// Wire your provider via TRANSLATE_API_URL + TRANSLATE_API_KEY envs.
import fs from "node:fs/promises";
import path from "node:path";

async function translateText(text, target) {
  // TODO: call your translation API
  return text; // no-op for now
}

async function processFile(file) {
  const raw = await fs.readFile(file, "utf-8");
  const cn = await translateText(raw, "zh-CN");
  const en = await translateText(raw, "en");
  const dir = path.dirname(file);
  const base = path.basename(file);
  const cnDir = dir.replace("/zh-TW/", "/zh-CN/");
  const enDir = dir.replace("/zh-TW/", "/en/");
  await fs.mkdir(cnDir, { recursive: true });
  await fs.mkdir(enDir, { recursive: true });
  await fs.writeFile(path.join(cnDir, base), cn, "utf-8");
  await fs.writeFile(path.join(enDir, base), en, "utf-8");
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p);
    if (e.isFile() && p.endsWith(".mdx")) await processFile(p);
  }
}

// Start with daily zh-TW content
const ROOT = "src/content/daily";
walk(ROOT).catch(e=>{ console.error(e); process.exit(1); });
