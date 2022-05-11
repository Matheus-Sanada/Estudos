

//* Criando a classe da nave
class stationNave {

    constructor (name, quantity) {

        this.name = name
        this.quantity = quantity

        this.ignition = false
        this.oppenDoor = false

    }

    ignitionNave () {

        this.ignition = true
        this.oppenDoor = true

    }



}

//* Criando a opção de escolha do usuario
function menu() {

    let optionsMenu
    while (optionsMenu != "1" && optionsMenu != "2" && optionsMenu != "3") {

        optionsMenu = prompt("Escolha uma opção:\n\n1 - Engatar nave\n2 - Imprimir informações da nave\n3 - Sair do programa")
        
    }

    return optionsMenu
    
}

//* Perguntando informações da nave
function informationNave() {

    let nameNav = prompt("Digite o nome da sua nave: ")
    let tripulation = prompt("Digite a quantidade de tripulantes que tem na sua nave: ")

    let informationStation = new stationNave(nameNav, tripulation)

    return informationStation
    
}

//* Criando o print das informações da nave
function printInformation(stationNave) {

    let stationList = ""

    stationNave.forEach((stationNave, index) => {

        stationList +=    (index + 1) + "- " + stationNave.name + " (" + stationNave.quantity + " tripulantes)\n"

    })

    alert(stationList)

}

//* Criando a interação do usuario
let hitchedStation = []
let optionsMenu


while(optionsMenu != "3") {

    optionsMenu = menu()

    switch(optionsMenu) {

        case "1":
            let stationToAdd = informationNave()
            stationToAdd.ignitionNave()
            hitchedStation.push(stationToAdd)
            break

        case "2":
            printInformation(hitchedStation)
            break
    }
}