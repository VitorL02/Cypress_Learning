import { it } from "mocha";


//Relembrando um pouco de arrow function
it('nada agora', function(){})


// function soma (a,b){
//     return a + b;
// }


const soma = function(a,b){
    return a + b ;
}
console.log(soma(1,4))

const somaArrowFunction = (a,b) => a + b;

console.log(somaArrowFunction(1,5))

it('Isso e um teste com função',function(){
    console.log('Function',this)
})

it('arrow function teste...',() => {
    console.log('Arrow',this)
    // Retorna o escopo maior e retorna undefined
})