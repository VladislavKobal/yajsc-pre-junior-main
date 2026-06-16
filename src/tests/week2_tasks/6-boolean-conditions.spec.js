import { expect, test } from '@playwright/test';

test.describe('Logical Operators', () => {
  // NOTE: below block will be launched before every test in the describe (see line above) section
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  /**
   * Task 6.1:
   * Update below 2 objects in array so that
   * every object contains property `isUserValid`.
   * For case with 'standard_user'   - `isUserValid` should be `true`
   * For case with 'locked_out_user' - `isUserValid` should be `false`
   */
  [
    {
      isUserValid: true,
      username: 'standard_user',
      password: 'secret_sauce',

    },
    {
      isUserValid: false,
      username: 'locked_out_user',
      password: 'secret_sauce',

    }
  ].forEach(userData => {
    test(`[YAJSC-6] should ${userData.isUserValid ? '' : 'not'} login with ${userData.username} (with boolean property)`, async ({ page }) => {
      await page.locator('#user-name').fill(userData.username);
      await page.locator('#password').fill(userData.password);
      await page.locator('#login-button').click();

      const errorLocator = page.locator('[data-test="error"]');

      /**
       * Task 6.2:
       * Update below `if-else` statement so that it performs verification whether `isUserValid` equals `false`
       * in case user is not valid - test will verify error message text (line 41)
       * in case of valid user     - test will verify error message text is not visible (line 43)
       */
      if (userData.isUserValid === false) {
        await expect(errorLocator).toContainText('Epic sadface: Sorry, this user has been locked out.\n');
      } else {
        await expect(errorLocator).toBeVisible({ visible: false });
      }
    });
  });
});

/**
 * Useful links:
 * - logical operators in JS - https://www.programiz.com/javascript/comparison-logical
 * - if...else statement - https://www.programiz.com/javascript/if-else
 * - expect(...).toContainText - https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-contain-text
 * - expect(...).toBeVisible - https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-be-visible
 */
