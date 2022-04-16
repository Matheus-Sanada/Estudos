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

// alert("Seja bem vindo(a)")

// let navBar = prompt("O que você deseja fazer agora?\n\n1 - Saber o ano do meu nascimento\n2 - Saber a idade de outra pessoa")

// let year = 2022

// let nameUser
// let result 
// let yearMoment
// let age 

// while (year <= 2022) {

//     year = year


//         switch (navBar) {

//             case "1":

//             nameUser = prompt("Digite o seu nome: ")
//             age = prompt("Digite a sua idade: ")
//             result = year - age

//             alert(`Parabens ${nameUser}, você tem a idade de ${age} anos e o ano do seu nascimento é ${result}`)
                
//                 break;

//             case "2":

//             nameUser = prompt("Digite o nome da pessoa: ")
//             yearMoment = prompt("Digite a idade da pessoa que você quer descobrir: ")
//             result = year - yearMoment

//             alert(`Parabens ${nameUser}, você tem a idade de ${yearMoment} anos e o ano do seu nascimento é ${result}`)
                
//                 break;
        
//             default:

//             alert("Numero invalido")

//                 break;
//         }

//     break;

// }

// alert("Encerrando programa :(")


//* Crie um software para venda de uma casa.

// alert("Seja bem-vindo(a)")
// alert("Esse programa tem como proposito te auxiliar na venda da sua casa :)")

// let nameUser = prompt("Digite o seu nome: ")

// let valueHome
// let nameNewBuy

// let options = prompt("O que você deseja fazer: \n\n1 - Vender a casa\n2 - Alugar a casa")

// for (valueHome = 0; valueHome >= 200.000; valueHome++) {

//     switch (options) {
//         case "1":

//         valueHome = prompt("Digite o valor da sua casa: ")
//         nameNewBuy = prompt("Digite o nome do comprador: ")

//         alert(`${nameUser} sua casa foi vendida por R$ ${valueHome} Mil reais, para o comprador chamado ${nameNewBuy}`)
            
//             break;

//         case "2":

//         valueHome = prompt("Digite o valor que a casa sera alugada: ")
//         nameNewBuy = prompt("Digite o nome da pessoa que ira alugar o imovel: ")

//         alert(`${nameUser} sua casa foi alugado por R$ ${valueHome} reais, para a pessoa chamado ${nameNewBuy}`)
            
//             break;
    
//         default:

//         alert("Digito invalido")

//             break;
//     }


//     break;
    
    
// }

// alert("Encerrando programa")


//* José nunca foi muito preocupado com suas finanças pessoais. Ele sempre deixou tudo muito desorganizado e para última hora. Frequentemente, sua eletricidade era cortada porque sempre esquecia de pagar a conta. Entretanto, tudo mudou com a pandemia. Devido ao medo de ficar sem dinheiro, José decidiu organizar seus gastos e economias pessoais.

//* Sabendo que José gastou, em janeiro, R$230, em fevereiro, R$270, em março, R$270 e, em abril, R$350. Sendo assim, crie um programa que:

//*Registre o gasto de cada mês

//*Calcule o gasto total dos 4 meses

//*Calcule o gasto médio

//*Mostre na tela o gasto médio semestral e os gastos mensais

// let buyJaneiro = prompt("Digite o valor que jose gastou em janeiro: R$ ")

// let buyFevereiro = prompt("Digite o valor que jose gastou em fevereiro: R$ ")

// let buyMar = prompt("Digite o valor que jose gastou em março: R$ ")

// let buyAbril = prompt("Digite o valor que jose gastou gastou em abril: R$ ")

// let result = Number(buyJaneiro) + Number(buyFevereiro) + Number(buyMar) + Number(buyAbril)

// let resultFinal = Number(result) / 4

// alert(`O gasto de total de jose é R$ ${result} Reais e o seu gasto medio é de R$ ${resultFinal} Reais`)



//* Klaus era apaixonado por uma marca de chicletes específica: Bubbaloo. Para sempre ter caixas de Bubbaloo em casa, Klaus ia constantemente ao supermercado com o seu pai para comprá-las. Certo dia, ao ir ao supermercado com seu pai, Klaus se depara com algo que faz seus olhos brilharem: caixotes de Bubbaloo. Klaus chegou perto do caixote e leu as especificações de cada caixote, que era preenchido por caixinhas menores: altura = 5 caixinhas | largura = 6 caixinhas | chicletes por caixinha = 30. Apesar da paixão por tais chicletes, Klaus ficou receoso em comprar tais caixotes, pois ele nunca foi muito bom em matemática, e não sabia direito quantos chicletes haviam em cada caixote. Mas quando seu pai falou “Vamos embora logo filho!”, Klaus colocou 5 caixotes no carrinho de supermercado.


//* Portanto, para ajudar Klaus a saber quantos chicletes ele de fato comprou, faça um programa que:

