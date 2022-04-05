describe('Basico do Cypress', ()=>{
    it.only('Access a page and make a assert in title',()=>{

        cy.visit('https://www.wcaquino.me/cypress/componentes.html');

        // const title =  cy.title() como cy.title e uma promisse o valor entregue e $Chainer ou seja valor indesejado por isso e necessario usar o metodo should

        cy.pause()
        
        cy.title().should('be.equal', 'Campo de Treinamento').debug();
        cy.title().debug().should('contains', 'Campo');

        //Duas formas de exemplificar que e possivel criar 
        cy.title()
        .should('contains', 'Campo')
        .should('be.equal' , 'Campo de Treinamento');

        cy.title()
        .should('contains', 'Campo')
        .and('be.equal' , 'Campo de Treinamento');

        //Desafio proposto em aula 
        //1- Receber title em uma const e exibir no console.log
        //2-Escrever title em um input em tela
        cy.get('#formNome').click().type('title')
    });

});