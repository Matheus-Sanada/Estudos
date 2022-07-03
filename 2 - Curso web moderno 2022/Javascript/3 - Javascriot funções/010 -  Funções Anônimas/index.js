//* Funções anonimas é toda função que nao contem nome.
const soma = function(x,y) {

    return x + y

}

const printResult = function (a,b, operação = soma) {

    console.log(operação(a,b))
}

printResult(4,5)
printResult(3,4, soma)
printResult(3,4, function (x,y) {
    return x - y
})
printResult(4,5, (x,y) => x * y)


const pessoa = {
    falar: function () {
        console.log("Olá, mundo!!")
    }

}

pessoa.falar()