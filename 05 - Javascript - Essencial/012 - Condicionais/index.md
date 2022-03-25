## CONDICIONAIS

- Um dos motivos pela qual tivemos que aprender operadores logicos.
- São blocos de codigos que são executados baseado no resultado de uma expressão logica.
- Tambem são chamados de *Controle de fluxo* 

*Podem direcinar a aplicação por um determinado fluxo com base no valor das expressões*

## CONDICIONAIS IF - ELSE 

- IF -> Significa (se) -> O (IF) avalia se uma expressao esta retornando verdadeiro.

>if (velocity < 100) {
    console.log("Estamos numa velocidade aceitavel")
}

- ELSE -> Significa (SE NÃO) -> O else é executado quando a expressão nao atende ao (IF).
- O ELSE nao existe sem o IF.
  
else {
    console.log("Estamos acima da velocidade aceitavel")
}

### EXEMPLO:

> if (velocity < 40) { // se for menor que 40 de velocidade é verdadeira esse bloco
    console.log("Velocidade baixa! Acelere mais.")
} else if (velocity <= 100) { // se for menor ou igual 100 de velocidade é verdadeiro esse bloco
    console.log("Cuidado! Risco de acidente")
    
>} else { // se ultrapassar de velocidades acimas de 100 sera falso o bloco e no caso esse bloco else sera verdadeiro
>    console.log("Risco de morte") 

}

## OPERADOR TERNAIRO - IF DE UMA LINHA


> (velocity > 100) ? console.log("Velocidade maior que 100") : console.log("Velocidade menor que 100")


- O OPERADOR TERNAIRO IRA AVALIAR A EXPRESSAO ANTES DA INTERROGAÇÃO *(velocity > 100)*, SE FOR UMA EXPRESSAO VERDADEIRA ELE IRA EXECUTAR O PRIMEIRO BLOCO DE CODIGO *console.log("Velocidade maior que 100")*, E CASO SEJA FALSO ELE IRA EXECUTAR O SEGUNDO BLOCO DE CODIGO *console.log("Velocidade menor que 100")*