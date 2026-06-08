export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.titleElement = this.page.locator('.title');
    this.itemsElements = this.page.locator('.inventory_item_name');
  }

  async getNumberOfItemsOnPage() {
    const quantity = await this.itemsElements.count();
    return quantity;
  }

  /**
   * Task
   * Implement method `getProductsNames`
   * and it's body should contain code that:
   * 1. const variable `actualProductsNames` and it's value should be result of the `this.itemsElements.allTextContents`
   *    method with `await` keyword
   * 2. return `actualProductsNames`
   */
  async getProductsNames() {
    // enter you code here
  }
}
