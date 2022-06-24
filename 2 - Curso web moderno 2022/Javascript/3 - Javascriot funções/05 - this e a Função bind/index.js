const pessoa = {
    saudação: "Bom dia",
    falar () {
        console.log(this.saudação);
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas: funcional e OO

const falaDePessoa = pessoa.falar.bind(pessoa)
falaDePessoa()

//* O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido, com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada.