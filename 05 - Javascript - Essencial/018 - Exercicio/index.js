alert("Seja bem-vindo(a)! Piloto(a)")

let numDobraEspacial = 0
let dobraEspacial = ""


let nameNave = prompt("Informe o nome da sua nave espacial: ")

dobraEspacial = prompt("Deseja entrar na dobra espacial?\n1 - Sim\n2 - Não")




while (dobraEspacial == "1") {

    numDobraEspacial += 1
    dobraEspacial = prompt("Deseja entrar na dobra espacial?\n1 - Sim\n2 - Não")
    
}

alert(`Dobra finalizada.\n A nave ${nameNave}, fez ${numDobraEspacial} dobras`)