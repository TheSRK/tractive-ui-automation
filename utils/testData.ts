// testData.ts

export const signInTestData = [
    { testName: 'valid credentials', email: 'shargo3554+1@gmail.com', password: 'tractive2024!', expectedResult: 'success' },
    { testName: 'invalid credentials', email: 'shargo3554+2@gmail.com', password: 'wrongpassword', expectedResult: 'failure' },
  ];
  
  export const createAccountTestData = [
    { testName: 'valid account data', firstName: 'shargo2', lastName: 'ln', email: 'shargo3554+3@gmail.com', password: 'tractive2024!', expectedResult: 'success' },
    { testName: 'duplicate email', firstName: 'john', lastName: 'doe', email: 'john.doe@example.com', password: 'password123', expectedResult: 'failure' },
  ];
  