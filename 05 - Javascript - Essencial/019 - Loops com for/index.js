let nameNav = "Helmet"
let newNameNav = ""

for (let i = 0; i < nameNav.length; i++) {

    if(nameNav[i] == "e") {
        newNameNav = "i"
    } else {

        newNameNav += nameNav[i]

    }
    
}

console.log(newNameNav)