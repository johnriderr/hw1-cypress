/// <reference types="cypress" />



describe('sign in test', () => {
    it('go to main', () => {
        cy.visit('http://localhost:1667/#/') // conduit prod is half-dead, in the docker same selectors
    })
    
    const email = 'fakemail13@gmail.lol';
    const password = 'paSSwoooRRRD666';
    const username = 'bububu';

    it('go to sign in page, and sign in', () => {
        cy.get(':nth-child(2) > .nav-link').click();
    
        cy.get(':nth-child(1) > .form-control').type(email);
        cy.get(':nth-child(2) > .form-control').type(password);

        cy.get('.btn').click();

        cy.get('.navbar').contains(username).should('exist');
      })
    
  })