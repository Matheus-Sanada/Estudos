function userCalc(min, max) {

    const value = Math.random() * (max - min) + min
    return Math.floor(value)
    
}

let options = 10

do {
    options = userCalc(10, 40)
    console.log(`Opção escolhida foi: ${options}`)

} while (options != 10);

console.log(`Ate a proxima`)

// A declaração do...while cria um laço que executa uma declaração até que o teste da condição for falsa (false). A condição é avaliada depois que o bloco de código é executado, resultando que uma declaração seja executada pelo menos uma vez.