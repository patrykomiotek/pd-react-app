describe('Open counter page', () => {
  it('Visits counter page', () => {

    cy.visit('/counter');
    const button = cy.findByRole('button', { name: /➕/i });
    button.click();
    button.click();
    button.click();

    cy.visit('/home');
    cy.visit('/counter');

    cy.findByText('Current value: 1').should('exist');
  });
});
