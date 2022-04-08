//* 1 - Primeira armadilha

// function greetPilot(name, message = "Olá") {
    
//     alert(`${message}, ${name}`)
// }

// greetPilot()

// No Javascript nenhum parametro é obrigatorio


//* 2 - Armadilha - ordem dos parametros

function speedUp(velocity, aceleration, unit = "Km/s") {

    let newVelocity = velocity + aceleration

    alert(`Voce esta numa velocidade de: ${newVelocity} ${unit}`)


    
}

speedUp(50, 25)

// NaN -> Not a Number = Não é um numero.