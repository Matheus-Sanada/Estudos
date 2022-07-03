//* Callback => Chamar de volta uma função

const fabricantes = ["Mercedes", "Audi", "Bmw", "Ferrari"]

function print(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(print)
fabricantes.forEach(function(a) {
    console.log(a)
})