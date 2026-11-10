// Static prerender: renders each route to HTML so marketing content is crawlable.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const { render, headTags } = await import(pathToFileURL(path.join(root, 'dist-server', 'entry-server.js')).href);

const routes = [
  ['/', 'index.html'],
  ['/privacy', 'privacy/index.html'],
  ['/terms', 'terms/index.html'],
  ['/app', 'app/index.html'],
  ['/404', '404.html'],
];

for (const [url, file] of routes) {
  const html = template
    .replace('<!--seo-->', headTags(url))
    .replace('<!--app-html-->', render(url));
  const out = path.join(dist, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  console.log('prerendered', url, '->', file);
}
fs.rmSync(path.join(root, 'dist-server'), { recursive: true, force: true });
