const { test, expect } = require('@playwright/test');

const performLogin = async (page, username, password) => {
  const usernameElement = page.locator('#user-name');
  const passwordElement = page.locator('#password');
  const loginButtonElement = page.locator('#login-button');

  await usernameElement.fill(username);
  await passwordElement.fill(password);
  await loginButtonElement.click();
};

const getNumberOfProductNameElements = async (page) => {
  const productNameElements = page.locator('[data-test="inventory-item-name"]');

  const numberOfProductElements = await productNameElements.count();
  return numberOfProductElements;
};

/**
 * Task 10:
 * Implement function `getProductsNames`
 * It should have one argument - `page` and it's body should contain code that:
 * 1. const variable `productNameElements` and it's value should be result of `page.locator` method with a proper string
 *    as in the previous task
 * 2. const variable `numberOfProductElements` and it's value should be result of the `getNumberOfProductNameElements`
 *    function with `await` keyword
 * 3. const variable `actualProductsNames` and it's value should be an empty array
 * 4. `for` loop that iterates over indexes starting from 0 till `numberOfProductElements`
 *    4.1. add elements to `actualProductsNames` by using `push` method (NOTE: already implemented)
 * 5. return `actualProductsNames`
 * hint: you can copy the code from any previous test
 */
const getProductsNames = async (page) => {
  // enter you code here

  for (let i/* enter necessary code here */; i/* enter necessary code here */; i/* enter necessary code here */) {
    actualProductsNames.push(await productNameElements.nth(i).textContent());
  }

  // enter you code here
}

test('[YAJSC-10] should display all products (with function returning array)', async ({ page }) => {
  const userCredentials = {
    username: 'standard_user',
    password: 'secret_sauce',
  };

  await page.goto('https://www.saucedemo.com/');

  await performLogin(page, userCredentials.username, userCredentials.password);

  const expectedItemsNames = [
    'Sauce Labs Backpack',
    'Sauce Labs Bike Light',
    'Sauce Labs Bolt T-Shirt',
    'Sauce Labs Fleece Jacket',
    'Sauce Labs Onesie',
    'Test.allTheThings() T-Shirt (Red)',
  ];

  // Implemented function is invoked (called) here
  const actualProductsNames = await getProductsNames(page);

  /**
   * Task 10.1:
   * Fix below `for-of` loop
   * It should iterate over array of `expectedItemsNames` getting `expectedProduct` element
   */
  for (let expectedProduct /* enter necessary code here */) {
    expect(actualProductsNames, 'Item info is not correct').toContain(/* remove this comment - put variable `expectedProduct` here */);
  }
});

/**
 * Useful links:
 * - Array.push() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 * - for...of loop - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 * - another article about for...of loop - https://www.programiz.com/javascript/for-of
 */
