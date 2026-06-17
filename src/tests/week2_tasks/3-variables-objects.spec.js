import { expect, test } from '@playwright/test';

test('[YAJSC-3] should login successfully (with const variable and complex data type (object))', async ({ page }) => {
  /**
   * Task 3:
   * Create `const` variable `userCredentials` object with:
   * property `username` with value 'standard_user'
   * and
   * property `password` with value 'secret_sauce'
   */
  // write your code below this line

  const userCredentials = {
    username: 'standard_user',
    password: 'secret_sauce'
  };
  const expectedItemsQuantity = 6;

  await page.goto('https://www.saucedemo.com/');
  /**
   * Task 3.1:
   * Use `username` and `password` from `userCredentials` object in the below code
   */
  await page.locator('#user-name').fill(userCredentials.username);
  await page.locator('#password').fill(userCredentials.password);
  await page.locator('#login-button').click();

  await expect(page.locator('.title'), 'Inventory Page Title is not visible')
    .toBeVisible();

  expect(await page.locator('.inventory_item').count(), 'Number of items on the page is not correct')
    .toBeGreaterThanOrEqual(1);
  await expect(page.locator('.inventory_item'), 'Number of items on the page is not correct')
    .toHaveCount(expectedItemsQuantity);
});

/**
 * Useful links:
 * - about objects in JS - https://javascript.info/object
 * - about objects in simple words - https://www.programiz.com/javascript/object
 */
