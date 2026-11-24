// e2e web server: serve the fixture API, build the portal against it (so the
// role pages are prerendered), then run `astro preview`. The browser's own API
// calls are intercepted by page.route in the spec; this server only feeds the build.
import http from 'node:http';
import { spawn } from 'node:child_process';
import { ROLES } from './fixtures.mjs';

const api = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://x');
  const send = (status, body) => { res.writeHead(status, { 'content-type': 'application/json' }); res.end(JSON.stringify(body)); };
  if (url.pathname === '/public/roles') return send(200, { data: ROLES.map(({ public_description, company_profile, apply_path, questions, questions_version, ...row }) => row) });
  const role = ROLES.find((r) => url.pathname === `/public/roles/${r.slug}`);
  return role ? send(200, { data: role }) : send(404, { error: { code: 'not_found' } });
});
await new Promise((ok) => api.listen(4799, '127.0.0.1', ok));

const env = { ...process.env, PUBLIC_API_ENDPOINT: 'http://127.0.0.1:4799', PUBLIC_LOG_ENDPOINT: '', PUBLIC_ANALYTICS_SRC: '' };
// Async on purpose: a sync spawn would block this process's event loop and the
// fixture API above could not answer the build's requests.
const status = await new Promise((ok) => spawn('pnpm', ['exec', 'astro', 'build'], { env, stdio: 'inherit', shell: true }).on('exit', ok));
if (status !== 0) process.exit(status ?? 1);
const preview = spawn('pnpm', ['exec', 'astro', 'preview', '--port', '4400', '--host', '127.0.0.1'], { env, stdio: 'inherit', shell: true });
preview.on('exit', (code) => { api.close(); process.exit(code ?? 0); });
