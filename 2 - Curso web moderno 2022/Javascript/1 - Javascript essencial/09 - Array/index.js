// UM ARRAY É UMA FORMA DE VOCÊ AGRUPAR MULTIPLOS VALORES NUMA UNICA ESTRUTURA.

    
let nameusers = [7.7,8.9,9.9,1,4.4]

console.log(nameusers)
// Para acessar um indice do array usamos [posição do array] dentro do console.log

console.log(nameusers[4])

// Mudando o que tem dentro de um indice expecifico do array

nameusers[4] = 10
console.log(nameusers[4])



console.log(nameusers.length)
// Para saber a quantidade de elementos de um array usamod o metodo (.length)


nameusers.push(10,20,30)
// Para add novos elementos dentro do array usamos o metodo(.push)

console.log(nameusers)

console.log(nameusers.pop())
// Para remover o ultimo elemento do array usamos o metodo (pop) e ele retornara o ultimo elemento

console.log(nameusers)
delete nameusers[4]
// Ira deleter um elemento do array


console.log(typeof nameusers)