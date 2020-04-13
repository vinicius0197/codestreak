describe('Create new project', () => {
  beforeEach(() => {
    cy.resetDb();
  });

  it('Opens a modal for adding new project', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="createProjectButton"]')
      .click();
    
    cy.get('[data-testid="modal"]')
      .as("modal");
  });

  it('Creates a new project', () => {
    cy.get('[data-testid="modal"]')
      .as("modal");
  
    cy.get('@modal')
      .find('[data-testid="projectName"]')
      .type('testeproject');
    
    cy.get('@modal')
      .find('[data-testid="projectDescription"]')
      .type('test description');
    
    cy.get('@modal')
      .find('[data-testid="finishButton"]')
      .click();
    
    cy.get('@modal')
      .should('not.exist');

    cy.get('[data-testid="projectList"] a')
      .should('have.length', 1);
    
    cy.get('[data-testid="projectList"] a')
      .contains('testeproject');
  });
});