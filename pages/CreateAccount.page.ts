import {expect, type Page, type Locator} from '@playwright/test'

export class CreatAccountPage{
    readonly page: Page;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly emailField: Locator; 
    readonly passwordField: Locator;
    readonly createAccountButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.firstNameField = page.getByRole('textbox', {name: 'firstName'});
        this.lastNameField = page.getByRole('textbox', {name: 'lastName'});  
        this.emailField = page.getByRole('textbox', {name: 'email'});
        this.passwordField = page.getByRole('textbox', {name: 'password'});
        this.createAccountButton = page.getByRole('form', {name:'signUpForm'});     
    }

    public async fillCreateAccountForm(firstName: string, lastName: string, email: string, password: string){
        await this.firstNameField.fill( firstName);
        await this.lastNameField.fill(lastName);
        await this.emailField.fill(email);
        await this.passwordField.fill( password);
    }

    public async clickCreateAccountButton(){
        await this.createAccountButton.click();
    }

    

}