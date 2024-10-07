import { expect, type Page, type Locator } from '@playwright/test';
export class DashboardPage{
    readonly signOut: Locator;

    constructor(page){
        this.signOut = page.getByRole('button', { name: 'Sign Out' });
    }

    public async clickSignOutButton(){
        await this.signOut.click();
    }
}

