/// <reference types= "cypress"/>

describe('Aprendendo a manipular radio butons',()=>{

    before(()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    });

    it('Radio',()=>{
    cy.get('#formSexoFem').click()
     .should('be.checked');

     cy.get('#formSexoMasc').should('not.be.checked');

     cy.get("[name = 'formSexo']").should('have.length',2); //o [] e usado quando a busca e por um valor do elemento, como no caso do input o "name" foi pego
     cy.reload();
     cy.get("[name = 'formSexo']").should('not.be.checked');
    });
})