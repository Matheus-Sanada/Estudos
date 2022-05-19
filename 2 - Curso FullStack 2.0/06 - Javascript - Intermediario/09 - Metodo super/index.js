class spaceship {
    constructor (name, maxCrew, maxRecomendedVelocity) {

        this.name = name;
        this.maxCrew = maxCrew;
        this.maxRecomendedVelocity = maxRecomendedVelocity;
        this.velocity = 0
    }

    speedUp (aceleration) {
        this.velocity += aceleration
        if (this.velocity > this.maxRecomendedVelocity) {

            alert("Velocidade acima do permitido")

        }
    }
}


class transportSpaceship extends spaceship {
    
    constructor (name, maxCrew, maxRecomendedVelocity, maxLoadWeight) {

        super(name, maxCrew, maxRecomendedVelocity)
        this.maxLoadWeight = maxLoadWeight

    }

    speedUp (aceleration) {

        aceleration /= 2

        alert ("Incrementando velocidade em " + aceleration + " km/s")

        super.speedUp(aceleration)
    }
    
}

let transport = new transportSpaceship ("Transportadora", 10, 100, 400)

console.log(transport)
transportSpaceship.speedUp(210)