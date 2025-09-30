import { test, expect } from '@playwright/test';

test('navbar', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByText('Hacker NewsNewPastCommentsAskShowJobsSubmitLogin')).toBeVisible();
  await expect(page.locator('body')).toContainText('Hacker News');
  await expect(page.locator('body')).toContainText('New');
  await expect(page.locator('body')).toContainText('Past');
  await expect(page.locator('body')).toContainText('Ask');
  await expect(page.locator('body')).toContainText('Show');
  await expect(page.locator('body')).toContainText('Jobs');
  await expect(page.locator('body')).toContainText('Submit');
  await expect(page.locator('body')).toContainText('Login');
  await expect(page.getByText('NewPastCommentsAskShowJobsSubmit')).toBeVisible();
  await page.getByRole('link', { name: 'Hacker News Logo Hacker News' }).click();
  await page.getByRole('button', { name: 'New' }).click();
  await page.getByRole('button', { name: 'Past' }).click();
  await page.getByRole('button', { name: 'Ask' }).click();
  await page.getByRole('button', { name: 'Show' }).click();
  await page.getByRole('button', { name: 'Jobs' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Login', exact: true }).click();
});