// Hoisting => uma definição estrita de elevação sugere que as declarações de variáveis e funções são fisicamente movidas para o topo do seu código, mas isso não é realmente o que acontece. Em vez disso, as declarações de variável e função são colocadas na memória durante a fase de compilação, mas permanecem exatamente onde você as digitou no seu código.

let test = () => {

    console.log(a)
    var a = 10
    console.log(a)
    
}

test()


let test2 = () => {

    console.log(a)
    let a = 10
    console.log(a)

}

test2()