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