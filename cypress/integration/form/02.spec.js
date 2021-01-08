describe('Form testing', () => {
  it('should fill form', () => {
    cy.visit('/');

    const firstNameField = cy.findByTestId('first_name');
    firstNameField.type('Mruczysław 🐈');

    const lastNameField = cy.findByTestId('last_name');
    lastNameField.type('Kowalski');

    const submitButton = cy.findByRole('button', { name: /submit/i });
    submitButton.click();

    cy.findByText(/you should accept terms/i).should('exist');
  });
});
