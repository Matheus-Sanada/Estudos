// Quando um objeto recebe uma função ele se chama metodos e as outras propriedades que nao possuem funções nos chamamos de atributos


let car = {

    name: "Fiat Uno",
    yearCar: 2012,
    type: "Flex",


    velocity: function () {

        let options = prompt("Deseja comprar este carro?\n\n1 - Sim\n2 - Não")

        switch (options) {
            case "1":
                alert("Parabens carro comprado")
                
                break;

            case "2":
                alert("Compra cancelada")
                
                break;
        
            default:

            alert("Digito invalido")

                break;
        }

    }
        

}

//*car.velocity()
// Chamando a função dentro do objeto(metodo)

car.acelerantion = 0
car.acelerantionCar =  function(velocityCar) {

    this.acelerantion += velocityCar
}

// this -> Ira referenciar o proprio objeto

console.log(car)
car.acelerantionCar(10)
console.log(car)