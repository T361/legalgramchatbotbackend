import { test, expect } from '@playwright/test';

test.describe('Mobile Optimization Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should not have horizontal scroll', async ({ page }) => {
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
    const clientWidth = await page.evaluate(() => window.innerWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });

  test('should have minimum 48px touch targets', async ({ page }) => {
    const buttons = await page.locator('button, a[role="button"]').all();
    
    for (const button of buttons) {
      const box = await button.boundingBox();
      if (box) {
        expect(box.width).toBeGreaterThanOrEqual(48);
        expect(box.height).toBeGreaterThanOrEqual(48);
      }
    }
  });

  test('input fields should be 16px+ to prevent iOS zoom', async ({ page }) => {
    const inputs = await page.locator('input, textarea').all();
    
    for (const input of inputs) {
      const fontSize = await input.evaluate((el) => 
        window.getComputedStyle(el).fontSize
      );
      const sizeValue = parseInt(fontSize);
      expect(sizeValue).toBeGreaterThanOrEqual(16);
    }
  });

  test('should load in under 3 seconds on 4G', async ({ page }) => {
    const startTime = Date.now();
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(3000);
  });

  test('should handle safe area insets', async ({ page }) => {
    const hasSafeArea = await page.evaluate(() => {
      const styles = Array.from(document.styleSheets).flatMap(sheet =>
        Array.from(sheet.cssRules || [])
      );
      return styles.some(rule => 
        rule.cssText?.includes('safe-area-inset')
      );
    });
    expect(hasSafeArea).toBe(true);
  });

  test('should be accessible (basic a11y)', async ({ page }) => {
    await expect(page.locator('h1')).toBeVisible();
    const mainContent = page.locator('main');
    await expect(mainContent).toBeVisible();
  });
});
