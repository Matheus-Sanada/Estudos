//* Criando uma classe:

// class spacialStation {

//     //* Criando metodo construtor dentro da classe:

//     constructor (name, plateformQuantity) {

//         //* O this serve de referência para pegar os elementos da mesma função!!!

//         this.name = name
//         this.plateformQuantity = plateformQuantity

//     }

// }

// let observatory = new spacialStation("Observatorio", 40)
                  //* Quando eu chamo o new + a classe criada eu estou na verdade chamando o metodo construtor que foi criado dentro da classe e os dois parametros criados dentro dos parenteses do new spacialStation(instancia) sao enviados como parametro dos construtor

// console.log(observatory)





class spaceshipName {
    constructor (name, type = "descoberta") {

        this.name = name
        this.type = type

    }
}

let darwin = new spaceshipName ("Darwin")
let superNova = new spaceshipName ("Supernova", "Galatica")


console.log(darwin)
console.log(superNova)