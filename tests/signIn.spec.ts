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

  // Sign In Tests
  signInTestData.forEach(({ testName, email, password, expectedResult }) => {
    test(`Sign In Test: ${testName}`, async ({ page , context}) => {
      const basePage = new BasePage(page, context);
      await basePage.goTo('https://my-stage.tractive.com/#/');

      const signInPage = new SignInPage(page);
      await signInPage.fillSignInForm(email, password);

      if (expectedResult === 'success') {
        await expect(page.getByRole('banner').getByText('Sign Out')).toBeVisible();
      } else {
        await expect(page.locator('text=Invalid email or password')).toBeVisible();
      }
    });
  });

});
