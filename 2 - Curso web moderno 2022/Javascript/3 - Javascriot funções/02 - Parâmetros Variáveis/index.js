function soma () {
    let soma = 0

    for (let i in arguments) {
    //* O laço for...in  interage sobre propriedades enumeradas de um objeto, na ordem original de inserção.  O laço pode ser executado para cada propriedade distinta do objeto.


        soma += arguments[i]
        //* O objeto arguments é uma variável local disponível dentro de todas as funções. Você pode referenciar os argumentos de uma função dentro da função usando o objeto arguments. Esse objeto contém um registro para cada argumento fornecido para a função, com o índice do primeiro registro começando em 0. Por exemplo, se são passados três argumentos para uma função, você pode referenciá-los como a seguir: 

        //* Os argumentos também podem ser definidos:
        //* arguments[1] = 'novo valor';

        
    }

    return soma
}

console.log(soma(1,2,3,4,5,6,7,8,9))