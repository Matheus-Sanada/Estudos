const notas = [7.7,6.6,5.5,4.4,3.3,2.2,.1,-1]

//* sem callback

const notasBaixas = []
for (let i in notas) {

    if (notas[i] < 4) {
        notasBaixas.push(notas[i])  
    }
}

console.log(notasBaixas)


//* com callback

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 4
})

console.log(notasBaixas2)