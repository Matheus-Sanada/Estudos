alert("O que você deseja fazer piloto!!")

let velocityNav = 160
let validation = 1

function menuOptions() {

    let menuOptionsUser = prompt("Escolha uma opção:\n\n1 - Desacelerar a nave para desembarcar\n2 - Sair do programa")

    switch (menuOptionsUser) {

        case "1":

        slowVelocity()
            
            break;

        case "2":

        exit() 

            break;
    
        default:

        alert("Digito invalido")

            break;
    }
    
}

while (validation == 1) {

    menuOptions()
    
}


function slowVelocity() {

    velocityNav = velocityNav - 20

    alert("A nave esta desacelerando")

    while (slowVelocity) {
         
        if (velocityNav > 0 && velocityNav < 150) {

            alert(`Nave em velocidade permitida, ${velocityNav}km/s`)


            break;

        } else if (velocityNav > 0|| velocityNav < 10 ) {

             alert(`A nave esta parada e as comportas estao abertas.\nSua nave esta em ${velocityNav}km/s :)`)

            

        } 
    }

} 


function exit() {

    alert("Saindo do sistema de bordo")

    
    
}

