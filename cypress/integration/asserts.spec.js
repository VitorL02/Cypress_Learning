/// <reference types= "cypress"/>


it('Equality',() => {
    let number = 1;


    expect(number).equal(1);
    expect(number,'Deveria Ser Igual a 1').equal(2);
    //uma forma diferente de informar o que number deveria ser igual a B
    expect(number).to.be.equal(2);
    expect(number).not.to.be.equal(2);
});


it('True Or False', () =>{
    const isTrue= true;
    const isNull= null;
    let invalid;

    expect(isTrue).to.be.true;
    expect(true).to.be.true;
    expect(isNull).to.be.null;
    

    expect(invalid).to.be.undefined;
    //Retorna erro pois invalid e um valor indefined
    expect(invalid).not.to.be.undefined;

});

it('Object Equality',()=>{
    const users ={
        email:'vitorlucas.teste@yahoo.com',
        name:'vitor'
    }

    expect(users).equals(users);
    expect(users).to.be.deep.equal({email:'vitorlucas.teste@yahoo.com',name:'vitor'});

    expect(users).to.have.property('email');
    //informa que de fato o objeto não esta vazio o que retorna o test como pass
    expect(users).to.not.be.empty;

    expect(users).to.be.empty;

    //retorna erro pelo cypress não conseguir  receber o valor dentro do parametro passado
    expect(users).to.be.equals({email:'vitorlucas.teste@yahoo.com',name:'vitor'});


    
});

it('Arrays',() =>{
    const array = [1, 2, 3]

    expect(array).to.have.members([1,2,3]);

    //retorna como pass pois de fato o array possui 1 e 3 em sua declaração
    expect(array).to.include.members([1,3]);

    expect(array).to.be.not.empty;
    expect([]).to.be.empty;
});


it('Types',()=>{
    const number = 1
    const word = 'String'
    const arr = []
    const objeto = {email:'vitorlucas.teste@yahoo.com',name:'vitor'}
    

    expect(number).to.be.a('number');
    expect(word).to.be.a('string');
    expect(arr).to.be.an('array');
    expect(objeto).to.be.an('object');
});


it('String Compare', () => {
    const str = 'String de testes'

    expect(str).to.be.equal('String de testes');
    expect(str).to.have.length(16);
    expect(str).to.contains('de');
    
    //Realiza a mesma verificação que o Contains
    expect(str).to.match(/de/);
    
    //Restringe a finalizar a comparação da string em terminar com a palavra testes
    expect(str).to.match(/testes$/);

    //Restringe a finalizar a comparação da string em iniciar com a palavra String
    expect(str).to.match(/^String/);

    // Restringe em possuir somente letras declaradas
    expect(str).to.match(/\w+/);
// Restringe em possuir somente numeros declarados
    expect(str).to.match(/\D/);
});

it('Numbers', () => {
    const number = 4
    const floatNumber = 5.2123

    expect(number).to.be.equal(4);
    //Assertivas que verificam se  estão entre os numeros 3 e 7
    expect(number).to.be.above(3);
    expect(number).to.be.below(7);


    expect(floatNumber).to.be.equal(5.2123);
    //Como e complicado saber o valor exato de um valor flutuante usamos o closeTo
    expect(floatNumber).to.be.closeTo(5.2)

} )