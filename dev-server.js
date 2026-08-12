import { createReadStream, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';

const PORT = Number(process.env.PORT) || 40828;
const ROOT = join(import.meta.dirname, 'html');

const MIME_TYPES = {
  '.css': 'text/css',
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain',
};

const server = createServer((request, response) => {
  const { pathname } = new URL(request.url, `http://localhost:${PORT}`);
  const relative = normalize(decodeURIComponent(pathname)).replace(
    /^(\.\.[/\\])+/,
    '',
  );
  let filename = join(ROOT, relative);

  try {
    if (statSync(filename).isDirectory()) {
      filename = join(filename, 'index.html');
    }
    const stats = statSync(filename);
    response.writeHead(200, {
      'content-length': stats.size,
      'content-type':
        MIME_TYPES[extname(filename)] ?? 'application/octet-stream',
    });
    createReadStream(filename).pipe(response);
  } catch {
    response.writeHead(404, { 'content-type': 'text/plain' });
    response.end('Not found');
  }
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console -- dev server entry point
  console.log(`Serving html/ on http://localhost:${PORT}`);
});
