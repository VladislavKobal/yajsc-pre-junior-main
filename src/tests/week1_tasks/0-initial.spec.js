import { expect, test } from '@playwright/test';

// The `test()` function accepts two arguments:
// 1. Test title.
// 2. Test function with the `page` fixture. We can use `page` fixture to interact with the browser.
// Doc - https://playwright.dev/docs/test-fixtures#built-in-fixtures
// We can write tests without fixtures as well. Doc - https://playwright.dev/docs/test-fixtures#without-fixtures.
// However, using fixtures is recommended and more efficient. Doc - https://playwright.dev/docs/test-fixtures#with-fixtures
test('[YAJSC-0] should login successfully', async ({ page }) => {
  // Next Line: Opens `"https://www.saucedemo.com/"` page in browser using method `goto` and provided url
  await page.goto('https://www.saucedemo.com/');

  // Next Line: On the `page` finds text field element with selector `"#user-name"` using `locator` method
  // and enters data provided to the method `fill`
  await page.locator('#user-name').fill('standard_user');

  // Next Line: On the `page` finds text field element with selector `"#password"` using `locator` method
  // and enters data provided to the method `fill`
  await page.locator('#password').fill('secret_sauce');

  // Next Line: On the `page` finds button element with selector `"#login-button"` using `locator` method
  // and performs a click using `click` method
  await page.locator('#login-button').click();

  // Next Line: Verify using `expect` method that:
  // title element (on the `page` finds element with selector `".title"`) should be visible (using `toBeVisible` method)
  // expect(actualResult, errorMessage).[method to perform verification - could contain expected result]
  await expect(page.locator('.title'), 'Inventory Page Title is not visible').toBeVisible();
});

/**
 * Useful links:
 * - playwright `test` function - https://playwright.dev/docs/api/class-test
 * - `page.goto` - https://playwright.dev/docs/api/class-page#page-goto
 * - `page.locator` - https://playwright.dev/docs/api/class-page#page-locator
 * - `page.locator('...').fill` - https://playwright.dev/docs/api/class-locator#locator-fill
 * - `page.locator('...').click` - https://playwright.dev/docs/api/class-locator#locator-click
 * - playwright `expect` - https://playwright.dev/docs/test-assertions
 * - `expect(...).toBeVisible` - https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-be-visible
 */
