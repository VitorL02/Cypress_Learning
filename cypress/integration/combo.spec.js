/// <reference types= "cypress"/>

describe('Combo/select',()=>{
    before(()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    });

    it('Combo',()=>{
        cy.get('[data-test=dataEscolaridade]').select('2o grau completo').should('have.value','2graucomp'); // para receber o have.value e necessario buscar o value que e encontrado em option value
    });

    it('Combo Multiplo',()=>{
        cy.get('[data-testid=dataEsportes]').select(['natacao','Corrida','nada']); //para selecionar o valor e necessario também pegar o value
    });
    //TODO validar opções selecionadas do combo
});