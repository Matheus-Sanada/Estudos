//* O this é uma forma de referenciar um objeto atua daquela execução.
//* O this acessa o codigo que esta sendo executado naquele momento.


const test = () => {console.log(this === Window)}
//* This é sempre o objeto que esta sendo referenciado naquele momento da execução, que é o dono daquela função.

//* Motivos para a criação da arrow function.

//* 1 - Diminuir a sintaxe => redução de sintaxe.

//* 2 - Outro motivo para ter uma function arrow é porque o this nao ira variar.