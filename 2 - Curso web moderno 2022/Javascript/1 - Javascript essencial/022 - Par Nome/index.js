// PAR NOME/VALOR
const welcome = "Olá" // contexto lexico = local que sua var foi definida

function exec() {

    const welcome = "Falaaaa" // contexto lexico

    return welcome;
    
}

exec()

// OBJETOS SÃO GRUPOS ANINHADOS DE PARES NOME/VALOR

const cliente = {

    name: "Pedro", age: 18 + " Years",

    name2: "Shirlei", age2: 41 + " Years",

    name3: "Matheus", age3: 21 + " Years",

    name4: "Edson", age4: 45 + " Years",
    
    name5: "Saray", age5: 9 + " Years",

    endereços: {

        logradouro: "Rua pedro vaz coelho",
        numero: 122


    }
}


console.log(welcome)
console.log(exec())
console.log(cliente)

