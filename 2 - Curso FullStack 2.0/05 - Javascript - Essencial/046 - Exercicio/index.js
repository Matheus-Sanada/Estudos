    function text () {
        let modelCar = prompt("Digite o modelo do seu carro: ")
        let typeCar = prompt("Digite se seu carro é flex ou não: ")

        let velocityMax = prompt("Digite a velocidade maxima que seu carro devera ter:  (KM/H)")

        let optionsUser = prompt("O que você deseja fazer:\n\n1 - Acelerar carro\n2 - Estacionar carro")

        switch (optionsUser) {

            case "1":

            let velocity = prompt("Digite a velocide que seu carro estara: ")

            if (velocity > velocityMax) {

                alert("Velocidade maxima ultrapassada")
                alert(`Velocidade da nave: ${velocity}KM/H\nVelocidade maxima permitida: ${velocityMax}KM/H`)
                
            } else {

                alert("Velocidade permitida")
                alert(`Informações do seu carro:\nModelo: ${modelCar}\nTipo de combustivel: ${typeCar}\nVelocidade da nave: ${velocity}KM/H\nVelocidade maxima permitida: ${velocityMax}KM/H`)
                
            }
                
                break;

            case "2":

            let car = {

                modelCar,
                typeCar,
                velocity,
                velocityMax
            }

            alert(`O seu carro esta estacionado :)\n\nInformações do seu carro:\nModelo: ${car.modelCar}\nTipo de combustivel: ${car.typeCar}\nVelocidade atual do carro: ${car.velocity}\nVelocidade maxima do carro: ${car.velocityMax}`)
                
                break;
        
            default:

            alert("Digito invalido")
                break;
        }
    }

    text()
