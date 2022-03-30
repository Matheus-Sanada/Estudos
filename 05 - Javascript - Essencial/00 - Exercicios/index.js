//* 1. Escreva um programa para ler	 2 valores (considere	 que não serão informados valores	iguais)	e escrever o maior deles.

// let numOne = prompt("Digite o primeiro valor: ");
// let numTwo = prompt("Digite o segundo valor: ");

// let numSum = Number(numOne) + Number(numTwo)

// if (numSum >= 20) {

//     numSum = alert(`Parabens! Valor acima do permitido: ${numSum}`)
    
// } else {
//     numSum = alert(`iiiiiiii! Valor abaixo do permitido: ${numSum}`)
// }

//*  2. Escreva  um  programa  para  ler  o  ano  de  nascimento  de  uma  pessoa  e escrever  uma  mensagem  que  diga  se  ela  poderá  ou  não  votar  este  ano (não é necessário considerar o mês em que ela nasceu).


// let nameUser = prompt("Digite seu nome: ")
// let dateLife = prompt("Digite o ano do seu nascimento: ")
// let datePresent = 2022

// let dateCalculated = datePresent - dateLife

// if (dateCalculated >= 18) {

//     dateCalculated = alert(`Parabens ${nameUser}! você tem a idade de: ${dateCalculated} anos e ja pode votar :)`)
    
// } else {

//     dateCalculated = alert(`Eita que pena ${nameUser}! você tem a idade de: ${dateCalculated} anos e não pode votar ainda :( `)

    
// }


/* 3. Escreva  um  programa  que  verifique  a  validade  de  uma  senha  fornecida pelo  usuário.  A  senha  válida  é  o  número  1234. Devem  ser impressas  as seguintes mensagens:

ACESSO PERMITIDO caso a senha seja válida.
ACESSO NEGADO caso a senha seja inválida.

*/

// let validPassword = prompt("Digite a senha: ")
// let passwordValided = 1234

// if (validPassword == passwordValided) {

//     passwordValided = alert("ACESSO PERMITIDO")

    
// } else {
//     passwordValided = alert("ACESSO NEGADO")
// }

/* 4. As maçãs  custam  R$  0,30  cada  se  forem  compradas menos  do  que  uma dúzia,  e  R$  0,25  se  forem  compradas  pelo  menos  doze.  Escreva  um programa  que  leia  o  número  de  maçãs  compradas,  calcule  e  escreva  o
valor total da compra. */

// let listBuy = prompt("Quantas maças você deseja comprar? ")
// let buyOne = 0.30;
// let buyTwo = 0.25;

// let result = listBuy * Number(buyOne)
// let resultTwo = listBuy * Number(buyTwo)

// if (listBuy < 12) {

//     result = alert(`Parabens você comprou: ${listBuy} maçãs, pelo preço de R$ ${resultTwo} Reais, compre mais da proxima vez`)

   
    
// } else if (listBuy >= 12) {


//     resultTwo = alert(`Parabens você comprou: ${listBuy} maçãs, pelo preço de R$ ${result} Reais`)

// } else {
//     result = alert ("Numero invalido")
// }