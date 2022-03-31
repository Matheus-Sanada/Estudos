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


//* EXERCICIO SWITCH

// Exercício 1: Crie uma variável chamada “fruta”. Esta variável deve receber uma string com o nome de uma fruta. Após, crie uma estrutura condicional switch que receba esta variável e que possua três casos: caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis” e caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções e verifique o console do seu navegador. Crie também um default, que retornará uma mensagem de erro no console.

// let nameFruits = prompt("Digite o nome de uma fruta: ")

// switch (nameFruits) {

//     case "Maçã":

//     nameFruits = alert(`Não vendemos esta fruta aqui :(`)
        
//         break;

//     case "Kiwi":

//     nameFruits = alert(`Estamos com escassez de kiwis :(`)
        
//         break;

//     case "Melancia":

//     nameFruits = alert(`Aqui está, são 3 reais o quilo :(`)
        
//         break;
        

//     default:

//     nameFruits = alert("Fruta invalida")

// }

// Exercício 2: Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch/case, caso o comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console: “Não trabalhamos com este tipo de automóvel aqui”.


// let buyCar = prompt("Digite qual carro deseja comprar: ")

// switch (buyCar) {

//     case "hatch":

//     buyCar = alert("Compra efetuada com sucesso")
        
//         break;

//     case "sedans":

//     buyCar = alert("Tem certeza que não prefere este modelo?")
        
//         break;
        
//     case "motocicletas":

//     buyCar = alert("Tem certeza que não prefere este modelo?")
        
//         break;

//     case "caminhonetes":

//     buyCar = alert("Tem certeza que não prefere este modelo?")
        
//         break;

//     default:

//     buyCar = alert("Não trabalhamos com este tipo de automóvel aqui")

//         break;
// }


//* EXERCICIOS WHILE

// Exercício 1: Crie um laço while que irá iterar enquanto n for menor ou igual a 5. Mostre no console os valores obtidos.

// Dica:
// Para realizar este exercício, crie uma variável n que receberá o valor zero. Crie o laço de repetição while que irá ter a condição n menor ou igual a 5. Coloque a rotina a ser seguida dentro do laço de repetição.

//* while -> Enquanto

// let n = 0

// while (n <= 5) {

//    console.log("O valor esta em: " + n)
//    n++
// }


// Exercício 2: Crie um vetor chamado carros. Este vetor irá conter os valores “Gol”, “Uno”, “S10”, “Kadett”. Você também precisa criar uma variável que será o índice para percorrer este laço de repetição. No seu laço de repetição while, utilize o console.log para mostrar todos os nomes dos carros que estão contidos no seu vetor.


// let aceleration = 20
// let num = 5

// while (aceleration <= 100) {

//     console.log(`Estamos a ${aceleration} Km/h`)
//     aceleration += num
// }

// Quando você usa +=, está dizendo de uma maneira mais simples que o total recebe o próprio valor de total + o conteúdo de nums


// Exercicio 3 Elaborar um programa um programa que apresente o resultado da tabuada de um numero inteiro. A tabuada deve seguir um padrao, estando entre 1 e 10, e exibir o resultado.

// let nameUser = prompt("Digite o seu nome: ")

// let numCalc = prompt("Digite o primeiro numero para fazer o calculo: ")
// let numCalcTwo = prompt("Digite o segundo numero para fazer o calculo: ")

// let result = ""

// while (result = numCalc * numCalcTwo) {

//     result = alert(`Parabens ${nameUser} o resultado do seu calculo matematico é: ${result}`)
    
//     result = numCalc * numCalcTwo

// }

// alert(`Digito invalido`)


//* EXERCICIOS FOR

// Exercício 1: Crie um algoritmo usando o for que leia uma lista. Mostre no console apenas os números pares. Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];



// for (let i = 0; i <= 50; i += 2) {

//     console.log(`Os numeros sâo: ${i}`)
 
// }


// Exercicio 2 Elaborar um programa um programa que apresente o resultado da tabuada de um numero inteiro. A tabuada deve seguir um padrao, estando entre 1 e 10, e exibir o resultado.


// let nameAlun = prompt("Digite seu nome: ")

// let numberOne = prompt("Digite um numero para o fazer o calculo: ")
// let numberTwo = prompt("Digite um segundo numero para o fazer o calculo: ")

// for (let result = 0; result = numberOne * numberTwo; result++) {

//     result = alert(`Parabens ${nameAlun} o resultado da sua operação matematica é: ${result}`);
    
// } 

// result = alert("Digito invalido");


// let nameUser = prompt("Digite seu nome: ")
// let yearUser = prompt("Digite o ano do seu nacimento: ")

// for (let result = 2022; result = result - yearUser; result++) {

//    if (result >= 18) {

//     result = alert(`Parabens ${nameUser}, vocè tem a idade de: ${result} anos`)
       
//    } else {

//     result = alert(`Por você ter a idade de ${result} anos ${nameUser}, você ainda é de menor, espere completar 18 anos`)

//    }
    
// }

