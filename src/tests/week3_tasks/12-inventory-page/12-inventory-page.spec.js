import { expect, test } from '@playwright/test';
import { LoginPage } from './Login.page';
import { InventoryPage } from './Inventory.page';

test('[YAJSC-12] should login successfully (with inventory page)', async ({ page }) => {
  const loginPage = new LoginPage(page);

  /**
   * Task 12:
   * Create a `const` variable `inventoryPage` and assign a `new` instance of `InventoryPage` class with provided `page` argument
   */
  // enter your code here

  const userCredentials = {
    username: 'standard_user',
    password: 'secret_sauce',
  };
  const expectedItemsQuantity = 6;

  await page.goto('https://www.saucedemo.com/');

  await loginPage.performLogin(userCredentials.username, userCredentials.password);

  /**
   * Task 12.1:
   * Use `inventoryPage` variable in the below code
   */
  await expect(/* remove this comment - use `inventoryPage` here*/.titleElement, 'Inventory Page Title is not visible').toBeVisible();

  /**
   * Task 12.2:
   * Part 1:
   * Open Inventory.page.js file and fix code there
   *
   * Part 2:
   * Fix below code by
   * calling `inventoryPage` and it's method `getNumberOfItemsOnPage` with `await` keyword
   */
  expect(/* remove this comment - put `inventoryPage.getNumberOfItemsOnPage()` with `await` here */,
    'Number of items on the page is not correct'
  ).toBeGreaterThanOrEqual(1);

  /**
   * Task 12.3:
   * Fix below code by
   * using `inventoryPage` and it's property `itemsElements`
   */
  await expect(/* remove this comment - put `inventoryPage.itemsElements` here */,
    'Number of items on the page is not correct',
  ).toHaveCount(expectedItemsQuantity);
});

/**
 * Useful links:
 * - about class constructor - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
 * - again about classes - https://www.programiz.com/javascript/classes
 * - about `new` operator - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
 */
