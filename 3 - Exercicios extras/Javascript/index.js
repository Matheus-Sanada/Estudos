// 1. Faça um programa que entre com três números, faça a média aritmética e mostre o resultado.

let userOne = prompt("Digite o primeiro numero: ")
let userTwo = prompt("Digite o segundo numero: ")
let userTree = prompt("Digite o terceiro numero: ")

let resultFinal = Math.round(userOne) + Math.round(userTwo) + Math.round(userTree) / 3

let resultDefined = alert("O resultado da sua operação é " + resultFinal)

// 2. Faça um programa que entre com o nome e o salário de um funcionário e mostre seu novo salário, sabendo que o mesmo teve um aumento de 10%.

let userName = prompt("Digite o seu nome: ")
let moneyHome = prompt("Digite o seu salario: ")

Math.round(moneyHome)

let moneyCalc = Number(moneyHome) + Number((moneyHome * 10)) / 100

Math.round(moneyCalc)
.toFixed(3)

let moneyResultFinal = alert(`${userName} o seu novo salario é de ${moneyCalc}`)

// 3. Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais devem ser somado os dois, caso contrário multiplique A por B ao final do cálculo ao final do
// cálculo atribuir o valor para uma variável C.

let numA = prompt("Digite o valor de A: ")
let numB = prompt("Digite o valor de B: ")

let numC = ""

if (Number(numA) == Number(numB)) {

    let numsum = Number(numA) + Number(numB)

    alert("Parabens o seu resultado é: " + numsum)
    
} else {

    numC = Number(numA) * Number(numB)
    alert("IIIII!! Resultado irregular: " + numC)
}

// 4. A partir do preço à vista de um determinado produto, calcule o preço total a pagar e o valor da prestação mensal, referentes ao pagamento parcelado. Se o pagamento for parcelado em 3 vezes deve ser dado um acréscimo de 10% no total a ser pago. Se o parcelamento for em 5 vezes, o acréscimo será de 20%.

alert("Seja bem vindo")

let nameProduct = prompt("Digite o nome do produto: ")
let valueProduct = prompt("Digite o valor total do produto: ")
let parcel = prompt("Digite em quantas vezes deseja parcelar o produto: ")


let parcelProduct = ""

if (parcelProduct = valueProduct * 0.10 + valueProduct / parcel) {

    alert(`Parabens o seu produto: ${nameProduct}, foi parcelado em ${parcel} e você ira pagar o valor de R$ ${parcelProduct}`)
    
} else if (parcelProduct = valueProduct * 0.20 + valueProduct / parcel) {

    alert(`Parabens o seu produto: ${nameProduct}, foi parcelado em ${parcel} e você ira pagar o valor de R$ ${parcelProduct}`)


} else {
    alert("Valor invalido")
}

// 5. Faça um algoritmo que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual ou superior a 8.

alert ("Seja bem vindo(a).\nAqui você ira encontrar o calculo da media de cada disciplina.\n\nBoa sorte!")

let nameUser = prompt("Digite o seu nome: ")
let nameDisciplina = prompt("Digite o nome da disciplina: ")

let noteOne = prompt("Digite a nota da primeira AV1: ")
let noteTwo = prompt("Digite a nota da segunda AV2: ")
let noteRec = prompt("Digite a nota da recuperação: ")

let noteResultAprovation = Number(noteOne) + Number(noteTwo) + Number(noteRec) / 3

if (noteResultAprovation >= 8) {

    alert(`Parabens ${nameUser} você foi aprovado na materia de ${nameDisciplina}, com a nota de ${noteResultAprovation}`)
    
} else {
    alert (`${nameUser} você foi reprovado na materia de ${nameDisciplina}, com a nota de ${noteResultAprovation}`)
}

// 6. Escreva um algoritmo que receba dois números reais e um código de seleção do usuário. Se o código digitado for 1, faça o algoritmo adicionar os dois números previamente digitados e mostrar o resultado; se o código de seleção for 2, os números deverão ser multiplicados; se o código de seleção for 3, o primeiro número deve ser dividido pelo
// segundo

let nameUser = prompt("Digite o seu nome: ")
let numOne = prompt("Digite o primeiro numero: ")
let numTwo = prompt("Digite o segundo numero: ")


let navbarSelectionUser = prompt("Escolha uma das opções abaixo:\n\n1 - Somar os dois numero digitados\n2 - Multiplicar os dois numeros\n3 - Dividir o primeiro numero pelo segundo")

let resultOption 



switch (navbarSelectionUser) {

    case "1":

    resultOption = Number(numOne) + Number(numTwo)
        break;

    case "2":

    resultOption = Number(numOne) * Number(numTwo)
        break;

    case "3":

    resultOption = Number(numOne) / Number(numTwo)
        break;

    default:

    resultOption = alert("Digito invalido")

}

confirm(`${nameUser} o resultado da sua operação é ${resultOption}`)
confirm("Programa finalizado :)")