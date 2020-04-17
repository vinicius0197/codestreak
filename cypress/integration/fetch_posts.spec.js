describe('Select project at the Projects Tab', () => {
  beforeEach(() => {
    cy.resetDb();
    cy.visitAndSeed();
  });

  it('fetches posts for selected project', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="projectList"] a')
      .first()
      .children()
      .click();

    cy.get('[data-testid="postsContainer"]')
      .children()
      .should('have.length', 2);

    cy.get('[data-testid="projectList"] a')
      .eq(1)
      .children()
      .click();

    cy.get('[data-testid="postsContainer"]')
      .children()
      .should('have.length', 3);
  });
});