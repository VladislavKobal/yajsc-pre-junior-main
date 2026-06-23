export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameElement = this.page.locator('#user-name');
    this.passwordElement = this.page.locator('#password');
    this.loginButtonElement = this.page.locator('#login-button');
  }

  /**
   * Task
   * Fix below method `performLogin` by adding:
   * 1. add code that fills user password text field with `password`
   * 2. add code that clicks login button
   */
  async performLogin(username, password) {
    await this.usernameElement.fill(username);
    await this.passwordElement.fill(password);
    await this.loginButtonElement.click();
  };
}

/**
 * Useful links:
 * - about classes in JS - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class
 * - another one about classes -https://www.programiz.com/javascript/classes
 * - export statement - https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
 * - export and import - https://www.programiz.com/javascript/modules
 */
