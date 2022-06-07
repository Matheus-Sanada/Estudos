alert("Seja bem vindo(a) a lista de convidados online :)")

class informations {

    constructor (name, quantity, local) {

        this.name = name;
        this.quantity = quantity;
        this.local = local;


    }
}

function menu() {

    let menuOptions
    while (menuOptions != "1" && menuOptions != "2" && menuOptions != "3") {

        menuOptions = prompt("Escolha uma opção:\n\n1 - Adicionar infomações dos convidados\n2 - Imprimir lista de infomações\n3 - Fechar programa")

    }

    return menuOptions
}

function informationsImportants() {

    let nameUser = prompt("Digite o nome do convidado: ")
    let quantity = prompt("Digite a quantidade de pessoas que tem na familia desse convidado: ")
    let local = prompt("Digite a cidade onde esse convidado mora: ")

    let informationsUser = new informations (nameUser, quantity, local)
    
    return informationsUser
}

function printer(informations) {

    let infomationList = ""

    informations.forEach((informations, index) => {

        infomationList += (index + 1) + " -" + " Nome do convidado: " + informations.name  + "\n" + "Quantidade de familiares: " + informations.quantity + " Pessoas\n" + "Local de origem: " + informations.local + "\n\n"
        
    })

    alert(infomationList)
    
}

let infoUsers = []
let optionsMenu

while (optionsMenu != "3") {

    optionsMenu = menu()


    switch (optionsMenu) {

        case "1":

            let infoToAdd = informationsImportants()
            infoUsers.push(infoToAdd)

            break;

        case "2":

            printer(infoUsers)
            break;
    }
    
}


// alert("S E J A  B E M  V I N D O ( A ) ")


// class listBuy {
//     constructor (name, value) {

//         this.name = name
//         this.value = value

//     }
// }

// function menuList() {

//     let menu
//     while (menu != "1" && menu != "2" && menu != "3" && menu != "4") {


//         menu = prompt("Digite a opção desejada:\n\n1 - Adicionar item a sua lista de compras\n2 - Imprimir lista de compras\n3 - Sair do programa")
        
//     }

//     return menu
    
// }

// function informationsList() {

//     let nameProduct = prompt("Digite o nome do produto que você deseja adcionar ao seu carrinho: ")
//     let valueProduct = prompt("Digite o valor do seu produto: ")


//     let infosProduct = new listBuy(nameProduct, valueProduct)


//     return infosProduct
    
// }


// function printer(listBuy) {

//     let infomationList = ""

//     listBuy.forEach((listBuy, index) => {

//         infomationList += (index + 1) + " -" + " Nome do Produto: " + listBuy.name  + "\n" + "Valor do produto: " + listBuy.value + " Reais" + "\n\n"
        
//     })

//     alert(infomationList)
            
// }


// let buy = []
// let optionsProduct = ""

// while (optionsProduct != "3") {

//     optionsProduct = menuList()


//     switch (optionsProduct) {

//         case "1":

//             let infoToAddProduct = informationsList()
//             buy.push(infoToAddProduct)

//             break;

//         case "2":

//             printer(buy)
//             break;

//     }
            
    
// }