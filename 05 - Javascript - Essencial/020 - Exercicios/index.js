let nameNav = prompt("Digite o nome da sua nave: ");

let caracterSubstitutions = prompt("Qual caracter você quer substituir? ");

let newCaracterSubstitutions = prompt("Por qual caracter você deseja substituir? ");

let position = ""

for (let pos = 0; pos < nameNav.length; pos++) {
    
    if (nameNav[pos] == caracterSubstitutions) {

        position += newCaracterSubstitutions
        
    } else {

        position += nameNav[pos];
    }
    
    
}


alert (`O novo nome da nave é ${position}`)


