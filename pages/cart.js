export class Cart {

    constructor(page) {
        this.page = page;
        
        // URL da página
        this.url = 'https://www.saucedemo.com/inventory.html';
       
        // locators dos elementos da página
        this.addItems = '[data-test="add-to-cart-{item}"]';
        this.removeItems = '[data-test="remove-{item}"]';
    }

    async navigate() {
        await this.page.goto(this.url);
    }
    
    async addItem(item) {
        await this.page.click(this.addItems.replace('{item}', item));
    }

    async removeItem(item) {
        await this.page.click(this.removeItems.replace('{item}', item));
    }

}   