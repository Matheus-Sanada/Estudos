## Estruturas de repetição

- Estruturas utilizadas para repetir um bloco de codigo
- Pode ser um determinado numero de vezes *ou* até que uma determinada condição seja atendida
- Nós veremos 3:
  > 1. While - Executa um codigo enquanto for verdadeiro
  > 2. For - Executa o codigo ate que encontre um false
  > 3. Do-While -  declaração do...while cria um laço que executa uma declaração até que o teste da condição for falsa

### WHILE

> while(expressão) {
> bloco de codigo a ser executado
> }
##### EXEMPLO 01 

>let velocity = 50
>let aceleration = 5
>while (velocity <= 100){
>    console.log("Acelerando a" + velocity + "Km/s")
>   velocity += aceleration // velocity = velocity + aceleration
>}

