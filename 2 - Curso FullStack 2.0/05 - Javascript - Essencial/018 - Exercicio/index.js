

// let nameCar = prompt("Digite o nome do seu carro: ")
// let car = prompt("Deseja vender seu carro:\n1 - SIM\n2 - NÃO")
// let carMoney = Math.round(25.500) 
// let carRepetions = 0 

// while (car == "1") {

//     carRepetions += 1 
//     car = prompt("Deseja vender seu carro:\n1 - SIM\n2 - NÃO")
    
    
    
// }

// confirm(`Tem certeza que quer vender ${nameCar} pelo preço de R$ ${carMoney} Mil`)
// alert(`Carro vendido! ${carRepetions} vezes `)


let nameHouse = prompt("Deseja vender esta casa? ")
let nameHousePropriety = prompt("Digite o nome do futuro proprietaria: ")
let houseBuy = 25.000

let house = 0 

while (nameHouse == "Sim") {

    house += 1
    nameHouse = prompt("Deseja realmente vender esta casa? ")

    alert(`Casa vendida para o senhor(a) ${nameHousePropriety}, pelo valor de ${houseBuy} Mil Reais`)
    
}

alert(`Compra negada ${house} vezes`)




