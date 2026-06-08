import { expect, test } from '@playwright/test';

test('[YAJSC-2] should verify displayed amount of items on the page (with number variable)', async ({ page }) => {
  const username = 'standard_user';
  const password = 'secret_sauce';

  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill(username);
  await page.locator('#password').fill(password);
  await page.locator('#login-button').click();

  /**
   * Task 2:
   * Create `const` variable `expectedItemsQuantity` and assign a number value that represents number of items displayed on the page
   */
  // write your code below this line

  /**
   * Task 2.1:
   * Use `expectedItemsQuantity` variable in the below code
   */
  await expect(page.locator('.inventory_item'), 'Number of items on the page is not correct')
    .toHaveCount(/* remove this comment - put `expectedItemsQuantity` variable here */);
});

/**
 * Useful links:
 * - `expect(...).toHaveCount` https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-have-count
 * - about numbers in JS https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
 */
