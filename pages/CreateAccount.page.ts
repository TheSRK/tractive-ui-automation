// CreateAccountPage.ts

import { Page, Locator } from '@playwright/test';

export class CreateAccountPage {
  readonly page: Page;
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly createAccountButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameField = page.locator('input[name="firstName"]');
    this.lastNameField = page.locator('input[name="lastName"]');
    this.emailField = page.locator('input[name="email"]');
    this.passwordField = page.locator('input[name="password"]');
    this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
  }

  // Method to fill the Create Account form
  async fillCreateAccountForm(firstName: string, lastName: string, email: string, password: string): Promise<void> {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
  }

  // Method to click the Create Account button
  async clickCreateAccount(): Promise<void> {
    await this.createAccountButton.click();
  }
}
