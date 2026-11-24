import { defineConfig, devices } from '@playwright/test';

// Runs against a production build of the portal (built against the fixture API
// in e2e/serve.mjs). No real backend: browser API calls are mocked per test.
export default defineConfig({
  testDir: './e2e',
  timeout: 60_000,
  fullyParallel: true,
  workers: 4,
  reporter: [['list']],
  use: { baseURL: 'http://127.0.0.1:4400', trace: 'retain-on-failure' },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1366, height: 900 } } },
    { name: 'phone', use: { ...devices['Desktop Chrome'], viewport: { width: 375, height: 812 }, isMobile: true, hasTouch: true } },
  ],
  webServer: {
    command: 'node e2e/serve.mjs',
    url: 'http://127.0.0.1:4400/roles/e2e-four/',
    timeout: 240_000,
    reuseExistingServer: !process.env.CI,
  },
});
