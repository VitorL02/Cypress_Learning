/// <reference types= "cypress"/>

describe('Basico do Cypress', ()=>{
    it('Access a page and make a assert in title',()=>{

        cy.visit('https://www.wcaquino.me/cypress/componentes.html');

        // const title =  cy.title() como cy.title e uma promisse o valor entregue e $Chainer ou seja valor indesejado por isso e necessario usar o metodo should

        cy.title().should('be.equal', 'Campo de Treinamento');
        cy.title().should('contains', 'Campo');

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

    it('Find and interact with a element',()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
        cy.get('#buttonSimple').click();
        // cy.get('#buttonSimple').should('have.value','Obrigado!');

        //A declaração que o  valor atribuido pos o click sera o obrigado
        cy.get('#buttonSimple').click().should('have.value','Obrigado!');
    });

});