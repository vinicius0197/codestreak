Cypress.Commands.add('resetDb', () => {
  cy.request('GET', 'http://localhost:3001/projects')
    .then((response) => {
      const responseData = response.body;
      responseData.map(({id}) => {
        cy.request('DELETE', `http://localhost:3001/projects/${id}`);
        console.log('delete', id);
      });
    })
});