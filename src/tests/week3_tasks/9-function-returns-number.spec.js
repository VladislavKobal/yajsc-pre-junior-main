const { test, expect } = require('@playwright/test');

const performLogin = async (page, username, password) => {
  const usernameElement = page.locator('#user-name');
  const passwordElement = page.locator('#password');
  const loginButtonElement = page.locator('#login-button');

  await usernameElement.fill(username);
  await passwordElement.fill(password);
  await loginButtonElement.click();
};

/**
 * Task 9:
 * Implement function `getNumberOfProductNameElements`
 * It should have one argument - `page` and it's body should contain code that:
 * 1. const variable `productNameElements` and it's value should be result of `page.locator` method with a proper string as in the previous task
 * 2. const variable `numberOfProductElements` and it's value should be result of the `count` method
 * called at `productNameElements` with `await` keyword
 * 3. return `numberOfProductElements`
 * hint: you can copy the code from any previous test
 */
const getNumberOfProductNameElements = async (page) => {
  const productNameElements = page.locator('[data-test="inventory-item-name"]');
  const numberOfProductElements = await productNameElements.count();
  return numberOfProductElements;
};

test('[YAJSC-9] should contain all items names on the page (with function returning number)', async ({ page }) => {
  const userCredentials = {
    username: 'standard_user',
    password: 'secret_sauce',
  };

  const expectedItemsNames = [
    'Sauce Labs Backpack',
    'Sauce Labs Bike Light',
    'Sauce Labs Bolt T-Shirt',
    'Sauce Labs Fleece Jacket',
    'Sauce Labs Onesie',
    'Test.allTheThings() T-Shirt (Red)',
  ];

  await page.goto('https://www.saucedemo.com/');
  await performLogin(page, userCredentials.username, userCredentials.password);

  // Implemented function is invoked (called) here
  const numberOfProductElements = await getNumberOfProductNameElements(page);

  const productNameElements = page.locator('[data-test="inventory-item-name"]');
  for (let i = 0; i < numberOfProductElements; i++) {
    // Next line: Gets text for i-th element with selector `'[data-test="inventory-item-name"]'`
    const actualProduct = await productNameElements.nth(i).textContent();
    expect(actualProduct, `Displayed item [${i}] name is not correct`).toEqual(expectedItemsNames[i]);
  }
});

/**
 * Useful links:
 * - return statement - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
 * - about async/await - https://www.geeksforgeeks.org/async-await-function-in-javascript/
 * - locator.nth(i) - https://playwright.dev/docs/api/class-locator#locator-nth
 * - locator.textContent() - https://playwright.dev/docs/api/class-locator#locator-text-content
 */
