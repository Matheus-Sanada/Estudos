//* A estrutura de controle (WHILE) é mais apropriada quando temos uma quantidade indeterminada de repetições

//* declaração while cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução da rotina.


function getInteiroAleator(min, max) {

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
    
}

let option = 0

while (option != -1) {
// WHILE => ENQUANTO

    option = getInteiroAleator(-1, 10)
    console.log(`Opção escolhida foi: ${option}`)
}

console.log("Ate a proxima")