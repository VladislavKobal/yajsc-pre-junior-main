export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.titleElement = this.page.locator('.title');
    this.itemsElements = this.page.locator('.inventory_item');
  }

  /**
   * Task
   * Fix below method `getNumberOfItemsOnPage` by adding:
   * 1. `const` variable `quantity` and it's value should be result of the `count` method called at `this.itemsElements` with `await` keyword
   * 2. return `quantity`;
   */
  async getNumberOfItemsOnPage() {
    const quantity = await this.itemsElements.count();
  }
}

/**
 * Useful links:
 * - export statement - https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
 * - export and import - https://www.programiz.com/javascript/modules
 */
