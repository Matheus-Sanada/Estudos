// function average(numbers) {  let sum = 0

//     numbers.forEach(number => {
//       sum += num
//     })
  
//     const avg = sum / numbers.length
  
//     return avg
// }


let validation = 1

function userOptions() {

    let options = prompt("Escolha uma opção:\n\n1 - Fazer calculo aritmético\n2 - Sair do programa")

    switch (options) {

        case "1":

        calcNumber ()
            
            break;

        case "2":
            stop()

            break;
    
        default:

        alert("Numero invalido")
            break;
    }




    
    
}

while (validation == 1) {

    userOptions()
    
}


function calcNumber () {

    let number = prompt("Digite o numero para fazer o calculo aritmético: ")

    let resultFinal = number / 2

    alert(`O resultado da sua operação aritmética é ${resultFinal}`)
  
}

function stop() {

    let stopProgram = prompt("Deseja realmente sair do programa?\n\n1 - SIM\n2 - NÃO")
    

    switch (stopProgram) {
        
        case "1":

            alert("Programa encerrado :(")
            
            break;

        case "2":

            alert("Programa reiniciado :)")
            
            break;
    
        default:

            alert("Digito invalido, favor selecionar uma das opções.")
            break;
    }
}









