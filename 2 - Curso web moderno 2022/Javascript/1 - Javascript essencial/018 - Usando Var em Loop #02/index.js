const funcs = [] //* CRIEI UM ARRAY

for (var index = 0; index < 10; index++) { //* ABRI UMA ESTRUTURA DE CONTROLE (FOR) E DENTRO DELA CRIEI UMA VAR (PEGADINHA) QUE MOSTRARIA OS NUMERO DE 1 ATE 9, POIS DENTRO DO FOR EU PEDI PARA INDEX SER IGUAL A ZERO, INDEX SER MENOR DO QUE 10 E INCREMENTEI O INDEX

    funcs.push(function () {  //* DENTRO DA ESTRUTURA DE CONTROLE EU ADD UM .PUSH(ADD ELEMENTOS DENTRO DO ARRAY) E DENTRO DO .PUSH EU CRIEI UM ARROW FUNCTION QUE TEM UM CONSOLE.LOG COM O VALOR INDEX

        console.log(index)


    })
}

funcs[2] () //* AQUI EU CHAMEI O ARRAY E PASSEI O PARAMETRO [2] QUE SERIA MOSTRADO SE ESTUVESSE TUDO CERTO O NUMERO (2)
funcs[8] () //* AQUI EU CHAMEI O ARRAY E PASSEI O PARAMETRO [2] QUE SERIA MOSTRADO SE ESTUVESSE TUDO CERTO O NUMERO (8)



//* O RESULTADO SERA FUNCS[2] () => 10

//* O RESULTADO SERA FUNCS[8] () => 10


//* MAS PORQUE 10 MATHEUS SENDO QUE ERA PARA MOSTRAR OS VALORES CORRESPONDENTES. O VALOR DEU 10 E 10 POIS NO VAR ELE TEM UM PROBLEMA DE NAO RESPEITA O VALOR DA VARAVEL (INDEX) OU SEJA ELE NAO TRABALHA COMO O LET QUE USA ELEMENTOS DE BLOCO.