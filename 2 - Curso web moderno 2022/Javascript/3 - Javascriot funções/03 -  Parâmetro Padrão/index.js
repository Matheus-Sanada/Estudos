//* Estrategia 1 para gerar valor padrão

function sum(a, b, c) {

    a = a || 1
    b = b || 2
    c = c || 3

    return a + b + c
    
}

console.log(sum(), sum(3), sum(2,3,4), sum(0,0,0))

//* Estrategias 2, 3 e 4 para gerar valor padrao

function sum2(a,b,c) {

    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c

    return a + b + c
    
}

console.log(sum2(2,8,2))


//* Valor padroa do es2015 

function sum3(a = 1,b = 2,c = 3) {

    return a + b + c
}

console.log(sum3(0,0,0))