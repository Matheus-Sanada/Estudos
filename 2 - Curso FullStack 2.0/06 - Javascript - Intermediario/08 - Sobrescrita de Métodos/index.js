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
    
    speedUp () {

        alert("Naves de transporte só aumentam a velocidade em 1km/s")

        this.velocity += 1
    }
    
}

let TransportsSpaceship = new transportSpaceship("Transportadora", 10, 100)

TransportsSpaceship.speedUp(130)


