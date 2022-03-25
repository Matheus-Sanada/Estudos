let departureDateEntry = prompt("Digite a data de partida: (DD/MM/YYYY)")

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - departureDate

let choosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1 - Segundos\n2 - Minutos\n3 - Horas\n4 - Dias")

if (choosenOption == 1) {
    let second = Math.round(dateDiff / 1000)
    alert(`Tempo de vôo de:  ${second} segundos`)
    
} else if (choosenOption == 2) {

    let min = Math.round(dateDiff / 1000 / 60)
    alert(`Tempo de vôo de: ${min} minutos`)

} else if (choosenOption == 3) {

    let hours = Math.round(dateDiff / 1000 / 3600)
    alert(`Tempo de vôo de: ${hours} horas`)

} else if (choosenOption == 4) {

    let days = Math.round(dateDiff / 1000 / 3600 / 24 )
    alert(`Tempo de vôo de: ${days} dias`)

} 