const avaliationAlun = 7
const avaliantio2Alun = 5
const avaliantioFinal = 10


let result = (avaliationAlun + avaliantio2Alun + avaliantioFinal) / 3

Number(result)


if (result >=6 ) {

    console.log("Aprovado com a nota de " + result)
    
} else if (result < 6) {

    console.log("Reprovado com a nota de " + result)


}

console.log(Number.isInteger(result))
// Para saber se um numero é inteiro ou nao usamos a propriedade (isIntereger())

console.log(result.toFixed(2))
// Para retirar as casas decimais usamos o metodo(toFixed(quantidade de casas decimais))

console.log(result.toString())
// Transformar um number em uma string
// toString(numero que sera binario)