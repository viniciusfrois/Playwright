import { test, expect } from '@playwright/test';
import { Login } from '../pages/login';

test('Login com credenciais inválidas', async ({ page }) => {
  // Arrange
  const login = new Login(page);
  await login.navigate(); 

  // Act
  await login.login('invalid_user', 'invalid_password');

  // Assert
  await expect(login.getErrorMessage())
    .toContainText('Epic sadface');
});

test('Login com credenciais válidas', async ({ page }) => {
  // Arrange
  const login = new Login(page);
  await login.navigate();

  // Act
  await login.login('standard_user', 'secret_sauce');

  // Assert
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});