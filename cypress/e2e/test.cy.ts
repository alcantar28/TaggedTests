describe(`Google page`, () => {
  it(
    'should validate Google page',
    { tags: ['@integration', '@stage', '@prod'] },
    () => {
      cy.visit('https://www.google.com');
      cy.get('#APjFqb').type('Cypress').type('{enter}');
      cy.get('h1').should('contain', 'Search settings');
    }
  );
});
