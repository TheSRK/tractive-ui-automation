// SignInPage.ts

import { Page, Locator, expect } from '@playwright/test';

export class SignInPage {
  readonly page: Page;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly signInButton: Locator;
  readonly errorMessage: Locator; 


  constructor(page: Page) {
    this.page = page;
    this.emailField = page.locator('input[type="email"]');
    this.passwordField = page.locator('input[type="password"]');
    this.signInButton = page.getByRole('button', { name: 'Sign In', exact: true });
    this.errorMessage = page.locator('div.toast-message[aria-label*="Oops!"]');
  }

  // Method to fill the sign in form
  async fillSignInForm(email: string, password: string): Promise<void> {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
  }

  // Method to click the Sign In button
  async clickSignIn(): Promise<void> {
    await this.signInButton.click();
  }

    // Method to validate error messages displayed on the UI
    async validateErrorMessage(): Promise<void> {
  
      await this.errorMessage.waitFor({ state: 'visible', timeout: 5000 });
      await expect(this.errorMessage).toBeVisible();
  
      // Log the text content of the error message
      const messageText = await this.errorMessage.textContent();
      console.log(`Error message text: ${messageText}`);
    }
}
