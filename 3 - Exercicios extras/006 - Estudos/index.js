//* Escreva um script que pergunta ao usuário se ele deseja converter uma temperatura de grau Celsius para Farenheit ou vice-versa. Para cada opção, crie uma função. Crie uma terceira, que é um menu para o usuário escolher a opção desejada, onde esse menu chama a função de conversão correta.

// alert("Seja bem vindo(a) ao conversor de temperatura")

// function menuOptions() {

//     let userOpetions = prompt("Escolha uma opção para fazer a conversão:\n\n1 - converter uma temperatura de grau Celsius para Farenheit\n2 - converter uma temperatura de grau Farenheit para Celsius ")


//     switch (userOpetions) {

//         case "1":

//             function convertedTempOne() {

//                 let celsius = prompt("Digite a temperatura em celsius: ")
//                 let resultCalcOne = celsius * 1.8 + 32
            
//                 let resultFinal = alert(`O resultado da sua conversao de graus celsius para farenheit é de ${resultCalcOne} graus`)
                
//             }

//             convertedTempOne()
            
//             break;
    
//         case "2":

//             function convertedTempTwo() {

//                 let farenheit = prompt("Digite a temperatura em farenheit: ")
            
//                 let resultCalcTwo = farenheit - 30 / 2
            
//                 let resultFinalTwo = alert(`O resultado da sua conversao de graus farenhei para celsius é de ${resultCalcTwo} graus`)
                
//             }
            
//             convertedTempTwo()

            
//             break;
    
//         default:

//         alert("Digito invalido")
//         alert("Encerrando programa :)")

//             break;
//     }
    
// }

// menuOptions()

// alert("Encerrando programa :)")


//* Crie um conversor de moedas que converta reais em dolares e vice-versa e que converta reais em euros.

// alert("Seja bem vindo(a) ao conversor de dinheiro")

// function menuOptions() {

//     let menu = prompt("Escolha a opção desejada:\n\n1 - Converter Reais em Dolares\n2 - Converter Dolares em Reais\n3 - Converter Reais em Euros\n")

//     switch (menu) {

//         case "1":

                
//         function moneyDols() {

//             let moneyDolsAndReals = prompt("Digite o valor a ser convertido: ")

//             let resultMoney = moneyDolsAndReals * 4.70

//             let resultFinal = alert(`O resultado da sua conversão de reais para dolares é de: U$ ${resultMoney} Dolares`)
            
//         }

//         moneyDols()
            
//             break;

//         case "2":

                    
//             function moneyReals() {

//                 let moneyRealsAndDols = prompt("Digite o valor a ser convertido: ")

//                 let resultMoneyReals = moneyRealsAndDols * 4.70

//                 let resultFinal = alert(`O resultado da sua conversão de Dolares para Reais é de: R$ ${resultMoneyReals} Reais`)
                
//             }

//             moneyReals()
            
//             break;

//         case "3":

        
//             function moneyEurosConverted() {

//                 let moneyRealsAndEuros = prompt("Digite o valor a ser convertido: ")
    
//                 let resultMoneyEuros = moneyRealsAndEuros * 0.20
    
//                 let resultFinal = alert(`O resultado da sua conversão de reais para Euros é de: € ${resultMoneyEuros} Euros`)
                
//             }
    
//             moneyEurosConverted()
            
//             break;
    
//         default:

//         alert("Digito invalido :( ")

//             break;
//     }
    
// }

// menuOptions()

// alert("Encerrando programa :) ")

//* Faça um programa, com uma função que necessite de três argumentos, e que forneça a soma desses três argumentos através de uma função. Seu script também deve fornecer a média dos três números, através de uma segunda função que chama a primeira.

// alert("Seja bem vindo(a)")

// function argumentesSum(numOne, numTwo, numThree) {

//     numOne = prompt("Digite um numero: ")
//     numTwo = prompt("Digite um segundo numero: ")
//     numThree = prompt("Digite um terceiro numero: ")


//     let resultSum = Number(numOne) + Number(numTwo) + Number(numThree)

//     if (resultSum >= 30) {

//         let resultText = alert(`O resultado da sua soma é ${resultSum}, Parabens!!!`)

        
//     } else {
//         alert(`Nao chegou ao resultado esperado :( Estude mais`)
//     }



        
//     function ResultMedia() {

//         let calcMedia = resultSum / 3

//         let media = alert(`O resultado da media é ${calcMedia}, Parabens!!!`)

        
//     }

//     ResultMedia()

    
// }

// argumentesSum()


//* Crie um programa de bordo que receba o nome de uma nave.
//* A velocidade da nave deve ser inicialmente 0 e um menu deve ser exibido para que o usuario escolha entre as seguintes opções: 1 - Acelerar a nave a 5km/s, 2 - Desacelerar a nave em 5km/s, 3 - Imprimir dados de bordo(Deve ser impresso o nome da nave com sua vaelocidade atual) e 4 - Sair do programa


alert("Seja bem vindo(a) ao piloto de bordo")
const nameNav = prompt("Digite o nome da sua nave: ")

let velocity = 0
let validation = 1



function speedUp (velocity) {

    velocity += 5
    alert("Aumentando velocidade em 5Km/s")

}


function slowUp(velocity) {

    velocity -= 5

    if(velocity < 0){
        alert("Velocidade nao pode ser menor que 0 km/s! Resetando para 0 km/s...")
    } else {
        alert("Diminuindo a velocidade em 5 km/s")
    }
}
    

function printBorder() {

    alert(`O nome da sua nave é: ${nameNav}\nSua velocidade atual é de: ${velocity} Km/s`)
    
}

function backNaveSpace() {

    alert("Desligando motores da nave")
    
    
}


while(validation == 1){

    menuNavegation()
}



function menuNavegation() {

    let menuOptions = prompt("Escolha a opção desejada:\n\n1 - Acelerar a nave a 5km/s\n2 - Desacelerar a nave em 5km/s\n3 - Imprimir dados de bordo\n4 - Sair do programa")

    switch (menuOptions) {

        case "1":

        speedUp(velocity += 5)
            
            break;
        case "2":

        slowUp(velocity -= 5)
            
            break;
        case "3":

        printBorder()
            
            break;

        case "4":

        backNaveSpace()
            
            break;
    
        default:

        alert("ATENCAO!\n\nEh obrigatorio escolher uma opcâo!")

            break;
    }

}



