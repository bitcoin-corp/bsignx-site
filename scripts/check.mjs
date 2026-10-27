// Static site check: every local asset referenced by index.html exists.
import { readFileSync, existsSync } from 'node:fs';
const html = readFileSync('index.html', 'utf8');
const refs = [...html.matchAll(/(?:src|href)="\/([^"#]+)"/g)].map(m => m[1]);
const missing = refs.filter(r => !existsSync(r));
if (missing.length) { console.error('Missing:', missing); process.exit(1); }
console.log(`ok: ${refs.length} local refs`);
