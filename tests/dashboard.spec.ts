import { test, expect } from '@playwright/test';

test('dashboard', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page).toHaveTitle(/Hacker News/);
  await expect(page.getByRole('main')).toContainText('Welcome to Hacker News!');
  await expect(page.getByRole('main')).toContainText('Dive in and start exploring the latest posts, ideas, and discussions from the tech world.');
  await expect(page.getByRole('img', { name: 'Hacker News', exact: true })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: '1Disqus Turned My Blog into' }).nth(1)).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'pagination' }).first()).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'pagination' }).nth(1)).toBeVisible();
  await expect(page.locator('div').filter({ hasText: 'GuidelinesFAQListsAPISecurityLegalApply to YCContact' })).toBeVisible();
  await page.getByRole('link', { name: '2', exact: true }).first().click();
  await page.getByRole('link', { name: 'Go to next page' }).first().click();
  await page.getByRole('link', { name: 'Go to previous page' }).first().click();
  await page.getByRole('link', { name: '24' }).first().click();
  await page.getByRole('link', { name: '1' }).first().click();
});