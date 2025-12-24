import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/__tests__/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },

  projects: [
    // Mobile Safari - iPhone 14 Pro Max
    {
      name: 'Mobile Safari - iPhone 14 Pro Max',
      use: { 
        ...devices['iPhone 14 Pro Max'],
        viewport: { width: 430, height: 932 },
      },
    },
    
    // Mobile Safari - iPhone SE (Small screen)
    {
      name: 'Mobile Safari - iPhone SE',
      use: { 
        ...devices['iPhone SE'],
        viewport: { width: 375, height: 667 },
      },
    },
    
    // Android Chrome - Pixel 7
    {
      name: 'Mobile Chrome - Pixel 7',
      use: { 
        ...devices['Pixel 7'],
        viewport: { width: 412, height: 915 },
      },
    },
    
    // Android Chrome - Galaxy S22
    {
      name: 'Mobile Chrome - Samsung Galaxy S22',
      use: { 
        ...devices['Galaxy S22'],
        viewport: { width: 360, height: 800 },
      },
    },
  ],

  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
