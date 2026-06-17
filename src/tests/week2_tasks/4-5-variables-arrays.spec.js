import { expect, test } from '@playwright/test';

test.describe('Mastering arrays', () => {
  const userCredentials = {
    username: 'standard_user',
    password: 'secret_sauce',
  };

  /**
   * Task 4:
   * Create `const` variable `expectedItemsNames` with value as array of strings.
   * This array should contain at least one or all items names displayed on the page
   * e.g. 'Sauce Labs Backpack', 'Sauce Labs Fleece Jacket'
   */
  // write your code below this line
  const expectedItemsNames = ['Sauce Labs Backpack', 'Sauce Labs Fleece Jacket'];

  // NOTE: below block will be launched before every test in the describe (see line above) section
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill(userCredentials.username);
    await page.locator('#password').fill(userCredentials.password);
    await page.locator('#login-button').click();
  });

  test('[YAJSC-4] should contain SOME itemS nameS on the page (with array)', async ({ page }) => {
    const displayedItemsName = await page.locator('[data-test="inventory-item-name"]').allTextContents();
    /**
     * Task 4.1:
     * Use `expectedItemsNames` in the below code
     */
    expect(displayedItemsName, 'Displayed item names does not contain expected values')
      .toEqual(expect.arrayContaining(expectedItemsNames));
  });

  test('[YAJSC-5] should contain SPECIFIC item name on the page (with array)', async ({ page }) => {
    const displayedItemsName = await page.locator('[data-test="inventory-item-name"]').allTextContents();
    /**
     * Task 4.2:
     * Use `expectedItemsNames` with some index in the below code
     */
    expect(
      displayedItemsName,
      'Displayed item names does not contain expected value',
    ).toContain(
      expectedItemsNames[0]
    );
  });
});

/**
 * Useful links:
 * - about arrays in JS - https://www.programiz.com/javascript/array
 * - expect.arrayContaining - https://playwright.dev/docs/api/class-genericassertions#generic-assertions-array-containing
 * - expect(...).toContain - https://playwright.dev/docs/api/class-genericassertions#generic-assertions-to-contain-1
 */
