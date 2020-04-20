Cypress.Commands.add('resetDb', () => {
  cy.request('GET', 'http://localhost:3001/projects')
    .then((response) => {
      const responseData = response.body;
      responseData.map(({id}) => {
        cy.request('DELETE', `http://localhost:3001/projects/${id}`);
        console.log('delete', id);
      });
    });
  cy.request('GET', 'http://localhost:3001/posts')
    .then(response => {
      const responseData = response.body;
      responseData.map(({id}) => {
        cy.request('DELETE', `http://localhost:3001/posts/${id}`);
        console.log('delete', id);
      });
    });
});

Cypress.Commands.add('visitAndSeed', () => {
  cy.fixture('data').then(seedData => {
    seedData.projects.map(data => {
      cy.request('POST', 'http://localhost:3001/projects', data)
        .then(response => {
          console.log(response.body);
        });
    });
    seedData.posts.map(post => {
      cy.request('POST', 'http://localhost:3001/posts', post)
        .then(response => {
          console.log(response.body);
        });
    });
  })
});