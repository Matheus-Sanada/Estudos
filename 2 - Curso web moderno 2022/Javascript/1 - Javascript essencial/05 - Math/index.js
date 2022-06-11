let raio = 5.6
let area = Math.PI * Math.pow(raio, 2)


console.log(area.toFixed(1))

// Ao contrário de outros objetos globais, Math não é um construtor. Todas as propriedades e métodos de Math são estáticos. Você pode referenciar a constante PI como Math.PI e você pode chamar a função de seno como Math.sin(x), onde x  é o argumento do método. Constantes são definidas com a precisão total de números reais em JavaScript.