//* calcule a quantidade de caixinhas dentro de um caixote;

//* Calcule a quantidade de chicletes por caixote;

//* calcule e mostre na tela a quantidade total de chicletes comprados


// alert ("Seja bem vindo(a)")

// let CalcQuantityAltur = prompt("Digite a quantidade que cada caixa tem de altura: ")
// let calcQuantityVert = prompt("Digite a quantidade que cada caixa tem verticalmente: ")
// let calcQuantityCiclets = prompt("Digite a quantidade de chicletes em cada caixinha: ")

// let calcResult = CalcQuantityAltur * calcQuantityVert

// let resultFinal = calcResult * calcQuantityCiclets

// let finalResult = resultFinal * 5


// alert(`O resultado da quantidade de caixinhas é de ${calcResult}, o resultado da quantidade de chicletes por caixote é de ${resultFinal} e a qauntida todal de chicletes comprados foi de ${finalResult}`)


//* Tiago é um jogador camisa 10 nato. Ele sempre foi muito bom de bola: era capitão do seu time, artilheiro do campeonato e ficava a tarde inteira treinando no clube. Entretanto, com a chegada da pandemia, Tiago teve que limitar seus treinos e passou a treinar somente no jardim de sua casa. Para manter seu ritmo, cada dia ele adotava uma estrita rotina de treinos. Para maximizar seu potencial de melhora, Tiago resolveu fazer um cálculo para verificar a precisão de seus chutes. Após Tiago chutar várias vezes, ele calculou uma média dos seus chutes, em que, a cada 10 chutes, 4 acertavam o canto inferior esquerdo, e 2 acertavam cada um dos outros cantos. Logo, Tiago resolveu chutar 30 vezes no gol neste dia e, posteriormente, verificar a porcentagem de chutes em cada canto.

//* Sendo assim, crie um programa que execute as seguintes funções:

//* Calcular e mostrar na tela a quantidade de chutes efetuados no canto inferior esquerdo e nos outros cantos em geral

//* Mostrar a porcentagem dos chutes que acertaram o canto inferior esquerdo e os outros cantos

// confirm("ESTA PREPARADO SOLDADO!!!")

// let chutes = prompt("Digite a quantidade de chutes: ")

// let acertosInfEsquerdo = prompt("Digite a quantidade de acertos no canto inferior esquerdo: ")

// let acertosOutros = prompt("Digite a quantidade de acertos nos outros cantos: ")


// let resultAcerts = chutes * acertosInfEsquerdo * acertosOutros

// let resultPorcent = resultAcerts / 30


// alert(`A quantida de chutes efetuados foi de ${resultAcerts} e a porcentagem de chutes que acertaram foi de ${resultPorcent}`)

//* Portanto, crie um programa que: 

//* Mostre na tela os números de 10 até 1 em linhas separadas

//* Ao final da contagem mostre a mensagem “Feliz Aniversário, Miguel!”

//* Para isso, utilize ou o comando de loop for ou while 


// alert("Seja bem vindo Miguel")
// confirm("Preparado para a contagem regressiva?")

// let regression = 10
// let happy 

// while (regression <= 10 && regression >= 0) {


//     regression -=

//     happy = confirm(regression)
    
// }

// happy = alert(`Parabens Miguel`)


//* João queria entender um pouco mais sobre o que estava acontecendo com a sua piscina. Nos últimos dias, João e seu pai tentaram encher a piscina para entreter as famílias nos dias quentes de verão. Porém, eles perceberam um vazamento na piscina, essa que tinha capacidade total de 500 litros. Para testar a gravidade do problema, João resolveu criar um programa que ajudasse ele e o seu pai a descobrir quantos litros de água são vazados por hora, e quantos litros de água sobram ao final do dia. Nesse caso, essas informações irão auxiliar João a saber se o nível de água da piscina é crítico ou não.

 

//* Sendo assim, faça um programa que: 

//* Crie uma variável que o nome é vazaoAgua, a qual vai registrar o valor determinado de vazão de água pelo usuário através de um comando prompt

//* Calcule o total de água vazada em 24 horas 

//* Calcule e mostre na tela a quantidade de água restante ao final do dia 

//* Se a quantidade água restante for menor que 300 litros, mostre na tela a mensagem “ALERTA! Nível de água muito baixo”. Se a quantidade for maior ou igual a 300 litros, mostre “Nível de água OK!”


// let  vazaoAgua = prompt("Digite a quantidade que esta vazando ate o momento de agua: ")

// let resultVazao = Number(vazaoAgua) * 24

// if (resultVazao < 300) {

//     alert("ALERTA! Nível de água muito baixo: " + resultVazao + " Litros")
    
// } else if (resultVazao >= 300) {

//     alert("Nível de água OK! " + resultVazao + " Litros")
    
// } else {

//     alert("Digito invalido")
// }