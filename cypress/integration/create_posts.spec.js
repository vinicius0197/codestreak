describe('Create new posts', () => {
  beforeEach(() => {
    cy.resetDb();
    cy.visitAndSeed();
  });

  it('Creates a new post', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="projectList"] a')
      .first()
      .children()
      .click();

    cy.get('[data-testid="createPostWindow"]')
      .find('[data-testid="createPostInput"]')
      .type('this is an example post');

    cy.get('[data-testid="createPostButton"]')
      .click();

    cy.get('[data-testid="postsContainer"]')
      .children()
      .should('have.length', 1);
  });
});