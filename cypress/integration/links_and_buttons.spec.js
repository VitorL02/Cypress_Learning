/// <reference types= "cypress"/>

describe('Basico de links ',() => {

    it('Click in Return Button',()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');

        cy.get('[href="#"]').click();
        cy.get('#resultado').should('have.text','Voltou!');
        cy.get('#resultado').should('contain','Voltou');

        //outra forma de conseguir os resultados da pagina,utilizando o contains
    
        cy.reload();
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text','Voltou!');
        cy.get('#resultado').should('contain','Voltou');
    });

    it('Textos',()=>{

        cy.get('body').should('contain', 'Cuidado');
        
        cy.get('.facilAchar').should('contain','Cuidado');
    
        cy.get('.facilAchar').should('have.text','Cuidado onde clica, muitas armadilhas...');
    
        });
});