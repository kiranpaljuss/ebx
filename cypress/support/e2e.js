require('./commands');
import 'cypress-localstorage-commands';

before(() => {
  Cypress.on('uncaught:exception', () => {
    return false;
  });
});