const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./Login.page');
const { InventoryPage } = require('./Inventory.page');

test('[YAJSC-13] should display all products (with pages and for-of loop)', async ({ page }) => {
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

  /**
   * Task 13:
   * Open Inventory.page.js file in the same folder and fix code there so that below code works
   */
  const actualProductsNames = await inventoryPage.getProductsNames(page);

  for (let expectedProduct of expectedItemsNames) {
    expect(actualProductsNames, 'Item info is not correct').toContain(expectedProduct);
  }
});
