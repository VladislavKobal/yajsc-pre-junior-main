import { expect, test } from '@playwright/test';

/**
 * Task 7:
 * Implement function `performLogin`
 * it's arguments should be `page`, `username` and `password`
 * and it's body should contain code that:
 * 1. fills username text field with `username`
 * 2. fills user password text field with `password`
 * 3. clicks login button
 * hint: you can copy the code from any previous test
 */
const performLogin = async (page, username, password) => {
  await page.locator('#user-name').fill(username);
  await page.locator('#password').fill(password);
  await page.locator('#login-button').click();
};

test.describe('Functions', () => {
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
    test(`[YAJSC-7] should ${userData.isUserValid ? '' : 'not'} login with ${userData.username} (with login function)`, async ({ page }) => {
      await page.goto('https://www.saucedemo.com/');

      // Implemented function is invoked (called) here
      await performLogin(page, userData.username, userData.password);

      const errorLocator = page.locator('[data-test="error"]');

      if (userData.isUserValid !== true) {
        await expect(errorLocator).toContainText('Epic sadface: Sorry, this user has been locked out.\n');
      } else {
        await expect(errorLocator).toBeVisible({ visible: false });
      }
    });
  });
});

/**
 * Useful links:
 * - about functions is JS - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
 * - about functions in JS in simple words - https://www.programiz.com/javascript/function
 * - Array.forEach - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */
