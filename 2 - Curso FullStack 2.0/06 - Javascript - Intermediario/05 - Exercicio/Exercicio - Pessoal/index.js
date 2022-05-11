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

        menuOptions = prompt("Escolha uma opção:\n1 - Adicionar infomações da festa\n2 - Imprimir lista de infomações\n3 - Fechar programa")

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

    let infomationList

    informations.forEach((informations, index) => {

        infomationList += (index + 1) + "-" + " Nome do convidado: " + informations.name  + "\n" + "Quantidade de familiares:" + informations.quantity + "Pessoas\n" + " Local de origem: " + informations.local
        
    })

    alert(infomationList)
    
}

let infoUsers = []
let infoMenu

while (infoMenu != "3") {

    informations = menu()


    switch (infoMenu) {

        case "1":

            let infoToAdd = informations()
            infoUsers.push(infoToAdd)

            break;

        case "2":

            printer(infoUsers)
            break;
    }
    
}