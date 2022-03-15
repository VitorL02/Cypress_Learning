

it('sem Testes ainda',()=>{})


// const getSomething = () => 10

// const getSomething =  callback => {
//      setTimeout(()=>{
//         callback (11);
//     },1000)
// }

const getSomething =  () => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve (11);
        },1000)
    })

}

const system = () =>{
    console.log('init');
    const promisseValue = getSomething();
    promisseValue.then( some => console.log(some))
    getSomething().then(refatoringResult => console.log(refatoringResult))
    console.log('end')

    //utilizando o callback para receber o valor 
    // getSomething(some => console.log(`O resultado recebido é ${some}`))

} 
system();