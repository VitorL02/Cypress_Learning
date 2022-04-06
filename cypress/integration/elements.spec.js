/// <reference types= "cypress"/>

describe('Basico com elementos hmtl',()=>{
    it('Textos',()=>{

    cy.visit('https://www.wcaquino.me/cypress/componentes.html');

    //Forma generica de buscar uma informação,usando o jquery selector ele pesquisa em todo o body se o texto existe de fato
    cy.get('body').should('contain', 'Cuidado');
    
    cy.get('.facilAchar').should('contain','Cuidado');

    // cy.get('.facilAchar').should('have.text','Cuidado'); Retorna erro pelo fato de have.text precisa receber o texto completo

    cy.get('.facilAchar').should('have.text','Cuidado onde clica, muitas armadilhas...');

    });
});