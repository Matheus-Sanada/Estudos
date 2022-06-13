const funcs = []

for (var index = 0; index < 10; index++) {

    funcs.push(function () {

        console.log(index)


    })
}

funcs[2] ()
funcs[8] ()

// NO VAR ELE TEM UM PROBLEMA POIS ELE NAO RESPEITA O VALOR DA VARAVEL (I)