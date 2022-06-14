console.log(Math.ceil(7.6)) // o metodo Math.ceil arredonda o numero para cima e o Math.floor arrendoda o numero para baixo

console.log(Math.floor(7.6))


function Obj(name) {

    this.name = name

        
    // Em JavaScript, a palavra- thischave se refere a um objeto .

    // Qual objeto depende de como thisestá sendo invocado (usado ou chamado).

    // A thispalavra-chave se refere a objetos diferentes dependendo de como é usada:

    // Em um método de objeto, thisrefere-se ao objeto .
    // Sozinho, thisrefere-se ao objeto global .
    // Em uma função, thisrefere-se ao objeto global .
    // Em uma função, no modo estrito, thisé undefined.
    // Em um evento, thisrefere-se ao elemento que recebeu o evento.
    // Métodos como call(), apply()e bind()podem se referir thisa qualquer objeto .
    
}

const Obj2 = new Obj("Cadeira")
const Obj3 = new Obj("Cadeira")


console.log(Obj2.name)
console.log(Obj3.name)