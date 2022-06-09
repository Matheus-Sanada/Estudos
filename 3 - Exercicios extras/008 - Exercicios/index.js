

//* Array => Lista


// CRIANDO UM ARRAY

let frutas = ["Banana", "Maçã"]
console.log(frutas.length)

//* .length retorna o comprimento da string

// ACESSANDO UM ITEM(INDEX) DO ARRAY

let primeiro = frutas[0]
let ultimo = frutas[frutas.length - 1]

console.log(primeiro)
console.log(ultimo)

//* Para acessar um item num array usamos chaves [] + o numero da posição do array

// Ex01 - Crie uma lista usando Array que  contenha as compras de uma senhora

let listBuy = [

    "Maçã",
    "Banana",
    "Pessego",
    "Pão",
    "Queijo",
    "Presunto",
    "Arroz",
    "Feijao"
]

confirm("Essa é sua lista de compras? " + "\n\n" + listBuy)

// Mostre a quantidade de itens dentro do array criado acima

alert("A quantidade de itens que tem na minha sacola é de: " + listBuy.length + " Itens")

// Acesse o primeiro item da sua lista e o ultimo item da sua lista

let listOne = listBuy[0]
let listFinal = listBuy[listBuy.length - 1]

alert("O primeiro item da minha lista é: " + listOne + "\n" + "E o ultimo item da minha lista é: " + listFinal)

