// alert("Seja bem vindo(a)")

// const hitchSpaceships = [

//     ["Fenix", 8, true],
//     ["Golias", 10, true],
//     ["Helmet", 5, false],
//     ["Elementar", 3, true], 
//     ["Darwin", 13, false]

// ]

// 1 - Filtrar o nome das naves que tem mais de 9 tripulantes

/* 

//* O filter ele ira retornar apenas golias e darwin

["Golias", 10, true],
["Darwin", 13, false]

//* E o map ira conter golias e darwin e ele so ira retornar o elemento zero(nome) de cada subarray

["Golias"]
["Darwin"]
*/

// let filterTripulations = hitchSpaceships.filter(tripulations => {

//     return tripulations[1] > 9

// }).map(spaceship => {

//     return spaceship[0]

// })

// 2 - Informar o número da plataforma em que está a primeira nave que ainda está com engate pendente.
// Utilize a função findlndex, que é bem parecida com o find, mas retorna o índice de um filtro em vez do elemento do Array

// let findMyStop = hitchSpaceships.findIndex(spaceship => {

//     return spaceship[2] == false

// })


// 3 - Destacar o nome de todas ds naves colando-as em caixa alta e exibindo

// let upperNameNav = hitchSpaceships.map(spaceship => {

//     return spaceship[0].toUpperCase()

// })
    

// 4 - Imprimir o resultado


// let message = (`Naves com mais de 9 tripulantes: ${filterTripulations}`)

// message += (`\nPlataforma com processo de engante: ${findMyStop + 1}`)

// message += (`\nEspaçonaves em destaques: ${upperNameNav}`)

// alert(message)



