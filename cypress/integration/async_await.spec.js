it('sem Testes ainda',()=>{})


const getSomething =  () => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve (11);
        },1000)
    })

}

const system = async() =>{
    console.log('init');
    const some = await getSomething()
    console.log(`O resultado asincrono e ${some}`)
    console.log('end')

    //utilizando o callback para receber o valor 
    // getSomething(some => console.log(`O resultado recebido é ${some}`))

} 
system();