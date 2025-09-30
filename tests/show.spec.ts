import { test, expect } from '@playwright/test';

test('show', async ({ page }) => {
  await page.goto('http://localhost:3000/show');
  await expect(page.getByText('Please read theShow HN')).toBeVisible();
  await expect(page.getByRole('img', { name: 'Hacker News', exact: true })).toBeVisible();
  await expect(page.getByRole('main')).toContainText('Please read theShow HN rulesandtipsbefore posting. You can browse the newest Show HNshere.');
  await page.getByRole('button', { name: 'Show HN rules' }).click();
  await page.goto('http://localhost:3000/show');
  await page.getByRole('button', { name: 'tips' }).click();
  await page.goto('http://localhost:3000/show');
  await page.getByRole('button', { name: 'here' }).click();
  await page.goto('http://localhost:3000/show');
  await expect(page.getByRole('navigation', { name: 'pagination' }).first()).toBeVisible();
  await expect(page.getByText('Hacker NewsNewPastCommentsAskShowJobsSubmitLogin')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: 'GuidelinesFAQListsAPISecurityLegalApply to YCContact' })).toBeVisible();
  await page.getByRole('link', { name: '2' }).first().click();
  await page.getByRole('link', { name: 'Go to next page' }).first().click();
  await page.getByRole('link', { name: 'Go to previous page' }).first().click();
  await page.getByRole('link', { name: '1' }).first().click();
});