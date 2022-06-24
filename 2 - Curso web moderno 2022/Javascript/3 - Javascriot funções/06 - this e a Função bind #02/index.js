function Pessoa() {

    this.idade = 0

    const self = this
    setInterval(function() {

        self.idade ++
        console.log(self.idade)



    }/*.bind(this)*/, 1000)

    //* O setInterval()método chama uma função em intervalos especificados (em milissegundos). O setInterval()método continua chamando a função até clearInterval()ser chamado ou a janela ser fechada. 1 segundo = 1000 milissegundos.
    
}

new Pessoa