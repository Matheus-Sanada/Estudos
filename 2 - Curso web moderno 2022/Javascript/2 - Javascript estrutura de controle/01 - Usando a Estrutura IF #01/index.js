// function alunMedia(noteOne, noteTwo, avaliationFinal) {


//     const result = (noteOne + noteTwo + avaliationFinal) / 3


//     if (result >= 6) {

//         console.log("Aprovado")
        
//     } else {

//         console.log("Reprovado")

//     }
    
// }

// alunMedia(5, 5, 5)



Number.prototype.entre = function (inicio, fim) {

    return this >= inicio && this <= fim



}

const resultPrint = function (nota) {

    if (nota.entre(9, 10)) {

        console.log("Quadro de Honra")
        
    } else if (nota.entre(7, 8.99)) {

        console.log("Aprovado")


    } else if (nota.entre(4, 6)) {

        console.log("Recuperação")


    }
      else if (nota.entre(0, 1)) {

        console.log("Reprovado")


    } else {

        console.log("Numero invalido")
    }

    console.log("Fim")

}

resultPrint (1)