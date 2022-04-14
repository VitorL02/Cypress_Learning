/// <reference types= "cypress"/>

describe('Aprendendo a manipular campos de texto',()=>{

    before(()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    });

    it('TextFields',()=>{
     
        cy.get('#formNome').type('Teste');
        // cy.get('#formNome').should('have.text','Teste'); retorna erro pelo fato de o texto estar armazenado em value
        cy.get('#formNome').should('have.value','Teste');

        //precisa inserir as \\ pois o jquery selector não reconhece o mesmo
        cy.get('#elementosForm\\:sugestoes').type('Isso e um descrição').should('have.value','Isso e um descrição');


        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input').type('???').should('have.value','???');

        //Executa no teclado o comando de apagar o texto
        cy.get('[data-cy=dataSobrenome]').type('Teste12345{backspace}{backspace}').should('have.value','Teste123');

        cy.get('#elementosForm\\:sugestoes')
        .clear()//realiza a limpeza de todo o campo
        .type('Ola tester{selectall}tester',{delay:100})//selectall pega tudo escrito ja no campo
        .should('have.value','tester');

    });
})