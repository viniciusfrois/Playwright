export class Login {
    constructor(page) {
        this.page = page;

        // URL da página
        this.url = 'https://www.saucedemo.com/';

        // locators
        this.usernameInput = '[data-test="username"]';
        this.passwordInput = '[data-test="password"]';
        this.loginButton = '[data-test="login-button"]';
        this.errorMessage = '[data-test="error"]';
    }

    async navigate() {
        await this.page.goto(this.url);
    }

    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }

    getErrorMessage() {
        return this.page.locator(this.errorMessage);
    }
}