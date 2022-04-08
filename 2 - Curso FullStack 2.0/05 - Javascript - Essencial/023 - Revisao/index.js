let nameNave = prompt("Digite o nome da sua nave: ")
let reverseName = ""

for (let i = nameNave.length - 1; i >= 0; i--) {

    if (nameNave[i] == "e") {

        break
        
    }

    reverseName += nameNave[i]
    

    
}

alert(`O nome da sua nave é ${nameNave} e o nome invertido da sua nave é ${reverseName}`)


// Para fazer a inversao de uma propriedade usamos o termo(variavel = i = noma da variavel + .lenght = i >= 0 = i--)