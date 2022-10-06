/* global When */

When('requesting a list of commits from owner {string} and repo {string}', (owner, repo) => {
  cy.request({url: 'https://api.github.com/repos/'+owner+'/'+repo+'/commits', failOnStatusCode: false}).then((response) => {
    cy.task('setVal', response);
  });
});

When('return the authors of the last 30 commits in the given repo', () => {
  cy.task('getVal').then((response) => {
    if (response.body.length !== 0) {
      for (var i = 0; i < response.body.length; i++) {
        const author = response.body[i].commit.author.name;
        cy.log('Commit '+(i + 1)+': '+author);
      }
    }
  });
});

When('status is {string}', (status) => {
  cy.task('getVal').then((response) => {
    expect(response.status).to.equal(parseInt(status));
    cy.log(response.body.message);
  });
});

When('message body is {string}', (text) => {
  cy.task('getVal').then((response) => {
    expect(response.body.message).to.equal(text);
  });
});