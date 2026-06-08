export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameElement = this.page.locator('#user-name');
    this.passwordElement = this.page.locator('#password');
    this.loginButtonElement = this.page.locator('#login-button');
  }

  async performLogin(username, password) {
    await this.usernameElement.fill(username);
    await this.passwordElement.fill(password);
    await this.loginButtonElement.click();
  }
}
