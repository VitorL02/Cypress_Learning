/// <reference types= "cypress"/>

describe('Utilizando Checkbox', () => { 
    before(()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    });

    it('Manipulando Checkboxes',()=>{
        cy.get('#formComidaPizza').click().should('be.checked');
        cy.get('[name=formComidaFavorita]').click({multiple:true});
        cy.get('#formComidaPizza').dblclick().should('not.be.checked'); //realiza o double click para desmarcar pizza e verificar se o mesmo não está marcado
        cy.get('#formComidaCarne ').should('be.checked');
    });
 })