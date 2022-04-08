## CONHECENDO O SWITCH

- Estruta de controle de fluxo.
- Avalia uma expressão
- Procura a melhor clausula(caso) que atenda ao resultado
> As clausulas, ou casos, são chamados de "cases" 

#### EXEMPLO:

> switch (velocity * 2) {
// switch avalia case a case ate achar um resultado que bata com a propriedade definida.
    case 100:
        console.log("Sua velocidade é 100Km/s")
        break; // Parar a execução
    case 200:
        console.log("Sua velocidade é 200Km/s")
        break;
    default: // é chamado quando nenhum case é encontrado
        console.log("Velocidade nao identificada")
}

## Funcionamento do switch

- A partir do momento em que ele encontra o primeiro cas ele vai executar todos os cases que tiver depois ate ele encontrar um break.