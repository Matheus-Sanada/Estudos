let velocity = 190

if (velocity < 40) { // se for menor que 40 de velocidade é verdadeira esse bloco
    console.log("Velocidade baixa! Acelere mais.")
} else if (velocity <= 100) { // se for menor ou igual 100 de velocidade é verdadeiro esse bloco
    console.log("Cuidado! Risco de acidente")
    
} else { // se ultrapassar de velocidades acimas de 100 sera falso o bloco e no caso esse bloco else sera verdadeiro
    console.log("Risco de morte")

}


(velocity > 100) ? console.log("Velocidade maior que 100") : console.log("Velocidade menor que 100")


// O OPERADOR TERNAIRO IRA AVALIAR A EXPRESSAO ANTES DA INTERROGAÇÃO *(velocity > 100)*, SE FOR UMA EXPRESSAO VERDADEIRA ELE IRA EXECUTAR O PRIMEIRO BLOCO DE CODIGO *console.log("Velocidade maior que 100")*, E CASO SEJA FALSO ELE IRA EXECUTAR O SEGUNDO BLOCO DE CODIGO console.log*("Velocidade menor que 100")*