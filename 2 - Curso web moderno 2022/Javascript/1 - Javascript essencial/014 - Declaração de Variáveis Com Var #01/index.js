// A  VARIAVEL VAR DENTRO DE UM BLOCO DE CODIGO QUE NAO SEJA UMA FUNÇÃO, ELA FICARA VISIVEL PARA TODOS MESMO FORA DO SEU BLOCO.

// EX 01

{
  {
    {
      var sera = "sera???";
    }
  }
}

console.log(sera)


// O SCOPO É O LOCAL ONDE A VARIAVEL É VISIVEL ATE CERTO PONTO, ATE ONDE/ ATE QUE LOCAL DO CODIGO/ ATE ONDE A VARIVAEL É ACESSIVEL.

// EX 02

function teste() {

    var local = 123

    // DENTRO DO ESCOPO
    console.log(local)
    
}

teste()

// FORA DO ESCOPO
console.log(teste)


// EX 03

var a = 123

// QUANDO CRIAMOS UMA VARIAVEL FORA DE UMA FUNÇÃO, ESSA VARIAVEL É CONSIDERADA GLOBAL, OU SEJA ELA ESTARA DISPONIVEL DENTRO DO OBJETO WINDOW

//* GLOBAL => VISIVEL NA APLICAÇÃO INTERIA
//* SCOPO DE FUNÇÃO => VISIVEL APENAS NO BLOCO DA FUNÇÃO NA APLICAÇÃO

