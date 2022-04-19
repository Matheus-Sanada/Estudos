//* As funções de iteração que veremos sao HOF
    // Enviamos callbacks(Funções  que enviamos como parametro)

//* O callback é chamado para cada elemento do array
//* Segue o seguinte formato

// array.functionDeIterar(function(elementoAtual, indice, array) {
//     corpo da função
// })

//* Espera um callback que receba como parametro o elemento atual a indice e o array completo

//* A tradução em português de forEach é para cada. Portanto, seu objetivo é executar determinada função para cada elemento de um array em ordem ascendente.

//* Suponha que você tenha uma lista de nomes e deseje exibir na tela uma mensagem de cumprimento para cada nome da lista, por exemplo. Dessa forma, será preciso executar uma determinada ação com cada um desses elementos.

//* O método forEach() executa uma função callback para cada elemento do array. Por isso, ele representa uma boa alternativa para a execução do exemplo acima. Basicamente, uma função callback corresponde a uma chamada de retorno, ou seja, ela retorna o processamento de um comando ou de um conjunto de comandos para que esse conteúdo seja utilizado no ponto de chamada.

let nameNavs = ["Malaquis", "Pedro", "Viado", "Bicha", "Tarado"]

nameNavs.forEach(function(currentName, index) {

    console.log("Nave " + currentName +"\nindice: " + index)

})


//* O MAP ele funciona como uma estrutura de repetição, pois percorre todos os elementos do array, executa determinada ação e retorna um novo conteúdo.


let nameUser = [

    "Matheus",
    "Shirlei",
    "Edson", 
    "Pedro",
    "Saray"
]

let uperName = nameUser.map(function(currentNameUser, index) {
    let upName = currentNameUser.toUpperCase()
    return upName
})

console.log(uperName)

//* O FILTER O método filter() é um recurso que permite fazer a filtragem de elementos com apenas poucas linhas de comandos. Isso facilita o entendimento e a manutenção do código pelas pessoas que desenvolvem softwares.

//* Na prática, ele faz a leitura dos elementos da array em busca de um valor de referência passado por meio de uma função callback. Ao fazer o teste em cada elemento, o método retorna um ou mais conteúdos que atendam à especificação indicada na função callback e armazena o resultado em uma nova variável do tipo array.

let filterUserName = [

    "Matheus Sanada", 
    "Pedro Sanada",
    "Edson Sanada",
    "Saray Sanada"
]

let filter7Chars = filterUserName.filter(nameUser => {

    return nameUser.length >= 9

})

console.log(filter7Chars)


//* O find()método retorna o primeiro elemento em uma matriz que satisfaça uma função fornecida.


let filterName = [

    "Matheus Sanada", 
    "Pedro Sanada",
    "Edson Sanada",
    "Saray Sanada"
]

let filterChars = filterName.find(nameUser => {

    return nameUser.length >= 9

})

console.log(filterChars)