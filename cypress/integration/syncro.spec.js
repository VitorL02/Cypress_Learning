/// <reference types= "cypress"/>
 
describe('Sincronismo em Cypress', ()=>{
    before(()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    });


    it('Esperando o input ser exibido',()=>{
        cy.get('#novoCampo').should('not.exist');
        cy.get('#buttonDelay').click();
        cy.get('#novoCampo').should('exist');
        cy.get('#novoCampo').type('apareceu');
    });

    it('Retrys',()=>{
        cy.get('#buttonDelay').click();
        cy.get('#novoCampo').should('exist').type('funciona');
    });
})