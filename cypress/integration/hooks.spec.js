/// <reference types= "cypress"/>

describe('Hooks evitam comportamentos repetitivos',() =>{
    //executado no inicio do teste
    //reservado somente a cada describe
    //O before garante que a visita ao site sera executada em todos os testes sem a necessidade de repetir cy.vist
    before(()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    });
    //executado antes de todos os testes
    beforeEach(()=>{
        cy.reload();
    })

    it('Click in Return Button',()=>{


        cy.get('[href="#"]').click();
        cy.get('#resultado').should('have.text','Voltou!');
        cy.get('#resultado').should('contain','Voltou');
    });

    it('Textos',()=>{

        cy.get('body').should('contain', 'Cuidado');
        
        cy.get('.facilAchar').should('contain','Cuidado');
    
        cy.get('.facilAchar').should('have.text','Cuidado onde clica, muitas armadilhas...');
    
        });

});

it('fora do describe com o before',()=>{

    
});