## Metodo SET

- O metodo set é utilizado para poder atribuir um valor numa variavel, e quando ele é criado a gente pode chamar esse metodo ao receber o valor

class transportSpaceship {

    constructor (name) {
        this.name = name;
        this.currentVelocity = 0
    }


    set velocity(newVelocity) {

        if (newVelocity > 120) {

            this.currentVelocity = 120
            
        } else {

            this.currentVelocity = newVelocity


        }


    }
}

let spaceship = new transportSpaceship("Transporte")

spaceship.velocity = 130

console.log(spaceship)

## METODO GET

- O metodo get é utilizado para retornar um valor com uma variavel


class sourceProcessor {
    
    constructor(name,monthProcessLoad) {

        this.name = name;
        this.monthProcessLoad = monthProcessLoad;


    }


    get weekProcessLoad () {

        return this.monthProcessLoad / 4


    }
}

let resultFinal = new sourceProcessor ("Gaia", 500)

resultFinal.monthProcessLoad = 600

console.log (resultFinal.weekProcessLoad)