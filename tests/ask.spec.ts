import { test, expect } from '@playwright/test';

test('ask', async ({ page }) => {
  await page.goto('http://localhost:3000/ask');
  await expect(page.getByText('Hacker NewsNewPastCommentsAskShowJobsSubmitLogin')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: 'GuidelinesFAQListsAPISecurityLegalApply to YCContact' })).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'pagination' }).first()).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'pagination' }).nth(1)).toBeVisible();
  await expect(page.locator('div').filter({ hasText: '1Ask HN: What are you working' }).nth(1)).toBeVisible();
});