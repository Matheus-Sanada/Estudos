function car (velocidadeMax = 200, delta = 5) {

    //* Atributo privado
    let velocidadeAtual = 0

    //* Atributo publico
    this.acelerar = function () {

        if (velocidadeAtual + delta <= velocidadeMax) {

            velocidadeAtual += delta
            
        } else {

            velocidadeAtual = velocidadeMax

        }

    }


    //* Metodo publico
    this.getVelocidadeAtual = function () {

        return velocidadeAtual
    }

}

const uno = new car
uno.acelerar
console.log(uno.getVelocidadeAtual())

const ferrari = new car(100, 50)
ferrari.acelerar
console.log(ferrari.getVelocidadeAtual())