alert ("Seja bem-vindo(a)")

let nameProduct = prompt ("Digite o nome do produto que você quer adicionar ao seu carrinho: ")

let product = prompt (`Quer adicionar mais um item?\n1 - Sim\n2 - Não`)

let productItens = 0

while (product == "1") {

    productItens += 1
    product = prompt (`Quer adicionar mais um item?\n1 - Sim\n2 - Não`)
}

alert (`Você adicionou ${nameProduct} ao seu carrinho, com a quantidade de: ${productItens} itens.`)