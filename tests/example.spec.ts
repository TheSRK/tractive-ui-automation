import { test, expect } from '@playwright/test';
import { CreatAccountPage } from '../pages/CreateAccount.page';
import { BasePage } from '../pages/BasePage';

test('has title', async ({ page, context }) => {
  const basePage = new BasePage(page, context);
  basePage.setCookies();
  await basePage.goTo('https://my-stage.tractive.com/#/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Tractive GPS - Sign In - Find your lost dog and cat');
});