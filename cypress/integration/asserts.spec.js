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

    expect(users).to.have.property('email')
    //retorna erro pelo cypress não conseguir  receber o valor dentro do parametro passado
    expect(users).to.be.equals({email:'vitorlucas.teste@yahoo.com',name:'vitor'});


    
});