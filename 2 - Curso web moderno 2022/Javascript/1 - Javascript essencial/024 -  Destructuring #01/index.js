// NOVO RECURSO NO ES2015

const person = {

    name: "Matheus Sanada",
    age: 22 + " years",
    
        endereded: {

        home: "Rua pedro vaz coelho",
        number: 122

        
        }


}



// OPERADOR DE DESESTRUTURAÇÃO
const { name, age } = person
console.log(name, age)

// MUDANDO AS VARIAVEIS DO OBJETO
const {name: n, age: ag} = person
console.log(n, ag)

// VARIAVEIS QUE NAO EXISTE NO OBJETO
const {sobrenome, bemHumorada = true} = person
console.log(sobrenome, bemHumorada)

// ACESSANDO UM OBJETO DENTRO DE OUTRO OBJETO
const {endereded: {home, number}} = person
console.log(home,number)