// let i = 0

// while (i < 21) {

//     console.log('5 x ' + i + ' = ' + 5*i);

//     i++
    
// }

//* A sintaxe do while, como vemos no exemplo acima, é bem simples. Utilizamos a palavra reservada while , logo em seguida precisamos passar uma condição que será atendida enquanto ela retornar true, ou seja, verdadeiro.

//* Neste caso, simulamos a tabuada do 5, a variável i é o nosso contador, iniciamos ela com o valor 0 , portanto a condição será verdadeira até que ela atinja o valor 11, e por isso ela é iterada a cada repetição - i++, ao atingir tal valor o laço é quebrado.




//* Crie um programa que imprima os numeros de 0 a 100

// let i = 0

// while (i < 100) {

//     i ++ 
//     console.log(`A contagem esta em ${i}`)
    
// }


//* Crie um programa que imprima os numeros de 0 a 100 apenas com os numeros pares.

// let i = 0
// let par = 2

// while (i < 100) {

//     i += par
//     console.log(`A contagem esta em ${i}`)
    
// }

//* Elaborar um programa que apresente os resultados de uma tabuada de um numero inteiro qualquer fornecido. A tabuada deve seguir o padrão estando entre 1 e 10.

// let numOne = prompt("Digite o primeiro numero: ")
// let numTwo = prompt("Digite o segundo numero: ")

// let result = 0

// while (result < 11) {

//     result = numOne * numTwo

//     alert("O resultado da sua operação é " +  numOne  + "X" +  numTwo  + "=" + result)

//     result ++

    
    
// }

//* Crie um programa que mostra os anos de 2022 para frente.

// let year = 2022

// let years = 1

// while (year <= 2100) {

//     year += years

//     console.log("Você esta no ano de" + year)
// }


//* Crie um programa que mostra o ano do seu nascimento

// let yearUser = prompt("Digite o ano em que vocè esta: ")
// let date = prompt("Digite a sua idade: ")

// let result = yearUser - date

// while (result) {

//     result = result

//     if (result >= 1960) {

//         confirm(`Parabens vocè nasceu no ano de ${result}`)
        
//     } else {

//         alert("Eai mummiaaaaaaaaaaaaaa, vocè nasceu no ano dos sarcofagos rsrsr ano de" + result)

//     }


//     break;
    
// }

// alert("Encerrando programa:)")


//* Crie um programa que abra um serie de opções quando você add sua idade.

alert("Seja bem vindo(a)")

let navBar = prompt("O que você deseja fazer agora?\n\n1 - Saber o ano do meu nascimento\n2 - Saber a idade de outra pessoa")

let year = 2022

let nameUser
let result 
let yearMoment
let age 

while (year <= 2022) {

    year = year


        switch (navBar) {

            case "1":

            nameUser = prompt("Digite o seu nome: ")
            age = prompt("Digite a sua idade: ")
            result = year - age

            alert(`Parabens ${nameUser}, você tem a idade de ${age} anos e o ano do seu nascimento é ${result}`)
                
                break;

            case "2":

            nameUser = prompt("Digite o nome da pessoa: ")
            yearMoment = prompt("Digite a idade da pessoa que você quer descobrir: ")
            result = year - yearMoment

            alert(`Parabens ${nameUser}, você tem a idade de ${yearMoment} anos e o ano do seu nascimento é ${result}`)
                
                break;
        
            default:

            alert("Numero invalido")

                break;
        }

    break;

}

alert("Encerrando programa :(")


