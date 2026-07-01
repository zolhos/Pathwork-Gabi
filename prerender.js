import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { render } from './dist/server/main-server.js';
import { content } from './src/data/content.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

// Ler o template do index.html client-side
const templatePath = toAbsolute('dist/index.html');
const template = fs.readFileSync(templatePath, 'utf-8');

// Renderizar o app estaticamente
const { html } = render();

// Preparar injeção do JSON-LD no Head estático
const schemaScript = `\n    <script type="application/ld+json" id="geo-schema-ld">${JSON.stringify(content.schema)}</script>\n  </head>`;
let renderedHtml = template.replace('</head>', schemaScript);

// Injetar o HTML pré-renderizado no div#root
renderedHtml = renderedHtml.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

// Gravar resultado final no dist/index.html
fs.writeFileSync(templatePath, renderedHtml);

// Excluir a pasta temporária de compilação SSR
const serverFolder = toAbsolute('dist/server');
if (fs.existsSync(serverFolder)) {
  fs.rmSync(serverFolder, { recursive: true, force: true });
}

console.log('Static pre-rendering (SSG) completed successfully! dist/index.html is now SEO/GEO optimized.');
