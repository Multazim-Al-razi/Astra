import { test, expect } from '@playwright/test';

test('homepage has title and hero section', async ({ page }) => {
    // Log browser console to stdout
    page.on('console', msg => console.log(`Browser console: ${msg.text()}`));

    console.log('Navigating to /en...');
    await page.goto('/en', { waitUntil: 'networkidle', timeout: 60000 });

    const title = await page.title();
    console.log(`Page Title: "${title}"`);

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Astrabyte/, { timeout: 10000 });

    // Check for New Arrivals section
    await expect(page.getByText('New Arrivals', { exact: true })).toBeVisible({ timeout: 10000 });
});
