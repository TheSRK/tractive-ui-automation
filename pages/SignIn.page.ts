import {type Locator, type Page, expect} from '@playwright/test'

export class SignIn{
    readonly page: Page;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly signInButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page){
        this.page = page;
        this.emailField = page.locator('input[ng-model= form.email');
        this.passwordField = page.locator('input[ng-model= form.pwd]');
        this.signInButton = page.getByRole('form',{name: 'loginForm'});
        this.errorMessage = page.locator('div[ng-show="error"]');
    }

    public async fillSignInForm(email: string, password: string){
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
    }

    public async clickSignInButton(){
        await this.signInButton.click();
        
    }
}