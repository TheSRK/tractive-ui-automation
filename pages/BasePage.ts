// BasePage.ts

import { Page, BrowserContext } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly context: BrowserContext;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
  }

  // Method to set cookies before navigating
  async setCookies(): Promise<void> {
    await this.context.addCookies([
      {
        name: 'interview',
        value: '7lBPV9iik6r9MNE5dKw9nzF9CstdlEJl',
        domain: '.tractive.com',
        path: '/',
        expires: Date.now() / 1000 + 3600, // 1 hour expiration
        httpOnly: true,
        secure: true,
        sameSite: 'Strict',
      },
    ]);
  }

  // Method to navigate to a given URL
  async goTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  // Method to sign out
  async signOut(): Promise<void> {
    await this.page.getByRole('banner').getByText('Sign Out').click();
    await this.page.getByRole('button', { name: 'Sign Out' }).click();
  }
}
