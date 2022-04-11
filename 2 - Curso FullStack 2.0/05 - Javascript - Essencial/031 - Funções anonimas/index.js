//* Funções anonimas => Funções anonimas não possuem nome entao o que acontece é que uma função anonima tem o nome omitido no momento da criação. Funções anonimas podem ser armazenadas em varaiveis. 

console.log(speedUp(40,10))
console.log(doubleSpeed(50))

let doubleSpeed = function (velocity) {

    return velocity * 2

}

function speedUp(velocity, aceleration) {

    return velocity + aceleration
    
}

// let newVelocity = doubleSpeed(40)

// console.log(newVelocity)

//* A declração de uma função tradicional faz com que a função seja lida antes de tudo no escopo do codigo.

//* As funções anonimas por serem atribuidas em variaveis elas seguem a regra da chamada de uma variavel, o que provoca erro nessa segunda chamada.
