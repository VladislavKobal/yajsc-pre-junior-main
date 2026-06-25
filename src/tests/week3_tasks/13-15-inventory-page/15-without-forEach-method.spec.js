const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./Login.page');
const { InventoryPage } = require('./Inventory.page');

test('[YAJSC-15] should display all products (with pages and allTextContents method instead forEach)', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  const userCredentials = {
    username: 'standard_user',
    password: 'secret_sauce',
  };

  await page.goto('https://www.saucedemo.com/');

  await loginPage.performLogin(userCredentials.username, userCredentials.password);

  const expectedItemsNames = [
    'Sauce Labs Backpack',
    'Sauce Labs Bike Light',
    'Sauce Labs Bolt T-Shirt',
    'Sauce Labs Fleece Jacket',
    'Sauce Labs Onesie',
    'Test.allTheThings() T-Shirt (Red)',
  ];

  const actualProductsNames = await inventoryPage.getProductsNames();

  /**
   * Task 15:
   * Fix below code by using `toEqual` method to compare 2 arrays: `actualProductsNames` and `expectedItemsNames`
   * https://playwright.dev/docs/api/class-genericassertions#generic-assertions-to-equal
   */
  expect(actualProductsNames, 'Items names are not correct').toEqual(expectedItemsNames);
});
