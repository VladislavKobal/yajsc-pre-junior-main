import { expect, test } from '@playwright/test';

// The `test()` function accepts two arguments:
// 1. Test title.
// 2. Test function with the `page` fixture. We can use `page` fixture to interact with the browser.
// Doc - https://playwright.dev/docs/test-fixtures#built-in-fixtures
// We can write tests without fixtures as well. Doc - https://playwright.dev/docs/test-fixtures#without-fixtures.
// However, using fixtures is recommended and more efficient. Doc - https://playwright.dev/docs/test-fixtures#with-fixtures
test('[YAJSC-1] should login successfully (with let & const variables and primitive data types)', async ({ page }) => {
  /**
   * Task 1.1:
   * Create `let` variable `username` with value 'standard_user'
   */
  // write your code below this line
  let username = 'standard_user';
  /**
   * Task 1.2:
   * Create `const` variable `password` with value 'secret_sauce'
   */
  // write your code below this line
  const password = 'secret_sauce';

  // Next Line: Opens 'https://www.saucedemo.com/' page in browser using method `goto` and provided url
  await page.goto('https://www.saucedemo.com/');

  /**
   * Task 1.3:
   * Use `username` variable in the below code
   */
  // Next Line: On the `page` finds text field element with selector '#user-name' using `locator` method
  // and enters data provided to the method `fill`
  await page.locator('#user-name').fill(username);

  /**
   * Task 1.3:
   * Use `password` variable in the below code
   */
  // Next Line: On the `page` finds text field element with selector '#password' using `locator` method
  // and enters data provided to the method `fill`
  await page.locator('#password').fill(password);

  // Next Line: On the `page` finds button element with selector '#login-button' using `locator` method
  // and performs a click using `click` method
  await page.locator('#login-button').click();

  // Next Line: Verify using `expect` method that:
  // title element (on the `page` finds element with selector '.title') should be visible (using `toBeVisible` method)
  // expect(actualResult, errorMessage).[method to perform verification - could contain expected result]
  await expect(page.locator('.title'), 'Inventory Page Title is not visible').toBeVisible();

  // Next Line: Verify (`expect` method) that:
  // number of items on the page (on the `page` finds elementS with selector '.inventory_item' and get their quantity using `count` method)
  // should be greater than or equal to 1 (actual result)
  expect(await page.locator('.inventory_item').count(), 'Number of items on the page is not correct')
    .toBeGreaterThanOrEqual(1);
});

/**
 * Useful links:
 * - about `const` - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 * - about `let` - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 * - about strings - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 * - playwright `test` function - https://playwright.dev/docs/api/class-test
 * - `page.goto` - https://playwright.dev/docs/api/class-page#page-goto
 * - `page.locator` - https://playwright.dev/docs/api/class-page#page-locator
 * - `page.locator('...').fill` - https://playwright.dev/docs/api/class-locator#locator-fill
 * - `page.locator('...').click` - https://playwright.dev/docs/api/class-locator#locator-click
 * - playwright `expect` - https://playwright.dev/docs/test-assertions
 * - `expect(...).toBeVisible` - https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-be-visible
 * - `page.locator('...').count` - https://playwright.dev/docs/api/class-locator#locator-count
 * - `expect(...).toBeGreaterThanOrEqual` - https://playwright.dev/docs/api/class-genericassertions#generic-assertions-to-be-greater-than-or-equal
 */
