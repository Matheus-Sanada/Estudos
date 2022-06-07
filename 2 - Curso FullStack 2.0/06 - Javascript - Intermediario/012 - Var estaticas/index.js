class spaceship {

    static get decelaration () {
        return 0.15
    }

    constructor (name) {
        this.name = name;
        this.correntVelocity = 0
    }

    speedUp (aceleration) {

        this.currentVelocity += (aceleration * (1 - spaceship.decelaration))
    }
}

let Spaceship = new spaceship("Apollo")

spaceship.speedUp(100)

console.log(Spaceship)