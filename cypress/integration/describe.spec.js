/// <reference types= "cypress"/>

it.only('Um test externo ', () =>{
    console.log('Hello')
})



describe('Agrupamento de testes' , () =>{

    describe('Um agrupamento mais especifico de testes',()=>{
        it('Um teste de um grupo especifico de testes ' ,() =>{
            console.log('um teste muito especifico mesmo')
        })
    })

    it.only('Um test externo ', () =>{
        console.log('Hello teste agrupado')
    })
})

// utilizar o skip faz ele pular os testes com o marcador,o only so pega o ultimo de leitura do arquivo, não permitindo o uso de dois