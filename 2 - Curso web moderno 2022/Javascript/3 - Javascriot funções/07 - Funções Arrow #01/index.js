let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    //* Arrow function sempre é uma função anonima.
    return 2 * a
}

dobro = a => 2 * a // return esta immplicito
//* Usado quando se tem uma função de unica linha.
console.log(dobro(Math.PI))


let welcome = function () {
    return "Ola"
}

welcome = () => {
    return "Welcome"
}

welcome = () => "welcome"

console.log(welcome())