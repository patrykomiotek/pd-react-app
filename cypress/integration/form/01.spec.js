describe('Open counter page', () => {
  it('Visits counter page', () => {
    const domain = 'http://localhost:3000';

    cy.visit(`${domain}/counter`);
    const button = cy.findByRole('button', { name: /➕/i });
    button.click();
    button.click();
    button.click();

    cy.visit(`${domain}/home`);
    cy.visit(`${domain}/counter`);

    cy.findByText('Current value: 1').should('exist');
  });
});
