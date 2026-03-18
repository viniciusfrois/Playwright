import {test, expect} from '@playwright/test';
import { Login } from '../pages/login';
import { Cart } from '../pages/cart';

test('Adicionar 2 itens no carrinho', async ({ page }) => {
    // Arrange
    const login = new Login(page);
    const cart = new Cart(page);
    await login.navigate();
    await login.login('standard_user', 'secret_sauce');

    // Act
    await cart.addItem('sauce-labs-backpack');
    await cart.addItem('sauce-labs-bike-light');

    // Assert   
    const cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    await expect(cartBadge).toBeVisible();
    await expect(cartBadge).toHaveText('2');
});  