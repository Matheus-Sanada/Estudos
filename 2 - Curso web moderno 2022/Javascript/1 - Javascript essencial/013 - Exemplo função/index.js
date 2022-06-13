/*

Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.


*/

//* EXEMPLO 01 *//

// function sumPrint(a,b) {


//     console.log(a + b)


    
// }

// sumPrint(10, 20)


//* EXEMPLO 02 *//

// Armazenar uma função numa variavel
let informations = function(a,b) {

    console.log(a + b)
    console.log(a - b)
    console.log(a * b)


}

informations(10, 5)


// Armazenar uma função arrow numa variavel 
let calcSumMedia = () => {

    let avaliationOne = 10
    let avaliationTwoo = 5
    let avaliationThree = 10


    let result = (avaliationOne+avaliationTwoo+avaliationThree) / 3


    if (result >= 6) {

        console.log("Aprovado")
        
    } else if (result < 6) {

        console.log("Reprovado")
        
    }

}

calcSumMedia()


// Retorno de uma função
const soma = (a,b) => {

    return a + b
}

console.log(soma)


// Retorno implicito
const subtração = (a,b) => a + b 

console.log(subtração(10,50))