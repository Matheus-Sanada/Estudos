class spaceship {
    constructor (name) {

        this.name = name
        this.velocity = 0

    }

    //* Criando um metodo numa classe
    spreedUp(aceleration) {

        this.velocity += aceleration

    }
}

let artemis = new spaceship ("Artemis")

//* Chamando o metodo criado na classe

artemis.spreedUp(10)
artemis.spreedUp(15)

console.log(artemis)