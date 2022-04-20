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


    it.only('Utilizando o Find',()=>{
        cy.get('#buttonList').click();  
        cy.get('#lista li')
        .find('span').should('contain','Item 1');

        // cy.get('#lista li')
        // .find('span').should('contain','Item 2 ');
        
        //utilizando o find nesse contexto, como o item dois demora e necessario passar todo o caminho e executar o should
        cy.get('#lista li span').should('contain','Item 2');
    });
})