import { test, expect } from '@playwright/test';

test('past', async ({ page }) => {
  await page.goto('http://localhost:3000/past');
  await expect(page.getByText('Hacker NewsNewPastCommentsAskShowJobsSubmitLogin')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: 'GuidelinesFAQListsAPISecurityLegalApply to YCContact' })).toBeVisible();
  await page.getByRole('link', { name: '2', exact: true }).first().click();
  await page.getByRole('link', { name: '18' }).first().click();
  await page.getByRole('link', { name: 'Go to previous page' }).first().click();
  await page.getByRole('link', { name: 'Go to next page' }).first().click();
  await page.getByRole('link', { name: '1', exact: true }).first().click();
  await page.getByRole('link', { name: '2', exact: true }).nth(1).click();
  await page.getByRole('link', { name: '18' }).nth(1).click();
  await page.getByRole('link', { name: 'Go to previous page' }).nth(1).click();
  await page.getByRole('link', { name: 'Go to next page' }).nth(1).click();
  await page.getByRole('link', { name: '1', exact: true }).nth(1).click();
});