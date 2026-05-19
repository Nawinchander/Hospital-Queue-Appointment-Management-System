// Why E2E Testing?

// Tests:

// real browser
// complete flow
// actual user interaction


describe(
'Login Page',

() => {

  it(
    'Loads login page',

    () => {

      cy.visit(
        'http://localhost'
      );

      cy.contains(
        'Hospital Queue'
      );
    }
  );
});