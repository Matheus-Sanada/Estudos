function speedUp(velocity, aceleration,name, unit = "Km/s") {

    let newVelocity = velocity + aceleration;

    name = prompt("Digite o seu nome: ")

    alert(`${name}, você esta numa velocidade de ${newVelocity} ${unit}`)

    return newVelocity
}

speedUp(20, 100)