class Spaceship {
    constructor(name, maxCrew, maxRecomendedVelocity) {

        this.name = name;
        this.maxCrew = maxCrew;
        this.maxRecomendedVelocity = maxRecomendedVelocity;
        this.currentVelocity = 0

    }



    speedUp(aceleration) {

        this.currentVelocity += aceleration;

        if (this.currentVelocity > this.maxRecomendedVelocity) {

            alert("Velocida maxima ultrapassada :( Favor reduzir a velocidade")
            
        } else {
            alert("Velocidade dentro do permitido")
        }
    }
}




class BattleSpaceship extends Spaceship {

    stop() {
        this.currentVelocity = 0
        alert("Recolhendo armas e parando a nave de batalha")
    }

}



class DiscoverySpaceship extends Spaceship {

    stop() {
        this.currentVelocity = 0
        alert("Recolhendo equipamentos e oarando nave de descoberta")
    }

}

let darwin = new DiscoverySpaceship("Darwin", 40, 150)
let fenix = new BattleSpaceship("Fenix", 20, 250)

darwin.speedUp(200)
fenix.speedUp(210)

darwin.stop()
fenix.stop()