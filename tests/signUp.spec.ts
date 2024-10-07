// example.spec.ts

import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { SignInPage } from '../pages/SignIn.page';
import { CreateAccountPage } from '../pages/CreateAccount.page';
import { signInTestData, createAccountTestData } from '../utils/testData';

test.describe('Tractive Sign In and Create Account Tests', () => {
  test.beforeEach(async ({ page, context }) => {
    const basePage = new BasePage(page, context);
    await basePage.setCookies();
  });

  // Create Account Tests
  createAccountTestData.forEach(({ testName, firstName, lastName, email, password, expectedResult }) => {
    test(`Create Account Test: ${testName}`, async ({ page, context }) => {
      const basePage = new BasePage(page, context);
      await basePage.goTo('https://my-stage.tractive.com/#/');

      await page.getByRole('link', { name: 'Create Account' }).click();

      const createAccountPage = new CreateAccountPage(page);
      await createAccountPage.fillCreateAccountForm(firstName, lastName, email, password);

      if (expectedResult === 'success') {
        await expect(page).toHaveURL(/.*dashboard/);
      } else {
        await expect(page.locator('text=Email already exists')).toBeVisible();
      }
    });
  });
});
