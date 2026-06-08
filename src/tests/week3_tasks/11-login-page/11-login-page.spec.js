import { expect, test } from '@playwright/test';
import { LoginPage } from './Login.page';

test('[YAJSC-11] should login successfully (with login page)', async ({ page }) => {
  /**
   * Task 11:
   * Fix below code by adding `page` as an argument of `LoginPage` constructor
   */
  const loginPage = new LoginPage(/* remove this comment - put `page` here */);

  const userCredentials = {
    username: 'standard_user',
    password: 'secret_sauce',
  };
  const expectedItemsQuantity = 6;

  await page.goto('https://www.saucedemo.com/');

  /**
   * Task 11.1:
   * Part 1:
   * Open Login.page.js file and fix code there
   *
   * Part 2:
   * Fix below code by providing username and password as an arguments of `loginPage.performLogin` method
   * Use `userCredentials` object to get `username` and `password` properties
   */
  await loginPage.performLogin(/* remove this comment - and provide username and password */);

  await expect(page.locator('.title'), 'Inventory Page Title is not visible')
    .toBeVisible();

  expect(await page.locator('.inventory_item').count(), 'Number of items on the page is not correct')
    .toBeGreaterThanOrEqual(1);
  await expect(page.locator('.inventory_item'), 'Number of items on the page is not correct')
    .toHaveCount(expectedItemsQuantity);
});

/**
 * Useful links:
 * - `new` operator - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
 * - about classes in JS - https://www.programiz.com/javascript/classes
 */
