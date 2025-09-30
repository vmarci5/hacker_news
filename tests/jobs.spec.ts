import { test, expect } from '@playwright/test';

test('jobs', async ({ page }) => {
  await page.goto('http://localhost:3000/jobs');
  await expect(page.getByText('Hacker NewsNewPastCommentsAskShowJobsSubmitLogin')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: 'GuidelinesFAQListsAPISecurityLegalApply to YCContact' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: 'These are jobs at YC startups' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Hacker News', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Jobs .' }).getByRole('button')).toBeVisible();
  await expect(page.getByRole('main')).toContainText('These are jobs at YC startups. See more at Jobs.');
  await expect(page.getByRole('navigation', { name: 'pagination' }).first()).toBeVisible();
  await page.getByRole('link', { name: '2', exact: true }).first().click();
  await page.getByRole('link', { name: 'Go to previous page' }).first().click();
  await page.getByRole('link', { name: 'Go to next page' }).first().click();
  await page.getByRole('link', { name: '1' }).first().click();
  await page.getByRole('link', { name: 'Jobs .' }).getByRole('button').click();
  await page.goto('http://localhost:3000/jobs');
  await expect(page.getByRole('navigation', { name: 'pagination' }).nth(1)).toBeVisible();
});