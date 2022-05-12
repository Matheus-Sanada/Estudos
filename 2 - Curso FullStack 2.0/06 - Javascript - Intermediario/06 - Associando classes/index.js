class captain {

    constructor (name, age, hours) {
        this.name = name
        this.age = age
        this.hours = hours
    }

}

class Spaceship {

    constructor (name, quantity, captainName,captainAge,captainHours) {

        this.name = name
        this.quantity = quantity
        this.captainName = new captain(captainName,captainAge,captainHours)

    }
}


let spaceship = new Spaceship("artemis", 13, "Matheus Sanada", 45, 15000)

console.log(spaceship)

