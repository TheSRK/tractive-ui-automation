import { BrowserContext, Page, Locator } from "@playwright/test";

export class BasePage {
    readonly page: Page;
    readonly context: BrowserContext;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
    }

    
    readonly cookies = [
        {
        name: 'interview',
        value: '7lBPV9iik6r9MNE5dKw9nzF9CstdlEJl', 
        domain : '.tractive.com',
        path: '/'
    }
]

    public async setCookies() {
        await this.context.addCookies(this.cookies);
    }

    public async goTo(url: string) {
        await this.page.goto(url);
    }


}