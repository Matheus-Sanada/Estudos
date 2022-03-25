## O QUE SÃO OPERAÇÕES LOGICAS?

- Expressões construidas a partir de operações com valores booleanos.
- Tambem retornam um valor booleano
- Seguimos os resultados logicos contidos na Tabela Verdade.

## TABELA VERDADE

#### É como uma tabuada

- É uma tabuada de resultados.
- A tabuada mostra o resultado das multiplicações de diversos numeros.
- Os valores booleanos tem a Tabela Verde.
- Mostra os resultados de diversas operações.
  
#### Diferente da tabuada, os valores logicos são apenas dois(true e false)

#### As operações basicas que temos na programação hoje são 3

- E(AND)
- OU(OR)
- NÃO(NOT)

#### A Tabela Verdade é o resultado da combinação dos dois valores booleanos em todas a combinações possiveis

- Já que no caso destas 3 operações, mesmo quando há mais termos podemos isolar de 2 em 2.

## EXPRESSÕES LOGICAS

- Numa expressão logica, podemos ter um ou mais operadores logicos.
- Cada termo é um valor booleano ou operação que retorne um booleano.

##### Exemplo 01

10 > 4 OU 5 <=5

##### Exemplo 02

0 >= OU 5 > 6 E 1 > 0

## REPRESENTAÇÕES POR SIMBOLOS 

### OPERADOR E (&&)

- O (E) ele é representado por dois e comerciais (&&)

//console.log(spaceship.length == 9 && velocity > 15)
// TRUE E TRUE = TRUE

//console.log(velocity > 10 && velocity < 19)
// TRUE E FALSE = FALSE

//console.log(velocity < 17 && spaceship == "Elemental")
// FALSE E TRUE = FALSE

//console.log(spaceship == "Golias" && velocity > 21)
// FALSE E FALSE = FALSE
  
### OPERADOR OU (||)

- O (OU) ele é representado por duas barras (||)

//console.log(spaceship.length == 9 || velocity  > 15)
// TRUE OU TRUE = TRUE

//console.log(velocity > 10 || velocity < 19)
// TRUE OU FALSE = TRUE

//console.log(velocity < 17 || spaceship == "Elemental" )
// FALSE OU TRUE = TRUE

//console.log(spaceship == "Golias" || velocity > 21)
// FALSE OU FALSE = FALSE

### OPERADOR NÃO (!)

- O (NÃO) é representado por (!)

//console.log(!(velocity > 19))
// NÃO TRUE = FALSE

//console.log(!(spaceship == "Golias"))
// NÃO FALSE = TRUE