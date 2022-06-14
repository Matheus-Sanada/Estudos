const funcs = []


for (let index = 0; index < 10; index++) {

    funcs.push(function () {

        // O LET POR SER ESCOPO DE BLOCO RESPEITA A VARIAVEL (I)

        console.log(index)


    })

    
}

funcs[2] ()
funcs[8] ()
