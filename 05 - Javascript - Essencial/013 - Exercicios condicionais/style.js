let namePilot = prompt("Qual o seu nome? Piloto!")
let velocityInitial = 0
let velocity = prompt("Informe a velocidade da sua nave! Piloto!")
let confirmVelocity = confirm(`Tem certeza que quer essa velocidade de: ${velocity} Km/s! Piloto`)

if (confirmVelocity) {
    velocityInitial = velocity 
}

if (velocityInitial <= 0) {

    alert("Nave esta parada, considere partir e aumentar a velocidade")
    
} else if (velocityInitial < 40) {

    alert("Você esta devagar, podemos aumentar mais")

} else if (velocityInitial < 80) {
    alert("Parece uma boa velocidade piloto!")

} else if (velocityInitial < 100) {

    alert("Velocidade perigosa!")

} else {
    alert("Velocidade perigosa. Controle automático forçado.")
}

alert (`Piloto: ${namePilot} \nVelocidade ${velocityInitial}`)

