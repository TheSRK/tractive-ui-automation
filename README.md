## Overview

This repository contains a test automation framework based on the Page Object Model (POM) using Playwright and TypeScript. It is designed for automating web application testing with a focus on maintainability, scalability, and readability.

## Project Structure

```
├── pages
│   ├── BasePage.ts
│   ├── SignInPage.ts
│   └── CreateAccountPage.ts
├── tests
│   ├── signin.spec.ts
│   └── createaccount.spec.ts
├── data
│   └── testData.ts
├── playwright.config.ts
├── package.json
└── README.md
```

### Directories and Files

- **pages/**: Contains Page Object classes for different pages of the application.
  - `BasePage.ts`: The base class with common methods like navigation and cookie handling.
  - `SignInPage.ts`: Page Object for the Sign In page.
  - `CreateAccountPage.ts`: Page Object for the Create Account page.
- **tests/**: Includes test files that use the Page Objects to perform test cases.
  - `signin.spec.ts`: Contains Sign In tests.
  - `createaccount.spec.ts`: Contains Create Account tests.
- **data/**: Holds test data for data-driven testing.
  - `testData.ts`: Exports arrays of test data objects.
- **playwright.config.ts**: Configuration file for Playwright.
- **package.json**: Lists project dependencies and scripts.

## Installation

### Prerequisites

- **Node.js** (version 16 or later)
- **npm** package manager

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

## Usage

### Running Tests

Execute all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/signin.spec.ts
```

### Test Reports

Generate an HTML report after tests have run:

```bash
npx playwright show-report
```

## Writing Tests

- **Page Objects**: Create classes in the `pages/` directory that represent individual pages.
- **Test Data**: Define test data in the `data/testData.ts` file.
- **Tests**: Write test cases in the `tests/` directory, utilizing Page Objects and test data.

Example test case (`signin.spec.ts`):

```typescript
import { test, expect } from '@playwright/test';
import { SignInPage } from '../pages/SignInPage';

test('Sign In with valid credentials', async ({ page }) => {
  const signInPage = new SignInPage(page);
  await signInPage.signIn('user@example.com', 'password123');
  await expect(page.locator('text=Sign Out')).toBeVisible();
});
```

## Best Practices

- **Keep Tests Simple**: Test files should contain only the necessary steps and assertions.
- **Reuse Code**: Utilize methods in Page Objects to avoid duplication.
- **Organize Data**: Keep test data separate from test logic for clarity.
- **Consistent Naming**: Use clear and consistent names for classes, methods, and variables.
