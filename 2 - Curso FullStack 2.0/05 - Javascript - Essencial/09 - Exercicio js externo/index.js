//* IRMA MAIS VELHA *//
const nameUserOlder = prompt("Digite o nome da sua irma mais velha:");
const idadeUserOlder = prompt("Digite a idade da sua irma mais velha:");

//* IRMA MAIS NOVA *//
const nameUserTeen = prompt("Digite o nome da sua irma mais nova:");    
const idadeUserTeen = prompt("Digite a idade da sua irma mais nova:");

//* DIFERENÇA DE IDADE ENTRE AS DUAS IRMAS *//
const calculatorAge = alert(`A diferença de idade da irma mais velha para irma mais nova é de: ${idadeUserOlder - idadeUserTeen} anos`) 

//* EXIBIR O NOME E IDADE DA IRMA MAIS VELHA *//
const generationNameOlder = alert(`O nome da sua irma mais velha é: ${nameUserOlder}, e ela tem a idade de: ${idadeUserOlder} anos`);

//* EXIBIR O NOME E IDADE DA IRMA MAIS NOVA *//
const generationNameTeen = alert(`O nome da sua irma mais nova é: ${nameUserTeen}, e ela tem a idade de: ${idadeUserTeen} anos`);

//* DADOS DAS DUAS IRMAS *//
const diceBrothers = alert(`O nome da sua irma mais velha é: ${nameUserOlder}, e a idade dela é de: ${idadeUserOlder} anos.\n O nome da sua irma mais nova é: ${nameUserTeen}, e a idade dela é de: ${idadeUserTeen} anos.`)